import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import ForgetPasswordComponent from '../../../components/user/forget-password';

const ForgetPassword = ({ match }) => {
    return (
        <MainLayout>
            <ForgetPasswordComponent match={match} />
        </MainLayout>
    );
};

export default ForgetPassword;