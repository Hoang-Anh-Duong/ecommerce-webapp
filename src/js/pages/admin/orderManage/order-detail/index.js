import { Col, Row, Select, Space, Spin } from "antd";
import React, { useState, useEffect } from "react";
import orderService from "../../../../services/admin/order.service";
import ProductOrder from "./product-order";

const OrderDetail = (props) => {
    const {
        orderId = null,
    } = props;
    const [data, setData] = useState();
    const styleFieldData = {
        border: '1px solid #00214080',
        borderRadius: '5px',
        width: '100%',
        padding: '5px',
        marginBottom: '10px'
    }
    const [selectedItems, setSelectedItems] = useState();
    const optionStatus = [
        { key: 0, value: 0, text: 'Pending approval' },
        { key: 1, value: 1, text: 'Approved' },
        { key: 2, value: 2, text: 'Delivery in progress' },
        { key: 3, value: 3, text: 'Successful delivery' },
        { key: 4, value: 4, text: 'Refunded' },
    ]

    useEffect(() => {
        getOrder();
    }, [orderId]);

    const getOrder = () => {
        if (orderId) {
            orderService.getOrderById(orderId,
                (res) => {
                    console.log(res);
                    setData(res);
                    setSelectedItems(res.status);
                }
            );
        }
    }

    const handleChangeStatus = (value) => {
        console.log(value);
        orderService.updateStatus({ id: orderId, status: value },
            (res) => {
                console.log(res);
            }
        );
        setSelectedItems(value);
    }

    return (
        <div>
            <Row>
                <Col span={12} style={{ paddingRight: '5px' }}>
                    <Row>
                        <label>Name: </label>
                        <div style={styleFieldData}
                        >
                            {data?.fullname || 'null'}
                        </div>
                    </Row>
                    <Row>
                        <label>Address: </label>
                        <div style={styleFieldData}
                        >
                            {data?.fullname || 'null'}
                        </div>
                    </Row>
                </Col>
                <Col span={12} style={{ paddingLeft: '5px' }}>
                    <Row>
                        <label>Email: </label>
                        <div style={styleFieldData}
                        >
                            {data?.email || 'null'}
                        </div>
                    </Row>
                    <Row>
                        <label>Status: </label>
                        <Select
                            placeholder="Inserted are removed"
                            value={selectedItems}
                            onChange={handleChangeStatus}
                            style={{ width: '100%' }}
                        >
                            {optionStatus.map(item => (
                                <Select.Option key={item.key} value={item.value}>
                                    {item.text}
                                </Select.Option>
                            ))}
                        </Select>
                    </Row>
                </Col>
            </Row>
            <Row>
                <label>Product: </label>
            </Row>
            <Row>
                <ProductOrder productOrder={data?.productOrder} />
            </Row>
            <Row>
                <label style={{ width: '100%', textAlign: 'end', fontWeight: 700, fontSize: '1.5rem' }}>
                    Total: {data?.priceTotal} VNĐ
                </label>
            </Row>
        </div>
    )
}

export default OrderDetail;