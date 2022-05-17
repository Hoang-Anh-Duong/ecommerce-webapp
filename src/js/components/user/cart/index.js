import { Col, Row, Modal, Button } from 'antd';
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
import { FaShippingFast } from "react-icons/fa";
import userInformationService from '../../../services/user/user-information.service';
import CartModalComponent from './views/cart-modal';

const CartComponent = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [dataCartProduct, setDataCartProduct] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [listIdProductSelected, setListIdProductSelected] = useState([]);
    const [listProductSelected, setListProductSelected] = useState([]);
    const [listDataProductSelected, setListDataProductSelected] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    var productQuantity = dataCartProduct?.length;
    const history = useHistory();

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
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
    const getUserInformation = () => {
        userInformationService.getUserInformation(
            "",
            (data) => {
                setEmail(data.email);
                setName(data.fullname);
                setAddress(data.address);
                setPhone(data.phone);
            },
            () => { }
        )
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
    const selectProductOrder = (id, currentPrice) => {
        let listId = cloneDeep(listProductSelected);
        let idOrder = cloneDeep(listIdProductSelected);
        const findId = listId.find((element) => element.id === id);
        if (findId?.id === id) {
            setListProductSelected(listId.filter(item => item.id !== id));
            setListIdProductSelected(idOrder.filter(item => item !== id));
        } else {
            listId.push({ id, currentPrice });
            idOrder.push(id);
            setListProductSelected(listId);
            setListIdProductSelected(idOrder);
        }
    }
    const createOrder = () => {
        orderService.createOrder(
            {
                product_order_id: listProductSelected,
                fullname: name,
                email: email,
                phone: phone,
                address: address,
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
        if (storage.getToken() !== undefined) {
            getAllProductInCart();
            getUserInformation();
            setIsAuthenticate(true);
        } else {
            setIsAuthenticate(false);
        }
    }, []);
    useEffect(() => {
        let newTotalPrice = 0;
        let arrProductSelected = [];
        listProductSelected.forEach(item => {
            const cartProduct = dataCartProduct.find(product => product.id === item.id);
            newTotalPrice += cartProduct.quantity * item.currentPrice;
            arrProductSelected.push(cartProduct);
        });
        setListDataProductSelected(arrProductSelected);
        setTotalPrice(newTotalPrice);
    }, [dataCartProduct, listProductSelected]);
    return (
        <StyleCartComponent>
            <div className="cart-header">Giỏ hàng của bạn</div>
            {
                isAuthenticate ?
                    <div className="cart-summary">
                        <span>TỔNG CỘNG ({listProductSelected.length} sản phẩm được chọn)</span>
                        <span className="cart-sum"> {numberWithCommas(totalPrice)}đ</span>
                        <div className="warning">Vui lòng kiểm tra kĩ thông tin trước khi đặt hàng</div>
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
                            {
                                dataCartProduct.length !== 0 ?
                                    dataCartProduct.map(dataProduct => (
                                        <CartItemComponent
                                            key={dataProduct.id}
                                            dataProduct={dataProduct}
                                            updateQuantity={updateQuantity}
                                            numberWithCommas={numberWithCommas}
                                            selectProductOrder={selectProductOrder}
                                            deleteProductFromCart={deleteProductFromCart}
                                        />
                                    )) :
                                    <div className="cart-empty">
                                        Giỏ hàng của bạn trống
                                        <span
                                            onClick={() => history.push("/product")}
                                            className="shop"
                                        >
                                            Mua sắm ngay?
                                        </span>
                                    </div>
                            }
                        </Col>
                        <Col xs={0} xl={1}></Col>
                        <Col xs={24} xl={7} className="cart-detail">
                            <h1 className="detail-title">Tóm tắt đơn hàng</h1>
                            <div className="detail-body">
                                <span className="body-title">{listProductSelected.length} sản phẩm</span>
                                <span className="body-content">{numberWithCommas(totalPrice)}đ</span>
                            </div>
                            <div className="detail-body">
                                <span className="body-title">Giao hàng</span>
                                <span className="body-content">Miễn phí</span>
                            </div>
                            <div className="detail-body summary">
                                <span className="body-title">Tổng (Đã bao gồm thuế)</span>
                                <span className="body-content">{numberWithCommas(totalPrice)}đ</span>
                            </div>
                        </Col>
                    </Row> :
                    <div></div>
            }
            {
                isAuthenticate ?
                    dataCartProduct.length !== 0 ?
                        <div className="cart-payment">
                            <button onClick={showModal}>
                                Đặt hàng
                                <AiOutlineArrowRight className="scale1_5" />
                            </button>
                            <div className="warning">
                                <FaShippingFast className="scale1_5" />
                                Giao hàng nhanh chóng
                            </div>
                        </div> :
                        <div></div> :
                    <div></div>
            }
            <Modal title="Chi tiết"
                visible={isModalVisible}
                onCancel={handleCancel}
                width={500}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Quay lại
                    </Button>,
                    <Button key="submit" type="primary" onClick={createOrder}>
                        Đặt hàng
                    </Button>,
                ]}
            >
                <CartModalComponent
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    address={address}
                    setAddress={setAddress}
                    name={name}
                    setName={setName}
                    totalPrice={totalPrice}
                    dataCartProduct={listDataProductSelected}
                />
            </Modal>
        </StyleCartComponent>
    );
};

export default CartComponent;