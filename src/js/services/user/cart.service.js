import axiosHelper from "../../helpers/axios";

const addProductToCart = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const addProductToCartPath = `/customer/cart`;
        const res = await axiosHelper.sendPost(addProductToCartPath, params);
        if (res?.code === 200 || 400) {
            onSuccess(res?.code);
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllProductInCart = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const getAllProductInCartPath = `/customer/cart`;
        const res = await axiosHelper.sendGet(getAllProductInCartPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data.productOrder);
        }
    } catch (error) {
        console.log(error);
    }
}

const updateQuantityProductToCart = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const updateQuantityProductToCartPath = `/customer/cart`;
        const res = await axiosHelper.sendPost(updateQuantityProductToCartPath, params);
        if (res?.code === 200) {
            onSuccess(res);
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

const cartService = {
    addProductToCart,
    getAllProductInCart,
    updateQuantityProductToCart,
    deleteProductFromCart,
};

export default cartService;
