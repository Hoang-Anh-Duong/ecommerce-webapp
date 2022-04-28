import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import UserInformationComponent from '../../../components/user/user-information';

const UserInformation = ({ match }) => {
    return (
        <MainLayout>
            <UserInformationComponent match={match} />
        </MainLayout>
    );
};

export default UserInformation;