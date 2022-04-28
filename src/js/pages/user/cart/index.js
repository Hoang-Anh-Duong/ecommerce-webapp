import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import CartComponent from '../../../components/user/cart';

const Cart = ({ match }) => {
    return (
        <MainLayout>
            <CartComponent match={match} />
        </MainLayout>
    );
};

export default Cart;