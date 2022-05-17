import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyleCartPreviewItemComponent } from './styled';
import { useHistory } from 'react-router-dom';
import imageService from '../../../../../../../services/admin/image.service';
import productService from '../../../../../../../services/user/product.service';
import numberWithCommas from '../../../../../../../helpers/formatNumberWithCommas';

const CartPreviewItemComponent = ({ dataProduct }) => {
    const [inforProduct, setInforProduct] = useState({})
    const [imageBg, setImageBg] = useState("");
    const [quantity, setQuantity] = useState(dataProduct?.quantity || 1);
    const history = useHistory();

    const id_product = dataProduct.productId;

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
    }, []);

    return (
        <StyleCartPreviewItemComponent>
            <div className="cart-item">
                <Row>
                    <Col
                        span={6}
                        className="item-image"
                        onClick={handleRedirectDetailProduct}
                    >
                        <img className="image" src={imageBg[0]?.src} alt="" />
                    </Col>
                    <Col
                        span={18}
                        className="item-information"
                    >
                        <div className="item-infor">
                            <div
                                className="item-name"
                                onClick={handleRedirectDetailProduct}
                            >
                                {inforProduct?.name}
                            </div>
                            <div className="item-price">{numberWithCommas(dataProduct?.currentPrice)}đ</div>
                            <div className="item-infor item-quantity">
                                x {dataProduct?.quantity}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleCartPreviewItemComponent>
    );
};

export default CartPreviewItemComponent;