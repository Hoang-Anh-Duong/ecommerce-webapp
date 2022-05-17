import { Button, Form, Input, Modal, notification } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import adminAuth from "../../../../services/admin/auth.service";

const ForgotPasswordModal = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        showModal() {
            setVisible(true);
        }
    }), []);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        adminAuth.forgotPassword(values,
            (res) => {
                console.log(res);
                openNotification();
            }
        )
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleCancel = e => {
        clearData();
        setVisible(false);
    };

    const clearData = () => {
        form.resetFields();
    }

    const openNotification = () => {
        notification['success']({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }

    return (
        <div>
            <Modal
                visible={visible}
                title={'FORGOT PASSWORD'}
                onCancel={handleCancel}
                footer={false}
                style={{ top: 140 }}
                bodyStyle={{ height: '200px' }}
            >
                <Form
                    name="basic"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="User name"
                        name="username"
                        rules={[{ required: true, message: 'Please input your user name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type={'email'} />
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'end' }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
})

export default ForgotPasswordModal;