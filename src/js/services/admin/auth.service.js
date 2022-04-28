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

const adminAuth = {
  authorizeAdmin,
  getCurrent
};

export default adminAuth;
