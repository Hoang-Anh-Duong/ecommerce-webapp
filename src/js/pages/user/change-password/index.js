import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import ChangePasswordComponent from '../../../components/user/change-password';

const ChangePassword = ({ match }) => {
    return (
        <MainLayout>
            <ChangePasswordComponent match={match} />
        </MainLayout>
    );
};

export default ChangePassword;