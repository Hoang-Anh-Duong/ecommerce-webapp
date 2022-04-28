import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/user/login';
import Register from './pages/user/register';
import UserInformation from './pages/user/user-information';
import Product from './pages/user/product';
import Cart from './pages/user/cart';
import Home from './pages/user/home';
import Order from './pages/user/order';

const UserComponent = () => {
    return (
        <>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/user-information" exact component={UserInformation} />
            <Route path="/product" component={Product} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/order" component={Order} />
            <Route path="/" exact component={Home} />
        </>
    );
};

export default UserComponent;