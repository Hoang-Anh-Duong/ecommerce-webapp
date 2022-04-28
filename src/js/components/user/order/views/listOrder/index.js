import React, { useEffect, useState } from 'react';
import storage from '../../../../../helpers/storage';
import orderService from '../../../../../services/user/order.service';
import { StyleListOrderComponent } from './styled';
import OrderItemComponent from './views/order-item';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

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
                    {/* <div className="order-title">
                        Đơn hàng đang trong vẫn chuyển
                    </div> */}
                    {
                        isAuthenticate ?
                            <div className="order-body">
                                {dataOrder.map(order => (
                                    <div key={order?.id} className="order">
                                        <OrderItemComponent order={order} />
                                    </div>
                                ))}
                            </div> :
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