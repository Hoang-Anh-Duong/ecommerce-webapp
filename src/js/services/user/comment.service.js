import axiosHelper from "../../helpers/axios";

const getAllCommentByIdProduct = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const getAllCommentByIdProductPath = `/customer/comment/${params}`;
        const res = await axiosHelper.sendGet(getAllCommentByIdProductPath);
        if (res?.code == 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const createNewComment = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const getAllCommentByIdProductPath = `/customer/comment`;
        const res = await axiosHelper.sendPost(getAllCommentByIdProductPath, params);
        if (res?.code) {
            onSuccess(res?.message);
        }
    } catch (error) {
        console.log(error);
    }
}

const commentService = {
    getAllCommentByIdProduct,
    createNewComment,
};

export default commentService;
