import React from 'react';
import ListOrderComponent from './views/listOrder';
import { Route } from 'react-router-dom';

const OrderComponent = ({ match }) => {
    return (
        <div>
            <Route path={match?.url} exact component={ListOrderComponent} />
        </div>
    );
};

export default OrderComponent;