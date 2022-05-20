import { Col, Image, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import imageService from "../../../../../services/admin/image.service";
import productService from "../../../../../services/admin/product.service";


const ProductOrder = (props) => {
    const {
        productOrder = null,
    } = props;
    const [data, setData] = useState([]);
    const [imageBg, setImageBg] = useState(new Map());
    const [isLoadingProduct, setIsLoadingProduct] = useState(false);

    useEffect(() => {
        console.log(productOrder)
        let ids = [];
        if (productOrder && productOrder.length) {
            ids = productOrder.map(item => item?.productId);
        }
        if (ids.length) {
            getProducts(ids)
        }
    }, [productOrder]);

    const getProducts = (ids) => {
        setIsLoadingProduct(true);
        productService.getProducts(ids,
            (res) => {
                setData(res);
                let images = [];
                if (res && res.length) {
                    images = res.map(item => +item.imageBg[0]);
                    console.log(images)
                }
                if (images && images.length) {
                    getImageBg(images);
                }
                setIsLoadingProduct(false);
            },
            () => { setIsLoadingProduct(false) }
        );
    }

    const getImageBg = (images) => {
        imageService.getImageByIds(images,
            (res) => {
                console.log(res);
                const images = new Map();
                res.forEach(element => {
                    images.set(+element.id, element.src);
                });
                setImageBg(images);
            }
        );
    };

    return (
        <>
            {data && data.length && isLoadingProduct ?
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <Spin />
                </div> : (
                    data.map((item, index) =>
                        <div className="blue-border"
                            key={index}
                            style={{ width: '100%', marginBottom: '10px' }}>
                            <Row>
                                <Col span={12}>
                                    <Row >
                                        <div style={{ width: '100%', textAlign: 'center' }}>
                                            <Image
                                                height={200}
                                                src={imageBg.get(+item.imageBg[0])}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                    </Row>
                                </Col>
                                <Col span={12} style={{ width: '100%', textAlign: 'center' }}>
                                    {
                                        productOrder.map(order =>
                                            order.productId === item.id &&
                                            <div key={order.productId}>
                                                <p style={{
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    fontSize: 'large',
                                                    fontWeight: 700,
                                                }}>{item.name}</p>
                                                <div style={{ display: 'flex' }}>
                                                    <label style={{ fontWeight: 700 }}>Price: &nbsp;</label>
                                                    <p>{order.currentPrice}</p>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <label style={{ fontWeight: 700 }}>Quantity: &nbsp;</label>
                                                    <p>{order.quantity}</p>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <label style={{ fontWeight: 700 }}>Into money: &nbsp;</label>
                                                    <p>{order.currentPrice} * {order.quantity} = {order.quantity * order.currentPrice}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div>{item.currentPrice}</div>
                                </Col>
                            </Row>
                        </div >
                    )
                )}
        </>
    )
}

export default ProductOrder;