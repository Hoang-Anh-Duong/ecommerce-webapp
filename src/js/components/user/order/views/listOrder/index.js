import React, { useEffect, useState } from 'react';
import storage from '../../../../../helpers/storage';
import orderService from '../../../../../services/user/order.service';
import { StyleListOrderComponent } from './styled';
import OrderItemComponent from './views/order-item';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import OrderItemsCompnent from './views/order-items';
import { Col, Row } from 'antd';
import { MdPersonOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiFileListLine } from "react-icons/ri";

const ListOrderComponent = () => {
    const [dataOrder, setDataOrder] = useState([]);
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const history = useHistory();

    const getAllOrder = () => {
        orderService.getAllOrder(
            "",
            (res) => {
                setDataOrder(res);
            },
            () => { }
        )
    }

    useEffect(() => {
        if (storage.getToken() != undefined) {
            getAllOrder();
            setIsAuthenticate(true);
        } else {
            setIsAuthenticate(false);
        }
    }, [])

    return (
        <StyleListOrderComponent>
            <div className="order-item">
                <div className="order-header">
                    Đơn hàng của bạn
                </div>
                <div className="order-in-transport">
                    {
                        isAuthenticate ?
                            dataOrder.length !== 0 ?
                                <Row>
                                    <Col className="left-function" span={4}>
                                        <div
                                            className="left-item"
                                            onClick={() => { history.push("/user-information") }}
                                        >
                                            <MdPersonOutline />
                                            &nbsp;Tài khoản của bạn
                                        </div>
                                        <div
                                            className="left-item"
                                            onClick={() => { history.push("/cart") }}
                                        >
                                            <AiOutlineShoppingCart />
                                            &nbsp;Giỏ hàng
                                        </div>
                                        <div
                                            className="left-item order-function"
                                            onClick={() => { history.push("/order") }}
                                        >
                                            <RiFileListLine />
                                            &nbsp;Đơn hàng
                                        </div>
                                    </Col>
                                    <Col span={20}>
                                        <div className="order-body">
                                            {dataOrder.map(order => (
                                                <div key={order?.id}>
                                                    <OrderItemsCompnent order={order} />
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row> :
                                <div className="order-empty">Bạn chưa có đơn hàng nào</div> :
                            <div className="not-authenticate">
                                <div className="auth-notification">
                                    Vui lòng đăng nhập để xem giỏ hàng của bạn
                                </div>
                                <button
                                    className="login"
                                    onClick={() => history.push("/login")}
                                >
                                    Đăng nhập
                                    <AiOutlineArrowRight className="scale1_5" />
                                </button>
                                <div className="register">
                                    Chưa có tài khoản?
                                    <span
                                        className="register-redirect"
                                        onClick={() => history.push("/register")}
                                    >
                                        Đăng ký ngay
                                    </span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </StyleListOrderComponent>
    );
};

export default ListOrderComponent;