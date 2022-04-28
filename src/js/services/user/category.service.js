import axiosHelper from "../../helpers/axios";

const getListCategories = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const listAllCategoryPath = `/customer/category/all`;
        const res = await axiosHelper.sendGet(listAllCategoryPath);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const categoryService = {
    getListCategories,
};

export default categoryService;
