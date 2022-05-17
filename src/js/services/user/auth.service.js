import axiosHelper from "../../helpers/axios";

const authorizeUser = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const authorizeUserPath = `/customer/auth/authenticate`;
        const res = await axiosHelper.sendPost(authorizeUserPath, params);
        if (res?.code === 200 || 400) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const verifiedMail = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const verifiedMailPath = `/customer/auth/verifiedMail/${params}`;
        const res = await axiosHelper.sendGet(verifiedMailPath);
        if (res) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const ChangePassword = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const changePasswordPath = `/customer/auth/change-password`;
        const res = await axiosHelper.sendPost(changePasswordPath, params);
        if (res) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const ForgetPassword = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const changePasswordPath = `/customer/auth/forgot-password`;
        const res = await axiosHelper.sendPost(changePasswordPath, params);
        if (res) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const userAuth = {
    authorizeUser,
    verifiedMail,
    ChangePassword,
    ForgetPassword,
};

export default userAuth;
