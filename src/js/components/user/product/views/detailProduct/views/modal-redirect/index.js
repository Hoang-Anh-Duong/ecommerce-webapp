import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyleModalRedirectComponent } from './styled';

const ModalRedirectComponent = () => {
    const history = useHistory();
    return (
        <StyleModalRedirectComponent>
            <div className="notification">Vui lòng đăng nhập để mua hàng.</div>
            <div
                className="login"
                onClick={() => history.push("/login")}
            >
                Đăng nhập
            </div>
            <div className="register">
                Hoặc
                <span
                    className="register-link"
                    onClick={() => history.push("/register")}
                >
                    đăng ký
                </span>
            </div>
        </StyleModalRedirectComponent>
    );
};

export default ModalRedirectComponent;