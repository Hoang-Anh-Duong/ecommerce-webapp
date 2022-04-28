import React, { useEffect, useState } from 'react';
import StyleWebHeaderComponent from './styled';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillCaretDown } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Col, Menu, Row, Dropdown, Space, Input } from 'antd';
import storage from '../../../../../../../helpers/storage';
import { useHistory } from 'react-router-dom';

const WebHeaderComponent = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!storage.getToken());
    const history = useHistory();
    const token = storage.getToken();

    const { Search } = Input;
    const accountFeature = (
        <Menu>
            <Menu.Item key={"user-information"}>
                <div
                    onClick={() => { history.push("/user-information"); }}
                >
                    Thông tin cá nhân
                </div>
            </Menu.Item>
            <Menu.Item key={"logout"}>
                <div
                    onClick={() => { storage.clearToken(); history.push("/"); }}
                >
                    Đăng xuất
                </div>
            </Menu.Item>
        </Menu>
    );

    const onSearch = (value) => {
        history.push(`/product?search=${value}`);
    }

    useEffect(() => {
        if (storage.getToken()) {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }, [token])

    return (
        <StyleWebHeaderComponent>
            <div className="header">
                <Row className="top-header">
                    <Col span={10} className="top-label">Miễn phí giao hàng trên 1.300.000 VND</Col>
                    <Col span={4} className="top-label">Trả hàng dễ dàng</Col>
                    <Col span={10} className="top-label">Đã có thể thanh toán qua thẻ</Col>
                </Row>
                <div className="header-mid">
                    <div className="label">
                        <span className="mid-label">
                            <Link to="/"><span className="text-color">Trợ giúp</span></Link>
                        </span>
                        <span className="mid-label">
                            <Link to="/order"><span className="text-color">Theo dõi đơn hàng</span></Link>
                        </span>
                        <span className="mid-label">
                            <Link to="/"><span className="text-color">Đăng ký nhận tin</span></Link>
                        </span>
                        {!isAuthenticated ?
                            <span className="mid-label">
                                <Link to='/login'><span className="text-color">Đăng nhập</span></Link>
                            </span> :
                            <Space wrap>
                                <Dropdown overlay={accountFeature}>
                                    <div className="">
                                        Đã đăng nhập
                                        <AiFillCaretDown className="scale1_5" />
                                    </div>
                                </Dropdown>
                            </Space>}

                    </div>
                </div>
                <div className="header-bot">
                    <Row>
                        <Col span={2}>
                            <span className="header-logo">
                                <Link to="/">
                                    <img className="logo" src="/images/logo.png" alt="logo" />
                                </Link>
                            </span>
                        </Col>
                        <Col xs={1} xl={3}></Col>
                        <Col xs={16} xl={13}>
                            <span className="header-menu">
                                <Space wrap>
                                    <span
                                        className="label-bot"
                                        onClick={() => { history.push("/") }}
                                    >
                                        Trang chủ
                                    </span>
                                    <span
                                        className="label-bot"
                                        onClick={() => { history.push("/product") }}
                                    >
                                        Sản phẩm
                                    </span>
                                    <span className="label-bot">Tin tức</span>
                                    <span className="label-bot">Về chúng tôi</span>
                                    <span className="label-bot">Các nhãn hiệu</span>
                                </Space>
                            </span>
                        </Col>
                        <Col xs={0} xl={1}></Col>
                        <Col span={3}>
                            <span >
                                <Search
                                    className="search"
                                    placeholder="Tìm kiếm..."
                                    onSearch={onSearch}
                                />
                            </span>
                        </Col>
                        <Col span={1}>
                            <span className="wish-list"><AiOutlineHeart /></span>
                        </Col>
                        <Col span={1}>
                            <span
                                className="cart"
                                onClick={() => { history.push("/cart") }}
                            >
                                <HiOutlineShoppingBag />
                            </span>
                        </Col>
                    </Row>

                </div>
            </div>
        </StyleWebHeaderComponent>
    );
};

export default WebHeaderComponent;