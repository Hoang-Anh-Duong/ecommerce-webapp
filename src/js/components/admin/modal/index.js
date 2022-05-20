import { Button, Form, Input, Modal } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const ModalCustomer = forwardRef((props, ref) => {
    const {
        title = "NOTHING",
        footer = false,
        style = {},
        bodyStyle = {},
        width = 520,
    } = props;

    useImperativeHandle(ref, () => ({
        showModal() {
            setVisible(true);
        }
    }), []);

    const [visible, setVisible] = useState(false);

    // const onFinish = (values) => {
    //     adminAuth.changePassword(values,
    //         (res) => {
    //             handleCancel();
    //         }
    //     )
    // };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleCancel = e => {
        clearData();
        setVisible(false);
    };

    const clearData = () => {
    }

    return (
        <div>
            <Modal
                visible={visible}
                title={title}
                onCancel={handleCancel}
                footer={footer}
                style={style}
                width={width}
                bodyStyle={bodyStyle}
            >
                <div>{props.children}</div>
            </Modal>
        </div>
    );
})

export default ModalCustomer;