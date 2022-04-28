import React from 'react';
import MainLayout from '../../../components/common/main-layout';
import HomeComponent from '../../../components/user/home';

const Home = ({ match }) => {
    return (
        <MainLayout>
            <HomeComponent match={match} />
        </MainLayout>
    );
};

export default Home;