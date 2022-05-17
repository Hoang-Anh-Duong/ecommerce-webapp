import axiosHelper from "../../helpers/axios";

const getUserInformation = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const userInformationPath = `/customer/auth/current`;
        const res = await axiosHelper.sendGet(userInformationPath);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const updateUserInformation = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const updateUserInformationPath = `/customer/auth/profile`;
        const res = await axiosHelper.sendPost(updateUserInformationPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}
const userInformationService = {
    getUserInformation,
    updateUserInformation
};

export default userInformationService;
