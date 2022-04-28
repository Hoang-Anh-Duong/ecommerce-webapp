import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import RegisterComponent from '../../../components/user/register';


const Register = ({ match }) => {
    return (
        <MainLayout>
            <RegisterComponent match={match} />
        </MainLayout>
    );
};

export default Register;