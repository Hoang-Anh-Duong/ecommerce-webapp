import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import OrderComponent from '../../../components/user/order';

const Order = ({ match }) => {
    return (
        <MainLayout>
            <OrderComponent match={match} />
        </MainLayout>
    );
};

export default Order;