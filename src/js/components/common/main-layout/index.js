import React from 'react';
import Footer from './views/footer';
import Header from './views/header';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="main">
                <div className="main-container">{children}</div>
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;