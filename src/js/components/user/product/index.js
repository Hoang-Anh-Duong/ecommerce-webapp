import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import DetailProductComponent from './views/detailProduct';
import ListProductComponent from './views/listProduct';

const ProductComponent = ({ match }) => {
    return (
        <div>
            <Route path={`${match?.url}/:id_product`} exact component={DetailProductComponent} />
            <Route path={match?.url} exact component={ListProductComponent} />
        </div>
    );
};

export default ProductComponent;