import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import Validator from "hero-validate";
import { useHistory } from 'react-router-dom';
import toastCustom from '../../../helpers/toast-custom';
import { StyleChangePasswordConponent } from './styled';
import userAuth from '../../../services/user/auth.service';

const ChangePasswordComponent = () => {
    const [dataPassword, setDataPassword] = useState({
        currentPassword: "",
        password: "",
        rePassword: "",
    });
    const [touch, setTouch] = useState({
        currentPassword: false,
        password: false,
        rePassword: false,
    })
    const history = useHistory();

    const rules = {
        currentPassword: "required|min:8|max:100",
        password: "required|min:8|max:100",
        rePassword: {
            required: true,
            mycustom: function (value) {
                if (value !== dataPassword.password) {
                    return "Mật khẩu không khớp";
                }
                return true;
            },
        },
    }

    Validator.setMessages({
        currentPassword: {
            required: "Không được để trống",
            min: "Không được ngắn hơn :min kí tự",
            max: "Không được dài hơn :max kí tự",
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
    const result = Validator.validate(dataPassword, rules);

    const handleChangeInput = (e) => {
        setDataPassword({
            ...dataPassword,
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
            userAuth.ChangePassword(
                dataPassword,
                (data) => {
                    if (data.code === 200) {
                        toastCustom({
                            mess: "Đổi mật khẩu thành công",
                            type: "success",
                        });
                        history.goBack();
                    } else {
                        toastCustom({
                            mess: data.message,
                            type: "error",
                        });
                    }
                },
                () => { }
            )
            console.log(dataPassword)
        }
    }

    return (
        <StyleChangePasswordConponent>
            <div className="register-container">
                <Row>
                    <Col span={12} xs={24} xl={12}>
                        <div className="form-register">
                            <div className="header-form">Đổi mật khẩu</div>
                            <form method='post'>
                                <div className="input-container">
                                    <label className="input-name">Mật khẩu hiện tại</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập tài khoản..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch.currentPassword && result.errors?.currentPassword)}
                                </div>
                                <div className="input-container">
                                    <label className="input-name">Mật khẩu mới</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập mật khẩu..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch.password && result.errors?.password) && result.errors?.password}
                                </div>
                                <div className="input-container">
                                    <label className="input-name">Xác nhận mật khẩu</label>
                                    <input
                                        type="password"
                                        name="rePassword"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập lại mật khẩu..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch.rePassword && result.errors?.rePassword) && result.errors?.rePassword}
                                </div>
                                <div className="">
                                    <button onClick={handleClickBtnSubmit}>Đổi mật khẩu<AiOutlineArrowRight className="scale1_5" /></button>
                                    {/* <span className="behind-button"></span> */}
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col span={12} xs={24} xl={12}>
                        <div className="right-text">
                            <div className="header-text">Thay đổi mật khẩu</div>
                            <div className="register-text">Sau khi thay đổi mật khẩu:</div>
                            <div className="register-text"><AiOutlineCheck /> Bảo mật tài khoản</div>
                            <div className="register-text"><AiOutlineCheck /> Tiếp tục mua sắm an toàn</div>
                            <div className="register-text"><AiOutlineCheck /> Xem lịch sử đặt hàng riêng của bạn</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleChangePasswordConponent>
    );
};

export default ChangePasswordComponent;