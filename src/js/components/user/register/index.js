import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { StyleRegisterComponent } from './styled';
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import Validator from "hero-validate";
import userRegister from '../../../services/user/register.service';
import { useHistory } from 'react-router-dom';
import toastCustom from '../../../helpers/toast-custom';

const RegisterComponent = () => {
    const [dataRegister, setDataRegister] = useState({
        "username": "",
        "email": "",
        "password": "",
        "confirmPassword": "",
    });
    const [touch, setTouch] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
    })
    const history = useHistory();

    const rules = {
        username: "required|min:6|max:20",
        email: "required|email",
        password: "required|min:8|max:100",
        confirmPassword: {
            required: true,
            mycustom: function (value) {
                if (value !== dataRegister.password) {
                    return "Mật khẩu không khớp";
                }
                return true;
            },
        },
    }

    Validator.setMessages({
        username: {
            required: "Không được để trống",
            min: "Không được ngắn hơn :min kí tự",
            max: "Không được dài hơn :max kí tự",
        },
        email: {
            required: "Không được để trống",
            email: "Không phải một email",
        },
        password: {
            required: "Không được để trống",
            min: "Không được ngắn hơn :min kí tự",
            max: "Không được dài hơn :max kí tự",
        },
        confirmPassword: {
            required: "Không được để trống",
            mycustom: "not be the same password"
        },

    });
    const result = Validator.validate(dataRegister, rules);

    const handleChangeInput = (e) => {
        setDataRegister({
            ...dataRegister,
            [e.target.name]: e.target.value,
        })
        setTouch({
            ...touch,
            [e.target.name]: true,
        })
    }
    const handleClickInput = (e) => {
        // setTouch({
        //     ...touch,
        //     [e.target.name]: true,
        // })
    }
    const handleClickBtnSubmit = (e) => {
        e.preventDefault();
        if (!result.hasError) {
            userRegister.registerUser(
                dataRegister,
                (data) => {
                    if (data.code === 200) {
                        toastCustom({
                            mess: "Bạn đã đăng ký tài khoản thành công!",
                            type: "success",
                        });
                        history.push("/login");
                    } else {
                        toastCustom({
                            mess: "Tên đăng nhập đã tồn tại",
                            type: "error",
                        });
                    }
                },
                () => { }
            );
        }
    }

    return (
        <StyleRegisterComponent>
            <div className="register-container">
                <Row>
                    <Col span={12} xs={24} xl={12}>
                        <div className="form-register">
                            <div className="header-form">Đăng ký</div>
                            <form method='post'>
                                <div className="input-container">
                                    <label className="input-name">Tài khoản</label>
                                    <input type="text" name="username" onClick={handleClickInput} onChange={handleChangeInput} placeholder="Nhập tài khoản..." required />
                                </div>
                                <div className="invalid-feedback">{(touch.username && result.errors?.username)}</div>
                                <div className="input-container">
                                    <label className="input-name">Email</label>
                                    <input type="email" name="email" onClick={handleClickInput} onChange={handleChangeInput} placeholder="Nhập email..." required />
                                </div>
                                <div className="invalid-feedback">{(touch.email && result.errors?.email) && result.errors?.email}</div>
                                <div className="input-container">
                                    <label className="input-name">Mật khẩu</label>
                                    <input type="password" name="password" onClick={handleClickInput} onChange={handleChangeInput} placeholder="Nhập mật khẩu..." required />
                                </div>
                                <div className="invalid-feedback">{(touch.password && result.errors?.password) && result.errors?.password}</div>
                                <div className="input-container">
                                    <label className="input-name">Xác nhận mật khẩu</label>
                                    <input type="password" name="confirmPassword" onClick={handleClickInput} onChange={handleChangeInput} placeholder="Nhập lại mật khẩu..." required />
                                </div>
                                <div className="invalid-feedback">{(touch.confirmPassword && result.errors?.confirmPassword) && result.errors?.confirmPassword}</div>
                                <div className="">
                                    <button onClick={handleClickBtnSubmit}>Đăng ký<AiOutlineArrowRight className="scale1_5" /></button>
                                    {/* <span className="behind-button"></span> */}
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col span={12} xs={24} xl={12}>
                        <div className="right-text">
                            <div className="header-text">Tạo một tài khoản</div>
                            <div className="register-text">Đăng nhập sẽ giúp bạn truy cập:</div>
                            <div className="register-text"><AiOutlineCheck /> Một lần đăng nhập duy nhất để tương tác với các sản phẩm và dịch vụ</div>
                            <div className="register-text"><AiOutlineCheck /> Thanh toán nhanh hơn</div>
                            <div className="register-text"><AiOutlineCheck /> Xem lịch sử đặt hàng riêng của bạn</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleRegisterComponent>
    );
};

export default RegisterComponent;