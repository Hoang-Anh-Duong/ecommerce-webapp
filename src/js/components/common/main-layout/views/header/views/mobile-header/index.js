import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyleMobileHeaderComponent } from './styled';
import MenuComponent from './views/menu';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import cartService from '../../../../../../../services/user/cart.service';
import storage from '../../../../../../../helpers/storage';

const MobileHeaderComponent = () => {
    const history = useHistory();
    const [cartNumber, setCartNumber] = useState(0);

    let interval;

    const getCartNumber = () => {
        cartService.getAllProductInCart(
            "",
            (data) => {
                setCartNumber(data.length);
            }
        )
    }
    useEffect(() => {
        if (storage.getToken()) {
            if (interval) {
                clearInterval(interval);
            }
            interval = setInterval(getCartNumber, 1000);
        } else {
            setCartNumber(0);
        }
        return () => clearInterval(interval);
    }, [storage.getToken()])
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
                    {
                        storage.getToken() ?
                            <Link to="/cart" className="cart">
                                <HiOutlineShoppingBag />
                                <span className="number">{cartNumber}</span>
                            </Link> :
                            <Link to="/login" className="cart">
                                <HiOutlineShoppingBag />
                                <span className="number">{cartNumber}</span>
                            </Link>
                    }
                </Col>
            </Row>
        </StyleMobileHeaderComponent>
    );
};

export default MobileHeaderComponent;