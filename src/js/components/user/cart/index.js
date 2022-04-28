import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import numberWithCommas from '../../../helpers/formatNumberWithCommas';
import { StyleCartComponent } from './styled';
import CartItemComponent from './views/cart-item';
import cartService from '../../../services/user/cart.service';
import { cloneDeep } from 'lodash';
import { useHistory } from 'react-router-dom';
import orderService from '../../../services/user/order.service';
import toastCustom from '../../../helpers/toast-custom';
import storage from '../../../helpers/storage';
import { AiOutlineArrowRight } from "react-icons/ai";

const CartComponent = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [dataCartProduct, setDataCartProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [listIdProductSelected, setListIdProductSelected] = useState([]);
    const [listProductSelected, setListProductSelected] = useState([]);

    var productQuantity = dataCartProduct?.length;
    const history = useHistory();

    const updateQuantity = (id, quantity) => {
        cartService.updateQuantityProductToCart(
            {
                productOrder: {
                    quantity: quantity,
                    productId: id
                }
            },
            () => {
                let data = cloneDeep(dataCartProduct);
                for (let i = 0; i < productQuantity; i++) {
                    if (data[i].productId === id) {
                        data[i].quantity = quantity;
                    }
                }
                setDataCartProduct(data);
            },
            () => { }
        )
    }
    const getAllProductInCart = () => {
        cartService.getAllProductInCart(
            "",
            (data) => {
                setDataCartProduct(data);
            },
            () => { }
        );
    }
    const deleteProductFromCart = (productId) => {
        cartService.deleteProductFromCart(
            { productIdDelete: productId },
            () => {
                let cartProducts = cloneDeep(dataCartProduct);
                setDataCartProduct(cartProducts.filter(item => item.productId !== productId));
            },
            () => { }
        );
    }
    const selectProductOrder = (id, price) => {
        let listId = cloneDeep(listProductSelected);
        let idOrder = cloneDeep(listIdProductSelected);
        const findId = listId.find((element) => element.id === id);
        if (findId?.id === id) {
            setListProductSelected(listId.filter(item => item.id !== id));
            setListIdProductSelected(idOrder.filter(item => item !== id))
        } else {
            listId.push({ id, price });
            idOrder.push(id);
            setListProductSelected(listId);
            setListIdProductSelected(idOrder);
        }
    }
    const createOrder = () => {
        orderService.createOrder(
            {
                product_order_id: listIdProductSelected,
                priceTotal: totalPrice,
            },
            () => {
                toastCustom({
                    mess: "Đặt hàng thành công.",
                    type: "success",
                });
                history.push("/order");
            },
            () => { }
        )
    };

    useEffect(() => {
        if (storage.getToken() != undefined) {
            getAllProductInCart();
            setIsAuthenticate(true);
        } else {
            setIsAuthenticate(false);
        }
    }, []);
    useEffect(() => {
        let newTotalPrice = 0;
        listProductSelected.forEach(item => {
            const cartProduct = dataCartProduct.find(product => product.id === item.id);
            newTotalPrice += cartProduct.quantity * item.price;
        });
        setTotalPrice(newTotalPrice);
    }, [dataCartProduct, listProductSelected]);
    return (
        <StyleCartComponent>
            <div className="cart-header">Giỏ hàng của bạn</div>
            {
                isAuthenticate ?
                    <div className="cart-summary">
                        <span>TỔNG CỘNG ( {listProductSelected.length} sản phẩm được chọn)</span>
                        <span className="cart-sum"> {numberWithCommas(totalPrice)}đ</span>
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
            {
                isAuthenticate ?
                    <Row className="cart-infor">
                        <Col xs={24} xl={16} className="cart-product">
                            {dataCartProduct.map(dataProduct => (
                                <CartItemComponent
                                    key={dataProduct.id}
                                    dataProduct={dataProduct}
                                    updateQuantity={updateQuantity}
                                    numberWithCommas={numberWithCommas}
                                    selectProductOrder={selectProductOrder}
                                    deleteProductFromCart={deleteProductFromCart}
                                />
                            ))}
                        </Col>
                        <Col xs={0} xl={1}></Col>
                        <Col xs={24} xl={7} className="cart-detail">
                            <h1>Tóm tắt đơn hàng</h1>
                            <div>
                                <span>{listProductSelected.length} sản phẩm: </span>
                                <span>{numberWithCommas(totalPrice)}đ</span>
                            </div>
                            <div>
                                <span>Giao hàng: </span>
                                <span>Miễn phí</span>
                            </div>
                            <div>
                                <span>Tổng (Đã bao gồm thuế): </span>
                                <span>{numberWithCommas(totalPrice)}đ</span>
                            </div>
                        </Col>
                    </Row> :
                    <div></div>
            }
            {
                isAuthenticate ?
                    <div className="cart-payment">
                        <button onClick={() => createOrder()}>thanh toán</button>
                    </div> :
                    <div>
                    </div>
            }
        </StyleCartComponent>
    );
};

export default CartComponent;