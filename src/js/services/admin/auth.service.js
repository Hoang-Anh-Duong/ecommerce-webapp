import axiosHelper from "../../helpers/axios";

const authorizeAdmin = async (
  params,
  onSucces = () => { },
  onError = () => { }
) => {
  try {
    const AUTHORIZE_ADMIN_PATH = "/admin/auth/authenticate"
    const res = await axiosHelper.sendPost(AUTHORIZE_ADMIN_PATH, params);
    if (res?.code === 200) {
      onSucces(res?.data);
    } else if (res?.code === 400) {
      onError(res?.message);
    }
  } catch (error) {
    console.log(error);
  }
};

const getCurrent = async (
  params,
  onSucces = () => { },
  onError = () => { }
) => {
  try {
    const GET_CURRENT_PATH = "/admin/auth/current"
    const res = await axiosHelper.sendGet(GET_CURRENT_PATH);
    if (res?.code === 200) {
      onSucces(res?.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (
  params,
  onSucces = () => { },
  onError = () => { }
) => {
  try {
    const CHANGE_PASSWORD_PATH = "/admin/auth/change-password"
    const res = await axiosHelper.sendPost(CHANGE_PASSWORD_PATH, params, null, true);
    if (res?.code === 200) {
      onSucces(res?.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateInfo = async (
  params,
  onSucces = () => { },
  onError = () => { }
) => {
  try {
    const CHANGE_PASSWORD_PATH = "/admin/auth/profile"
    const res = await axiosHelper.sendPost(CHANGE_PASSWORD_PATH, params, null, true);
    if (res?.code === 200) {
      onSucces(res?.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const forgotPassword = async (
  params,
  onSucces = () => { },
  onError = () => { }
) => {
  try {
    const CHANGE_PASSWORD_PATH = "/admin/auth/forgot-password"
    const res = await axiosHelper.sendPost(CHANGE_PASSWORD_PATH, params, null, true);
    if (res?.code === 200) {
      onSucces(res?.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const adminAuth = {
  authorizeAdmin,
  getCurrent,
  changePassword,
  updateInfo,
  forgotPassword
};

export default adminAuth;
