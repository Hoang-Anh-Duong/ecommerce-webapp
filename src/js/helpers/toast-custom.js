import { Slide, toast } from "react-toastify";

const toastCustom = ({ mess = '', type = "default" }) => {
    const TYPE_LIST_TOAST = ["info", "success", "warning", "error"];

    const config = {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        newsestOnTop: true,
        transition: Slide,
        theme: "colored",
        hideProgressBar: false,
    };

    const toastType = TYPE_LIST_TOAST.find((typeItem) => typeItem === type);
    if (toastType) {
        toast[toastType](mess, config);
    }
};

export default toastCustom;