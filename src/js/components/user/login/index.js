import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { StyleLoginComponent } from './styled';
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import Validator from "hero-validate";
import userAuth from '../../../services/user/auth.service';
import { useHistory } from 'react-router-dom';
import storage from '../../../helpers/storage';
import toastCustom from '../../../helpers/toast-custom';

const LoginComponent = () => {
    const history = useHistory();
    const [dataLogin, setDataLogin] = useState({
        "username": "",
        "password": "",
    });
    const [touch, setTouch] = useState({
        username: false,
        password: false,
    });

    const rules = {
        username: "required|min:6|max:20",
        password: "required|min:8|max:100",
    }

    Validator.setMessages({
        username: {
            required: "Không được để trống",
            min: "Không được ngắn hơn :min kí tự",
            max: "Không được dài hơn :max kí tự",
        },
        password: {
            required: "Không được để trống",
            min: "Không được ngắn hơn :min kí tự",
            max: "Không được dài hơn :max kí tự",
        },
    });
    const result = Validator.validate(dataLogin, rules);

    const handleChangeInput = (e) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value,
        });
        setTouch({
            ...touch,
            [e.target.name]: true,
        })
    }

    const handleClickBtnSubmit = (e) => {
        e.preventDefault();
        if (!result.hasError) {
            userAuth.authorizeUser(
                dataLogin,
                (data) => {
                    if (data?.code === 200) {
                        toastCustom({
                            mess: "Đăng nhập thành công.",
                            type: "success"
                        });
                        storage.setToken(data.data.token);
                        history.push("/");
                    } else {
                        toastCustom({
                            mess: "Sai tài khoản hoặc mật khẩu",
                            type: "error"
                        });
                    }
                },
                () => { }
            );
        }
    }

    return (
        <StyleLoginComponent>
            <div className="register-container">
                <Row>
                    <Col span={12} xs={24} xl={12}>
                        <div className="form-register">
                            <div className="header-form">Đăng nhập</div>
                            <form>
                                <div className="input-container">
                                    <label className="input-name">Tài khoản</label>
                                    <input type="text" name="username" onChange={handleChangeInput} placeholder="Nhập tài khoản..." required />
                                </div>
                                <div className="invalid-feedback">{(touch.username && result.errors?.username) && result.errors?.username}</div>
                                <div className="input-container">
                                    <label className="input-name">Mật khẩu</label>
                                    <input type="password" name="password" onChange={handleChangeInput} placeholder="Nhập mật khẩu..." required />
                                </div>
                                <div className="invalid-feedback">{(touch.password && result.errors?.password) && result.errors?.password}</div>
                                <div className="">
                                    <button onClick={handleClickBtnSubmit}>Đăng nhập<AiOutlineArrowRight className="scale1_5" /></button>
                                    {/* <span className="behind-button"></span> */}
                                </div>
                            </form>
                            <div
                                className="forget-password"
                                onClick={() => history.push("/forget-password")}
                            >
                                Quên mật khẩu?
                            </div>
                        </div>
                    </Col>
                    <Col span={12} xs={24} xl={12}>
                        <div className="right-text">
                            <div className="header-text">Tạo một tài khoản</div>
                            <div className="register-text">Thật dễ dàng tạo một tài khoản và tận hưởng những lợi ích của việc sở hữu một tài khoản.</div>
                            <div className="register-text"><AiOutlineCheck /> Một lần đăng nhập duy nhất để tương tác với các sản phẩm và dịch vụ</div>
                            <div className="register-text"><AiOutlineCheck /> Thanh toán nhanh hơn</div>
                            <div className="register-text"><AiOutlineCheck /> Ưu đãi và khuyến mãi độc quyền</div>
                            <div className="register-text"><AiOutlineCheck /> Các sản phẩm mới nhất</div>
                            <div className="register-text"><AiOutlineCheck /> Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới</div>
                            <div className="register-text"><AiOutlineCheck /> Các sự kiện sắp tới</div>
                            <Link to="/register">
                                <button className="register-button">Đăng Ký <AiOutlineArrowRight className="scale1_5" /></button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleLoginComponent>
    );
};

export default LoginComponent;