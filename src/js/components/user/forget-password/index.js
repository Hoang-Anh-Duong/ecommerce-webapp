import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import Validator from "hero-validate";
import { useHistory } from 'react-router-dom';
import toastCustom from '../../../helpers/toast-custom';
import userAuth from '../../../services/user/auth.service';
import { StyleForgetPasswordComponent } from './styled';

const ForgetPasswordComponent = () => {
    const [dataForgetPassword, setDataForgetPassword] = useState({
        username: "",
        email: "",
    });
    const [touch, setTouch] = useState({
        username: false,
        email: false,
    })
    const history = useHistory();

    const rules = {
        username: "required|min:6|max:20",
        email: "required|email",
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
        }
    });
    const result = Validator.validate(dataForgetPassword, rules);

    const handleChangeInput = (e) => {
        setDataForgetPassword({
            ...dataForgetPassword,
            [e.target.name]: e.target.value,
        })
        setTouch({
            ...touch,
            [e.target.name]: true,
        })
    }
    const handleClickBtnSubmit = (e) => {
        e.preventDefault();
        if (!result.hasError) {
            userAuth.ForgetPassword(
                dataForgetPassword,
                (data) => {
                    if (data.code == 200) {
                        toastCustom({
                            mess: "Đổi mật khẩu thành công",
                            type: "success"
                        });
                        history.push("/change-password");
                    } else {
                        toastCustom({
                            mess: "Kiểm tra lại tài khoàn và mật khẩu",
                            type: "warn"
                        });
                    }
                }
            )
        }
    }

    return (
        <StyleForgetPasswordComponent>
            <div className="register-container">
                <Row>
                    <Col span={12} xs={24} xl={12}>
                        <div className="form-register">
                            <div className="header-form">Lấy lại mật khẩu</div>
                            <form method='post'>
                                <div className="input-container">
                                    <label className="input-name">Tài khoản</label>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập tài khoản..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch.username && result.errors?.username)}
                                </div>
                                <div className="input-container">
                                    <label className="input-name">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập email..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch.email && result.errors?.email) && result.errors?.email}
                                </div>
                                <div className="">
                                    <button
                                        onClick={handleClickBtnSubmit}
                                    >
                                        Xác nhận
                                        <AiOutlineArrowRight className="scale1_5" />
                                    </button>
                                    {/* <span className="behind-button"></span> */}
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col span={12} xs={24} xl={12}>
                        <div className="right-text">
                            <div className="header-text">Sau khi lấy lại mật khẩu</div>
                            <div className="register-text"><AiOutlineCheck /> Kiểm tra lại email lấy lại mật khẩu</div>
                            <div className="register-text"><AiOutlineCheck /> Đổi mật khẩu mới</div>
                            {/* <div className="register-text"><AiOutlineCheck /> Xem lịch sử đặt hàng riêng của bạn</div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleForgetPasswordComponent>
    );
};

export default ForgetPasswordComponent;