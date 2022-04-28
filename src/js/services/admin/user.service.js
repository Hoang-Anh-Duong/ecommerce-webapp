import axiosHelper from "../../helpers/axios";

const getAll = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ALL_TAG_PATH = `/admin/customer/${params.page}`
        const res = await axiosHelper.sendPost(GET_ALL_TAG_PATH, params);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const adminUserService =  {
    getAll,
}

export default adminUserService;