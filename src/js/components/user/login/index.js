import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { StyleLoginComponent } from './styled';
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import Validator from "hero-validate";
import userAuth from '../../../services/user/auth.service';
import { useHistory } from 'react-router-dom';

const LoginComponent = () => {

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

    const [dataLogin, setDataLogin] = useState({
        "username": "",
        "password": "",
    });

    const [touch, setTouch] = useState({
        username: false,
        password: false,
    })

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

    const result = Validator.validate(dataLogin, rules);

    const history = useHistory();

    const handleClickBtnSubmit = (e) => {
        e.preventDefault();
        if (!result.hasError) {
            userAuth.authorizeUser(
                dataLogin,
                () => { },
                () => { }
            );
            history.push("/");
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
                                <div className="input-container">
                                    <button onClick={handleClickBtnSubmit}>Đăng nhập<AiOutlineArrowRight className="scale1_5" /></button>
                                    {/* <span className="behind-button"></span> */}
                                </div>
                                {console.log(result)}
                            </form>
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