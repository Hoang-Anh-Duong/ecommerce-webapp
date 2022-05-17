import React from 'react';
import { StyleBannerComponent } from './styled';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const BannerComponent = ({ dataBanner }) => {
    return (
        <StyleBannerComponent>
            <div className="banner">
                <img className="banner-image" src={dataBanner.bannerSrc} alt="" />
                <div className="banner-content">
                    <div className="title">
                        {dataBanner.title}
                    </div>
                    <div className="body">
                        {dataBanner.info}
                    </div>
                    <Link to="/">
                        <button className="register">Đăng kí ngay <AiOutlineArrowRight className="scale1_5" /></button>
                    </Link>
                </div>
            </div>
        </StyleBannerComponent>
    );
};

export default BannerComponent;