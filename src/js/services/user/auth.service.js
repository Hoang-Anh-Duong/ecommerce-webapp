import axiosHelper from "../../helpers/axios";

const authorizeUserPath = "/customer/auth/authenticate";

const authorizeUser = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const res = await axiosHelper.sendPost(authorizeUserPath, params);
        if (res?.code === 200 || 400) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const userAuth = {
    authorizeUser,
};

export default userAuth;
