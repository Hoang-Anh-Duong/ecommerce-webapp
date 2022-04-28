import axiosHelper from "../../helpers/axios";

const registerUser = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const registerUserPath = "/customer/auth/register";
        const res = await axiosHelper.sendPost(registerUserPath, params);
        if (res?.code) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const userRegister = {
    registerUser,
};

export default userRegister;
