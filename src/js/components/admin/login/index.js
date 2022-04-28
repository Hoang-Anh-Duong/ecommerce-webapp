import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';
import adminAuth from '../../../services/admin/auth.service';
import storage from '../../../helpers/storage';
import { Redirect, useLocation } from 'react-router-dom';
import Auth from '../../../helpers/auth';

const LoginComponent = () => {
    const [form] = Form.useForm();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const { state } = useLocation();

    const onFinish = async (value) => {
        setLoading(false);
        if (!loading) {
            await adminAuth.authorizeAdmin(value, (res) => {
                storage.setAdminToken(res.token);
                Auth.authenticated(() => {
                    setIsAuthenticated(true);
                })
            }).finally(() => setLoading(true));
        }
    };

    if (isAuthenticated === true) {
        return (<Redirect to={state?.from} />)
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            paddingTop: '10rem',
            background: '#fff88c'
        }}>
            <div style={{
                width: '500px',
                border: '1px solid #0074f4',
                padding: 20,
                margin: 'auto',
                borderRadius: '5px',
                background: 'white'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Admin login</h2>
                </div>
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="User name"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        type="password"
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginComponent;