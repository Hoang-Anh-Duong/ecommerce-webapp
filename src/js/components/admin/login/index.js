import { Button, Form, Input } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Auth from '../../../helpers/auth';
import storage from '../../../helpers/storage';
import adminAuth from '../../../services/admin/auth.service';
import ForgotPasswordModal from '../modal/forgot-password'

const LoginComponent = () => {
    const [form] = Form.useForm();
    const ref = useRef();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorLogin, setErrorLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const { state } = useLocation();

    useEffect(() => {
        storage.clearToken();
    }, [])

    const onFinish = (value) => {
        setLoading(false);
        if (!loading) {
            adminAuth.authorizeAdmin(value,
                (res) => {
                    storage.setAdminToken(res.token);
                    Auth.authenticated(() => {
                        setIsAuthenticated(true);
                    })
                    setLoading(true);
                },
                (err) => {
                    setLoading(false);
                    console.log(err)
                    setErrorLogin(err);
                }
            );
        }
    };

    if (isAuthenticated === true) {
        return (<Redirect to={state?.from || '/admin/category-manager'} />)
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
                {errorLogin && <div style={{ textAlign: 'center', color: 'red', fontStyle: 'inherit' }}>{errorLogin}</div>}
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    autoComplete="off"
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
                        <Input.Password placeholder="input placeholder" />
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'end' }}>
                        <a onClick={() => { console.log("duong"); ref.current.showModal() }}>Forgot password?</a>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'end' }}>
                        <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
            <ForgotPasswordModal ref={ref} />
        </div>
    );
};

export default LoginComponent;