import React from 'react';
import { StyleOrderItemsComponent } from './styled';
import OrderProductItemComponent from './views/order-product';
import { MdPendingActions, MdLocalShipping, MdOutlineAttachMoney } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import numberWithCommas from '../../../../../../../helpers/formatNumberWithCommas';

const OrderItemsCompnent = ({ order }) => {
    const status = [
        <div className="pending">
            <MdPendingActions className="scale1_5" />
            &nbsp;Đang chờ duyệt
        </div>,
        <div className="confirm">
            <HiOutlineClipboardCheck className="scale1_5" />
            &nbsp;Đã duyệt
        </div>,
        <div className="shipping">
            <FaShippingFast className="scale1_5" />
            &nbsp;Đang giao hàng
        </div>,
        <div className="success">
            <MdLocalShipping className="scale1_5" />
            &nbsp;Giao hàng thành công</div>,
        <div className="delete">
            &nbsp;Đã hủy
        </div>
    ];

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
        <StyleOrderItemsComponent>
            <div className="order-item">
                <div className="item-header">
                    <span className="date">Ngày đặt hàng: {convertDateTime(order?.createdAt)}</span>
                    <span>{status[order?.status]}</span>
                </div>
                <div className="order-product">
                    {
                        order?.productOrder.map(product => (
                            <OrderProductItemComponent key={product?.id} product={product} />
                        ))
                    }
                </div>
                <div className="item-footer">
                    <span className="address">
                        <div className="address-title">
                            Địa chỉ nhận hàng
                        </div>
                        <div className="name">
                            {order?.fullname}
                        </div>
                        <div className="phone">
                            {order?.phone}
                        </div>
                        <div className="address">
                            {order?.address}
                        </div>
                    </span>
                    <span className="totalPrice">
                        <MdOutlineAttachMoney className="scale1_5 priceColor" />
                        <span>
                            Tổng giá tiền:&nbsp;
                        </span>
                        <span className="priceColor">
                            {numberWithCommas(order?.priceTotal)}đ
                        </span>
                    </span>
                </div>
            </div>
        </StyleOrderItemsComponent>
    );
};

export default OrderItemsCompnent;