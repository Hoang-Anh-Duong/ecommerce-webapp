import { Modal } from 'antd';
import React, { useState } from 'react';
import numberWithCommas from '../../../../../../../helpers/formatNumberWithCommas';
import { StyleOrderItemComponent } from './styled';
import OrderModalComponent from './views/order-modal';
import OrderProductItemComponent from './views/order-product-item';

const OrderItemComponent = ({ order }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const status = [
        "Đang chờ duyệt",
        "Đã duyệt",
        "Đang giao hàng",
        "Giao hàng thành công",
        "Hủy đơn hàng"
    ]
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
        <>
            <StyleOrderItemComponent>
                <div className="order-item">
                    <div className="order-element">
                        <div className="info">
                            <div className="title">
                                {order?.productOrder?.length} sản phẩm
                            </div>
                            <div className="body">
                                : {numberWithCommas(order?.priceTotal)}đ
                            </div>
                        </div>
                        <div className="info">
                            <div className="title">
                                Ngày đặt hàng
                            </div>
                            <div className="body">
                                : {convertDateTime(order?.createdAt)}
                            </div>
                        </div>
                        <div className="info">
                            <div className="title">
                                Trạng thái
                            </div>
                            <div className="body">
                                : {status[order?.status]}
                            </div>
                        </div>
                    </div>
                    <div className="order-function">
                        {order?.status === 0 ?
                            <div className="order-button">
                                <button>Trả hàng</button>
                            </div> :
                            <div></div>
                        }
                        <div className="order-button">
                            <button onClick={showModal}>Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </StyleOrderItemComponent>
            <Modal title="Chi tiết đơn hàng"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={500}
                footer={[]}
            >
                <OrderModalComponent productOrder={order} />
            </Modal>
        </>
    );
};

export default OrderItemComponent;