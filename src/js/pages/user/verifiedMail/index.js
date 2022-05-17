import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import VerifiedMailComponent from '../../../components/user/verified-mail';

const VerifiedMail = ({ match }) => {
    return (
        <MainLayout>
            <VerifiedMailComponent match={match} />
        </MainLayout>
    );
};

export default VerifiedMail;