import { Button, Form, Input, Modal } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import adminAuth from "../../../../services/admin/auth.service";

const ChangePasswordModal = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        showModal() {
            setVisible(true);
        }
    }), []);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        adminAuth.changePassword(values,
            (res) => {
                handleCancel();
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

    return (
        <div>
            <Modal
                visible={visible}
                title={'CHANGE PASSWORD'}
                onCancel={handleCancel}
                footer={false}
                style={{ top: 140 }}
                bodyStyle={{ height: '250px' }}
            >
                <Form
                    name="basic"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Current password"
                        name="currentPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Re-password"
                        name="rePassword"
                        rules={
                            [
                                {
                                    required: true, message: 'Please input your password!'
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The Re-password that you entered do not match!'));
                                    },
                                }),
                            ]
                        }
                    >
                        <Input.Password />
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

export default ChangePasswordModal;