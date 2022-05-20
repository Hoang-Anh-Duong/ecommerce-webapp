import { Spin } from "antd";

const LoadingOverlayCustomer = (props) => {
    const {
        isActive = false
    } = props;
    return (
        isActive && <div
            style={{
                width: '100vh',
                height: '100vh',
                background: 'black'
            }}
        >
            {isActive && <Spin />}
        </div>
    );

}

export default LoadingOverlayCustomer;