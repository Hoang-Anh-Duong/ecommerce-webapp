import axiosHelper from "../../helpers/axios";

const searchAll = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const SEARCH_ALL_ORDER_PATH = `/admin/order/search/${params.page}`
        const res = await axiosHelper.sendPost(SEARCH_ALL_ORDER_PATH, params, null);
        if (res?.code === 200) {
            onSucces(res?.data);
        } else if (res?.code === 400) {
            onError(res?.message);
        }
    } catch (error) {
        console.log(error);
    }
};

const getOrderById = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ORDER_BY_ID_PATH = `/admin/order/${params}`
        const res = await axiosHelper.sendGet(GET_ORDER_BY_ID_PATH, null);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const updateStatus = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ORDER_BY_ID_PATH = `/admin/order`;
        const res = await axiosHelper.sendPut(GET_ORDER_BY_ID_PATH, params, true);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const orderService = {
    searchAll,
    getOrderById,
    updateStatus
};

export default orderService;
