import axios from "axios";
import envApp from "./envApp";
import storageFC from "./storage";
import toast from "./toast-custom";
import { HTTP_CODE } from "../constants/constant";

const axiosInstance = axios.create({
  baseURL: envApp.API,
  timeout: 30000,
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});

const logout = () => {
  storageFC.clearToken();
  window.location.replace("/admin");
};

axiosInstance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    const { pathname } = window?.location;
    if (pathname?.includes("/admin")) {
      config.headers.Authorization = `Bearer ${storageFC.getAdminToken()}`;
    } else {
      config.headers.Authorization = `Bearer ${storageFC.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.code === 401) {
      logout();
    }
    return response
  },
  (error) => {
    // if (error.response.status !== 404) {
    //   history.push("/not-found");
    // }
    if (error?.response?.status === 401) {
      // logout();
    }
    if (error?.response?.status === 103) {
      // history.push("/logout");
    }
    return error.response;
  }
);

export const sendGet = (url = "", params, toast = false) => axiosInstance.get(url, { params })
  .then((res) => {
    handleToast(toast, res.data);
    return res.data
  });

export const sendPost = (url = "", params, queryParams, toast = false) => axiosInstance
  .post(url, params, { params: queryParams, timeout: queryParams?.timeout }, toast)
  .then((res) => {
    handleToast(toast, res.data);
    return res.data
  });

export const sendPut = (url = "", params, toast = false) => axiosInstance.put(url, params)
  .then((res) => {
    handleToast(toast, res.data);
    return res.data
  });

export const sendPatch = (url = "", params) => axiosInstance.patch(url, params)
  .then((res) => {
    handleToast(toast, res.data);
    return res.data
  });

export const sendDelete = (url = "", params, toast = false) => axiosInstance
  .delete(url, { data: params }, toast)
  .then((res) => {
    handleToast(toast, res.data);
    return res.data
  });

export const sendCustom = (params = {}) => axiosInstance(params)
  .then((res) => {
    handleToast(toast, res.data);
    return res.data
  });

function handleToast(isShow, baseResponse) {
  if (!isShow) {
    return;
  }
  let type = 'default';
  if (baseResponse.code === HTTP_CODE.SUCCESS) {
    type = 'success';
  } else if (baseResponse.code === HTTP_CODE.BAD_REQUEST) {
    type = 'error';
  } else if (baseResponse.code === HTTP_CODE.NOT_POUND || baseResponse.code === HTTP_CODE.CONFLIC) {
    type = 'warning';
  } else {
    type = 'info';
  }
  return toast({ mess: baseResponse.message, type: type });
}

const axiosCustom = {
  sendGet,
  sendPost,
  sendPut,
  sendPatch,
  sendDelete,
  sendCustom,
}

export default axiosCustom;