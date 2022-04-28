import { Col, Row } from 'antd';
import React from 'react';
import { StyleMobileHeaderComponent } from './styled';
import MenuComponent from './views/menu';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MobileHeaderComponent = () => {
    const history = useHistory();

    return (
        <StyleMobileHeaderComponent>
            <Row>
                <Col span={4}>
                    <MenuComponent />
                </Col>
                <Col className="mobile-logo" span={16} onClick={() => { history.push("/") }}>
                    <img className="logo" src="/images/logo.png" />
                </Col>
                <Col span={2}>
                </Col>
                <Col span={1}>
                    {/* <Link className="wish-list"><AiOutlineHeart /></Link> */}
                </Col>
                <Col span={1}>
                    <Link to="/cart" className="cart"><HiOutlineShoppingBag /></Link>
                </Col>
            </Row>
        </StyleMobileHeaderComponent>
    );
};

export default MobileHeaderComponent;