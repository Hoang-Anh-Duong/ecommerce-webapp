import axiosHelper from "../../helpers/axios";

const getAll = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ALL_IMAGE_PATH = `/admin/image/${params?.page || 0}`
        const data = {
            perPage: params?.perPage
        }
        const res = await axiosHelper.sendPost(GET_ALL_IMAGE_PATH, data);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const uploadImage = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const UPLOAD_IMAGE_PATH = `/admin/image/upload`
        const res = await axiosHelper.sendPost(UPLOAD_IMAGE_PATH, params, null, true);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteImage = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const DELETE_IMAGE_PATH = `/admin/image/${params.id}`
        const res = await axiosHelper.sendDelete(DELETE_IMAGE_PATH, params, true);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const getImageByIds = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_IMAGE_BY_IDS_PATH = `/admin/image`
        const res = await axiosHelper.sendPost(GET_IMAGE_BY_IDS_PATH, params);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const imageService = {
    getAll,
    uploadImage,
    deleteImage,
    getImageByIds,
};

export default imageService;
