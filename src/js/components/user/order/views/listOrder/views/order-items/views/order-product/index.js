import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import numberWithCommas from '../../../../../../../../../helpers/formatNumberWithCommas';
import { StyleOrderProductItemComponent } from './styled';
import productService from '../../../../../../../../../services/user/product.service';
import { useHistory } from 'react-router-dom';
import imageService from '../../../../../../../../../services/admin/image.service';

const OrderProductItemComponent = ({ product }) => {
    const [inforProduct, setInforProduct] = useState({});
    const [imageBg, setImageBg] = useState("");
    const history = useHistory();

    const id = product.productId;

    const getInforProduct = () => {
        productService.getProductById(
            id,
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
                        <img className="image" src={imageBg[0]?.src} alt="" />
                    </Col>
                    <Col span={15} className="item-information">
                        <div className="item-infor">
                            <div className="item-name">{inforProduct?.name}</div>
                            {
                                inforProduct?.price == product?.currentPrice ?
                                    <div className="item-price">
                                        {numberWithCommas(inforProduct?.price)}đ
                                    </div> :
                                    <div>
                                        <span className="item-old-price">
                                            {numberWithCommas(inforProduct?.price)}đ
                                        </span>
                                        <span className="item-price">
                                            {numberWithCommas(product?.currentPrice)}đ
                                        </span>
                                    </div>
                            }
                        </div>
                        <div className="item-infor item-quantity">
                            <div>x{product?.quantity}</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleOrderProductItemComponent>
    );
};

export default OrderProductItemComponent;