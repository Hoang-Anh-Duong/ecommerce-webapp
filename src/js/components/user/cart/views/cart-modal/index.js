import React from 'react';
import numberWithCommas from '../../../../../helpers/formatNumberWithCommas';
import { StyleCartModalComponent } from './styled';
import CartPreviewItemComponent from './views/cart-item';
import { useHistory } from 'react-router-dom';

const CartModalComponent = ({
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    totalPrice,
    dataCartProduct }) => {
    const history = useHistory();

    const handleChangeNameInput = (e) => {
        setName(e.target.value);
    }
    const handleChangeEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePhoneInput = (e) => {
        setPhone(e.target.value);
    }
    const handleChangeAddressInput = (e) => {
        setAddress(e.target.value);
    }

    return (
        <StyleCartModalComponent>
            <div className="products-selected">
                <div className="total-price">
                    {dataCartProduct.length} sản phẩm: {numberWithCommas(totalPrice)}đ
                </div>
                {dataCartProduct.map(product => (
                    <CartPreviewItemComponent key={product?.id} dataProduct={product} />
                ))}
                <div className="title">Thông tin người nhận</div>
                <div className="notification">Nếu bạn chưa cập nhật thông tin, hãy thêm ngay để đặt hàng nhanh hơn</div>
                <div className="link" onClick={() => history.push("/user-information")}>Cập nhật ngay</div>
                <form>
                    <div className="input-container">
                        <label className="input-name">Người nhận</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChangeNameInput}
                            placeholder="Nhập họ tên..."
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-name">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChangeEmailInput}
                            placeholder="Nhập email..."
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-name">Số điện thoai người nhận</label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={handleChangePhoneInput}
                            placeholder="Nhập số điện thoại..."
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-name">Địa chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={handleChangeAddressInput}
                            placeholder="Nhập địa chỉ..."
                            required
                        />
                    </div>
                </form>
            </div>
        </StyleCartModalComponent>
    );
};

export default CartModalComponent;