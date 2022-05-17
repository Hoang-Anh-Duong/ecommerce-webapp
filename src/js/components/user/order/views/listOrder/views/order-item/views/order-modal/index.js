import React from 'react';
import OrderProductItemComponent from '../order-product-item';
import { StyleOrderModalComponent } from './styled';

const OrderModalComponent = ({ productOrder }) => {
    return (
        <StyleOrderModalComponent>
            <div className="user-info">
                <div className="title">
                    Người nhận:
                </div>
                <div className="content">
                    <div className="name">
                        {productOrder?.fullname}
                    </div>
                    <div className="phone">
                        {productOrder?.phone}
                    </div>
                    <div className="address">
                        {productOrder?.address}
                    </div>
                </div>
            </div>
            {productOrder.productOrder.map(product => (
                <OrderProductItemComponent key={product?.id} product={product} />
            ))}
        </StyleOrderModalComponent>
    );
};

export default OrderModalComponent;