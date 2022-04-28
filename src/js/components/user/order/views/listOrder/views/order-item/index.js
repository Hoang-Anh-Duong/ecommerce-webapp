import { Modal } from 'antd';
import React, { useState } from 'react';
import numberWithCommas from '../../../../../../../helpers/formatNumberWithCommas';
import { StyleOrderItemComponent } from './styled';
import OrderProductItemComponent from './views/order-product-item';

const OrderItemComponent = ({ order }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const convertDateTime = (dateTime = "") => {
        let year = dateTime.slice(0, 4);
        let month = dateTime.slice(5, 7);
        let day = dateTime.slice(8, 10);
        // let hour = dateTime.slice(15, 17);
        // hour = hour - 5;
        // let minute = dateTime.slice(19, 21);
        // let second = dateTime.slice(23, 25);
        let newdate = day.concat(" - ", month, " - ", year);
        return newdate;
    }
    return (
        <StyleOrderItemComponent>
            <div>
                <span>
                    {order?.productOrder?.length} sản phẩm:
                </span>
                <span>
                    {numberWithCommas(order?.priceTotal)}đ
                </span>
            </div>
            <div>
                <span>
                    Ngày đặt hàng:
                </span>
                <span>
                    {convertDateTime(order?.createdAt)}
                </span>
            </div>
            <div>
                <span>
                    Trạng thái đơn hàng:
                </span>
                <span>
                    {order?.status}
                </span>
            </div>
            <div>
                {/* <span>
                    <button>Xác nhận</button>
                </span>
                <span>
                    <button>Trả hàng</button>
                </span> */}
                <span>
                    <button onClick={showModal}>Xem chi tiết</button>
                </span>
            </div>
            <Modal title="Chi tiết đơn hàng"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={500}
            >
                {order.productOrder.map(product => (
                    <OrderProductItemComponent key={product?.id} product={product} />
                ))}
            </Modal>
        </StyleOrderItemComponent>
    );
};

export default OrderItemComponent;