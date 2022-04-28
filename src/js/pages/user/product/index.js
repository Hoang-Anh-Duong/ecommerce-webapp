import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import ProductComponent from '../../../components/user/product';

const Product = ({ match }) => {
    return (
        <MainLayout>
            <ProductComponent match={match} />
        </MainLayout>
    );
};

export default Product;