import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import StyleFooterComponent from './styled';

const Footer = () => {
    return (
        <StyleFooterComponent>
            {/* <div className="receive-info">
                <Row>
                    <Col span={12} xs={24} xl={12}>
                        Đăng kí nhận thông tin cập nhật và ưu đãi qua email
                    </Col>
                    <Col span={12} xs={24} xl={12}>
                        <button>Đăng kí</button>
                    </Col>
                </Row>
            </div> */}
            <div className="footer-container">
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <div className="footer-headline">
                            <h5>Sản phẩm</h5>
                        </div>
                        <Link to="/">
                            <div className="footer-label">Giày</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Quần áo</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Phụ kiện</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Hàng mới về</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Release dates</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">adidas Exclusive</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Outlet</div>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <div className="footer-headline">
                            <h5>Thể thao</h5>
                        </div>
                        <Link to="/">
                            <div className="footer-label">Chạy</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Đánh gôn</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Luyện tập</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Bóng đá</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Bóng rổ</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Quần vợt</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Ngoài trời</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Bơi lội</div>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <div className="footer-headline">
                            <h5>Bộ sưu tập</h5>
                        </div>
                        <Link to="/">
                            <div className="footer-label">IVY PARK</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Giày adidas Pharrel</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Williams</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Giày Ultra Boost</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Giày Pureboost</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Predator</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">X</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Copa</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Continental 80</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Giày Superstar</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Giày Stan Smith</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">NMD</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">ZX</div>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <div className="footer-headline">
                            <h5>Thông tin về công ty</h5>
                        </div>
                        <Link to="/">
                            <div className="footer-label">Giới thiệu về chúng tôi</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Cơ hội nghề nghiệp</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Tin tức</div>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <div className="footer-headline">
                            <h5>Hỗ trợ</h5>
                        </div>
                        <Link to="/">
                            <div className="footer-label">Chăm sóc khách hàng</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Tìm kiếm cửa hàng</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Thanh toán</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Giao hàng</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Trả hàn hoàn tiền</div>
                        </Link>
                        <Link to="/">
                            <div className="footer-label">Khuyến mãi</div>
                        </Link>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        </StyleFooterComponent>
    );
};

export default Footer;