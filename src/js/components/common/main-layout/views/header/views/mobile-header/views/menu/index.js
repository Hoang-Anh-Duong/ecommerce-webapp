import { slide as Menu } from 'react-burger-menu';
import "./styled.css";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import storage from '../../../../../../../../../helpers/storage';

const MenuComponent = () => {
    const history = useHistory();
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    const logout = () => {
        storage.clearToken();
        setIsAuthenticate(false);
        history.push("/");
    }

    useEffect(() => {
        if (storage.getToken()) {
            setIsAuthenticate(true);
        }
    }, [isAuthenticate]);
    return (
        <div>
            <Menu>
                <div className="hello">Xin chào</div>
                <>
                    <div className="menu-item" onClick={() => { history.push("/") }}>Trang chủ</div>
                    <div className="menu-item" onClick={() => { history.push("/product") }}>Sản phẩm</div>
                </>
                {isAuthenticate ?
                    <>
                        <div className="menu-item" onClick={() => { history.push("/cart") }}>Giỏ hàng</div>
                        <div className="menu-item" onClick={() => { history.push("/order") }}>Đơn của bạn</div>
                        <div className="menu-item" onClick={() => { history.push("/user-information") }}>Thông tin tài khoản</div>
                        <div className="menu-item" onClick={() => { history.push("/change-password") }}>Đổi mật khẩu</div>
                        <div className="menu-item" onClick={logout}>Đăng xuất</div>
                    </> :
                    <>
                        <div className="menu-item" onClick={() => { history.push("/login") }}>Đăng nhập</div>
                    </>
                }
            </Menu>
        </div>
    );
};

export default MenuComponent;