import axiosHelper from "../../helpers/axios";

const createOrder = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const createOrderPath = `/customer/order`;
        const res = await axiosHelper.sendPost(createOrderPath, params);
        if (res?.code === 200) {
            onSuccess();
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllOrder = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const getAllProductInCartPath = `/customer/order`;
        const res = await axiosHelper.sendGet(getAllProductInCartPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteProductFromCart = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const deleteProductFromCartPath = `/customer/cart`;
        const res = await axiosHelper.sendDelete(deleteProductFromCartPath, params);
        if (res?.code) {
            onSuccess();
        }
    } catch (error) {
        console.log(error);
    }
}

const orderService = {
    createOrder,
    getAllOrder,
    deleteProductFromCart,
};

export default orderService;
