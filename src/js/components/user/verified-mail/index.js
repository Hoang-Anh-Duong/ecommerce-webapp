import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import userAuth from '../../../services/user/auth.service';
import { StyleVerifiedMailComponent } from './styled';
import { AiOutlineRollback } from "react-icons/ai";
import storage from '../../../helpers/storage';

const VerifiedMailComponent = () => {
    const history = useHistory();

    const params = useParams();
    const token = params.token;

    const redirectToHome = () => {
        history.push("/");
    }

    useEffect(() => {
        userAuth.verifiedMail(
            token,
            (res) => {
                storage.setToken(token);
            },
            () => { }
        )
    }, [])
    return (
        <StyleVerifiedMailComponent>
            <div className="success">Xác thực thành công</div>
            <div className="wish">Chúc bạn có những trải nghiệm vui vẻ</div>
            <div className="home" onClick={redirectToHome}>
                Quay về trang chủ
                <AiOutlineRollback className="scale1_5" />
            </div>
        </StyleVerifiedMailComponent>
    );
};

export default VerifiedMailComponent;