import { Button, Col, Input, Row, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyleCartItemComponent } from './styled';
import { AiOutlineDelete } from "react-icons/ai";
import productService from '../../../../../services/user/product.service';
import imageService from '../../../../../services/admin/image.service';
import { useHistory } from 'react-router-dom';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const CartItemComponent = ({ dataProduct,
    updateQuantity,
    numberWithCommas,
    selectProductOrder,
    deleteProductFromCart }) => {
    const [inforProduct, setInforProduct] = useState({})
    const [imageBg, setImageBg] = useState("");
    const [quantity, setQuantity] = useState(dataProduct?.quantity || 1);
    const history = useHistory();

    const id_product = dataProduct.productId;

    const increaseQuantity = () => {
        if (inforProduct?.total > quantity) {
            setQuantity(quantity + 1);
        }
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const getInforProduct = (id_product) => {
        productService.getProductById(
            id_product,
            (data) => {
                setInforProduct(data);
                imageService.getImageByIds(
                    data.imageBg,
                    (image) => {
                        setImageBg(image);
                    },
                    () => { }
                )
            },
            () => { }
        );
    }
    const handleRedirectDetailProduct = () => {
        history.push(`product/${id_product}`);
    }
    useEffect(() => {
        getInforProduct(id_product);
        const interval = setInterval(updateQuantity(id_product, quantity), 1000);
        return () => clearInterval(interval);
    }, [quantity]);

    return (
        <StyleCartItemComponent>
            <div className="cart-item">
                <Row>
                    <Col
                        span={7}
                        className="item-image"
                        onClick={handleRedirectDetailProduct}
                    >
                        <img className="image" src={imageBg[0]?.src} alt="" />
                    </Col>
                    <Col
                        span={15}
                        className="item-information"
                    >
                        <div className="item-infor">
                            <span
                                className="item-name"
                                onClick={handleRedirectDetailProduct}
                            >
                                {inforProduct?.name}
                            </span>
                            <span className="item-price">
                                {numberWithCommas(dataProduct?.currentPrice)}đ
                            </span>
                            {
                                dataProduct?.currentPrice !== inforProduct?.price ?
                                    <span className="item-old-price">
                                        {numberWithCommas(inforProduct?.price)}đ
                                    </span> :
                                    <></>
                            }
                        </div>
                        <div className="item-infor item-category">{inforProduct?.Category?.name}</div>
                        <div className="item-infor item-quantity">
                            <Input.Group compact>
                                <Button className="changeQuantityBtn" onClick={decreaseQuantity} icon={<>-</>} />
                                <Input
                                    className="quantityInput"
                                    value={quantity}
                                />
                                <Button className="changeQuantityBtn" onClick={increaseQuantity} icon={<>+</>} />
                            </Input.Group>
                        </div>
                        {
                            inforProduct?.total == 0 ?
                                <div className="item-infor item-status">Sản phẩm tạm hết hàng</div> :
                                quantity === inforProduct?.total ?
                                    <div className="item-infor item-status">Sản phẩm đã đạt số lượng tối đa</div> :
                                    <div className="item-infor item-status">Sản phẩm đang sẵn hàng</div>
                        }
                    </Col>
                    <Col span={2} className="item-function">
                        <button
                            className="item-delete"
                            onClick={() => deleteProductFromCart(inforProduct?.id)}
                        >
                            <AiOutlineDelete />
                        </button>
                        <div>
                            <input
                                className="item-selected"
                                type="checkbox"
                                onChange={() => selectProductOrder(dataProduct?.id, dataProduct?.currentPrice)}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleCartItemComponent>
    );
};

export default CartItemComponent;