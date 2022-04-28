import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import Validator from "hero-validate";
import userRegister from '../../../services/user/register.service';
import { useHistory } from 'react-router-dom';
import toastCustom from '../../../helpers/toast-custom';
import { StyleUserInfomationComponent } from './styled';

const UserInformationComponent = () => {
    const [dataInfo, setDataInfo] = useState({
        name: "",
        phone: "",
        address: "",
    });
    const [touch, setTouch] = useState({
        name: false,
        phone: false,
        address: false,
    })
    const history = useHistory();

    const rules = {
        name: "required|min:0",
        phone: {
            required: true,
            mycustom: function () {
                var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if (dataInfo.phone !== "") {
                    if (vnf_regex.test(dataInfo.phone) == false) {
                        return "Số điện thoại của bạn không đúng định dạng!";
                    } else {
                        return true;
                    }
                }
            }
        },
        address: "required|min:0",
    }

    Validator.setMessages({
        name: {
            required: "Không được để trống",
        },
        phone: {
            required: "Bạn chưa nhập số điện thoại",
            mycustom: "not be the same password"
        },
        address: {
            required: "Không được để trống",
        },

    });
    const result = Validator.validate(dataInfo, rules);

    const handleChangeInput = (e) => {
        setDataInfo({
            ...dataInfo,
            [e.target.name]: e.target.value,
        })
        setTouch({
            ...touch,
            [e.target.name]: true,
        })
    }
    const handleClickBtnSubmit = (e) => {
        e.preventDefault();
        console.log(dataInfo);
        console.log(result)
    }
    return (
        <StyleUserInfomationComponent>
            <div className="register-container">
                <Row>
                    <Col span={12} xs={24} xl={12}>
                        <div className="form-register">
                            <div className="header-form">thông tin của bạn</div>
                            <form method='post'>
                                <div className="input-container">
                                    <label className="input-name">Họ và tên</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập họ tên..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch.name && result.errors?.name) && result.errors?.name}
                                </div>
                                <div className="input-container">
                                    <label className="input-name">Số điện thoại</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập số điện thoại..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch?.phone && result.errors?.phone)}
                                </div>
                                <div className="input-container">
                                    <label className="input-name">Địa chỉ</label>
                                    <input
                                        type="text"
                                        name="address"
                                        onChange={handleChangeInput}
                                        placeholder="Nhập địa chỉ..."
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">
                                    {(touch?.address && result.errors?.address)}
                                </div>
                                <div>
                                    <button
                                        onClick={handleClickBtnSubmit}
                                    >
                                        Cập nhật
                                        <AiOutlineArrowRight className="scale1_5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col span={12} xs={24} xl={12}>
                        <div className="right-text">
                            <div className="header-text">
                                thông tin tài khoản
                            </div>
                            <div className="register-text">
                                Cập nhật thông tin sẽ giúp bạn:
                            </div>
                            <div className="register-text">
                                <AiOutlineCheck />
                                Đặt hàng nhanh hơn</div>
                            <div className="register-text">
                                <AiOutlineCheck />
                                Nhận những ưu đãi tuyệt vời nhất</div>
                            <div className="register-text">
                                <AiOutlineCheck />
                                Chúng tôi có thể hỗ trợ bạn tốt nhất</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleUserInfomationComponent>
    );
};

export default UserInformationComponent;