import { Carousel } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import { useHistory, useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import numberWithCommas from '../../../../../helpers/formatNumberWithCommas';
import toastCustom from '../../../../../helpers/toast-custom';
import productService from '../../../../../services/user/product.service';
import cartService from '../../../../../services/user/cart.service';
import { StyleDetailProductComponent } from './styled';
import commentService from '../../../../../services/user/comment.service';
import StarRating from '../../../../../components/common/base/react-star';

const DetailProductComponent = () => {
    const [newComment, setNewComment] = useState("");
    const [dataComment, setDataComment] = useState([]);
    const [avgStar, setAvgStar] = useState(0);
    const [images, setImages] = useState([]);
    const [dataProduct, setDataProduct] = useState({});
    const history = useHistory();
    let params = useParams();
    const desc = useRef();
    const cmt = useRef();

    const id_product = params.id_product;
    const product = {
        quantity: 1,
        productId: id_product,
    };

    const handleClickBtnDescription = () => {
        desc.current.scrollIntoView({ behavior: "smooth" });
    }
    const handleClickBtnComment = () => {
        cmt.current.scrollIntoView({ behavior: "smooth" });
    }
    const handleChangeInputComment = (e) => {
        setNewComment(e.target.value);
    }
    const handleClickBtnAddComment = () => {
        setNewComment("");
        toastCustom({
            mess: "thành công",
            type: "success",
        });
        console.log(newComment);
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const handleClickBtnAddProduct = () => {
        cartService.addProductToCart(
            { productOrder: product },
            (code) => {
                if (code === 200) {
                    toastCustom({
                        mess: "Sản phẩm đã được thêm vào giỏ hàng.",
                        type: "success",
                    });
                } else {
                    toastCustom({
                        mess: "Sản phẩm đã tồn tại trong giỏ hàng",
                        type: "info",
                    });
                }
            },
            () => { }
        )
    }
    const getDataProductById = () => {
        productService.getProductById(
            id_product,
            (data) => {
                setDataProduct(data);
                setImages(data.images);
            },
            () => { }
        );
    }
    const getDataCommentById = () => {
        commentService.getAllCommentByIdProduct(
            id_product,
            (data) => {
                setDataComment(data);
                calculateAverageStar(data);
            },
            () => { }
        );
    }
    const calculateAverageStar = (data) => {
        let length = data.length;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            sum += parseInt(data[i].star);
        }
        setAvgStar(sum / length);
        console.log(avgStar);
    }
    useEffect(() => {
        getDataProductById();
        getDataCommentById();
    }, []);

    return (
        <StyleDetailProductComponent>
            <div className="detail-header">
                <div className="breadcrumb">
                    <span className="breadcrumb-item" onClick={() => { history.push("/") }}>Trang chủ</span>
                    <span className="breadcrumb-item">/{dataProduct?.category}</span>
                    <span className="breadcrumb-item">/Giày Ultraboost</span>
                </div>
                <div className="product-name">{dataProduct?.name}</div>
                <StarRating star={avgStar} />
            </div>
            <div className="detail-container">
                <div className="content">
                    <Carousel className="carousel">
                        {images.map((image, key = 0) => (
                            <div key={key++}>
                                <img className="image" src={image} alt="" />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="sidebar-wrapper">
                    <div className="product-price">
                        {numberWithCommas(dataProduct?.price)}đ
                    </div>
                    <div>
                        <button
                            onClick={handleClickBtnAddProduct}
                        >
                            Thêm vào giỏ hàng
                            <AiOutlineArrowRight className="scale1_5" />
                        </button>
                    </div>
                </div>
                <div className="product-information">
                    <div className="nav-bar">
                        <span className="nav" onClick={handleClickBtnDescription}>
                            <a className="nav-item">Mô Tả</a>
                        </span>
                        <span className="nav" onClick={handleClickBtnComment}>
                            <a className="nav-item">Bình luận</a>
                        </span>
                    </div>

                    <div className="product-information-space-line" ref={desc}></div>

                    <div className="description">
                        <div className="title">mô tả</div>
                        <div className="desc-detail">
                            {dataProduct?.descript}
                        </div>
                    </div>

                    <div className="product-information-space-line" ref={cmt}></div>

                    <div className="comment">
                        <div className="title">Bình luận và đánh giá</div>
                        <div className="your-rate">
                            <div className="rate-title">Đánh giá của bạn</div>
                            <ReactStars classNames="rate-star"
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={false}
                                value={3.5}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="cmt-detail">
                            <div className="comment-title">
                                Đánh giá của khách hàng
                            </div>
                            {dataComment.map((comment, key = 0) => (
                                <div key={key++}>
                                    <div>
                                        <ReactStars classNames="number-star"
                                            count={5}
                                            size={24}
                                            isHalf={true}
                                            value={parseInt(comment.star)}
                                            activeColor="#ffd700"
                                            edit={false}
                                        />
                                    </div>
                                    <div className="user-comment">
                                        {comment.content}
                                    </div>
                                </div>
                            ))}
                            <div className="add-comment">
                                <TextareaAutosize
                                    className="new-comment"
                                    onChange={handleChangeInputComment}
                                    value={newComment}
                                />
                                <button
                                    className="add-new-comment"
                                    onClick={handleClickBtnAddComment}
                                >
                                    Thêm
                                    <AiOutlineArrowRight className="scale1_5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyleDetailProductComponent>
    );
};

export default DetailProductComponent;