import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import numberWithCommas from '../../../../../../../../../helpers/formatNumberWithCommas';
import { StyleOrderProductItemComponent } from './styled';
import productService from '../../../../../../../../../services/user/product.service';
import { useHistory } from 'react-router-dom';

const OrderProductItemComponent = ({ product }) => {
    const [inforProduct, setInforProduct] = useState({});
    const history = useHistory();

    const id = product.productId;

    const getInforProduct = () => {
        productService.getProductById(
            id,
            (data) => {
                setInforProduct(data);
            },
            () => { }
        );
    }
    const handleRedirectDetailProduct = () => {
        history.push(`product/${id}`);
    }
    useEffect(() => {
        getInforProduct();
    }, [])
    return (
        <StyleOrderProductItemComponent>
            <div
                className="cart-item"
                onClick={handleRedirectDetailProduct}
            >
                <Row>
                    <Col span={7} className="item-image">
                        <img className="image" src={inforProduct?.imageBg} alt="" />
                    </Col>
                    <Col span={15} className="item-information">
                        <div className="item-infor">
                            <span className="item-name">{inforProduct?.name}</span>
                            <span className="item-price">{numberWithCommas(product?.currentPrice)}đ</span>
                        </div>
                        <div className="item-infor item-quantity">
                            <div>x{product.quantity}</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleOrderProductItemComponent>
    );
};

export default OrderProductItemComponent;