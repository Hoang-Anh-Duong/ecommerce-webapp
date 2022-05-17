import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/user/login';
import Register from './pages/user/register';
import UserInformation from './pages/user/user-information';
import Product from './pages/user/product';
import Cart from './pages/user/cart';
import Home from './pages/user/home';
import Order from './pages/user/order';
import VerifiedMail from './pages/user/verifiedMail';
import ChangePassword from './pages/user/change-password';
import ForgetPassword from './pages/user/forget-password';

const UserComponent = () => {
    return (
        <>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/change-password" exact component={ChangePassword} />
            <Route path="/forget-password" exact component={ForgetPassword} />
            <Route path="/users/verifiedMail/:token" exact component={VerifiedMail} />
            <Route path="/user-information" exact component={UserInformation} />
            <Route path="/product" component={Product} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/order" component={Order} />
            <Route path="/" exact component={Home} />
        </>
    );
};

export default UserComponent;