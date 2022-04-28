import React from 'react';
import StyleHeaderComponent from './styled';
import MobileHeaderComponent from './views/mobile-header';
import WebHeaderComponent from './views/web-header';

const Header = () => {
    return (
        <StyleHeaderComponent>
            <div className="web-header">
                <WebHeaderComponent />
            </div>
            <div className="mobile-header">
                <MobileHeaderComponent />
            </div>
        </StyleHeaderComponent>
    );
};

export default Header;