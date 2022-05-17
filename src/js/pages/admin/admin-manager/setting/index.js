import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import adminAuth from "../../../../services/admin/auth.service";

const Setting = () => {
    const [form] = Form.useForm();
    const [isEditMode, setIsEditMode] = useState(false);
    let currentInfo = null;
    useEffect(() => {
        getCurrent();
    }, []);

    const getCurrent = () => {
        adminAuth.getCurrent({},
            (res) => {
                currentInfo = res;
                form.setFieldsValue(res);
            }
        );
    }

    const onFinish = (values) => {
        adminAuth.updateInfo(values,
            (res) => {
                console.log(res);
            }
        )
    }

    return (
        <div>
            <Row>
                <Col span={15}>
                    <Form
                        name="basic"
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="User name"
                            name="username"
                            rules={[{ required: true, message: 'Please input your user name!' }]}
                        >
                            <Input disabled={!isEditMode} />
                        </Form.Item>

                        <Form.Item
                            label="Full name"
                            name="fullname"
                            rules={[]}
                        >
                            <Input disabled={!isEditMode} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input type={'email'} disabled={!isEditMode} />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[]}
                        >
                            <Input disabled={!isEditMode} />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[]}
                        >
                            <Input disabled={!isEditMode} />
                        </Form.Item>

                        <Form.Item style={{ textAlign: 'end' }}>
                            <Button type="primary"
                                style={{
                                    marginRight: '10px'
                                }}
                                onClick={() => { setIsEditMode(!isEditMode); }}
                            >
                                Edit
                            </Button>
                            <Button type="primary" htmlType="submit" disabled={!isEditMode}>
                                Change
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={9} style={{ paddingLeft: '10px' }}>
                    <p>* Note:</p>
                    <p>- User name: use to login</p>
                    <p>- Email: this email will be received forgot password, order</p>
                    <p>- Full name, phone, address: not necessary</p>
                </Col>
            </Row>
        </div>
    );
}

export default Setting;