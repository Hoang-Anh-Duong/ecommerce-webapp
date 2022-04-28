import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import LoginComponent from '../../../components/user/login';

const Login = ({ match }) => {
    return (
        <MainLayout>
            <LoginComponent match={match} />
        </MainLayout>
    );
};

export default Login;