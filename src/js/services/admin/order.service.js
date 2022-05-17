import axiosHelper from "../../helpers/axios";

const searchAll = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const SEARCH_ALL_ORDER_PATH = `/admin/order/search/${params.page}`
        const res = await axiosHelper.sendPost(SEARCH_ALL_ORDER_PATH, params, null, true);
        if (res?.code === 200) {
            onSucces(res?.data);
        } else if (res?.code === 400) {
            onError(res?.message);
        }
    } catch (error) {
        console.log(error);
    }
};

const orderService = {
    searchAll,
};

export default orderService;
