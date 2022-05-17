import styled from "styled-components";

const StyleCartItemComponent = styled.div`

    .cart-item {
        /* border: 1px black solid; */
        margin-top: 10px;
        margin-bottom: 15px;
        position: relative;
        background-color: #f7f8fa;

        .item-image {

            .image {
                width: 200px;
                height: 150px;
                object-fit: cover;
                max-height: 200px;
                cursor: pointer;
            }
        }

        .item-information {
            padding-top: 10px;

            .item-infor {
                display: block;

                .item-name {
                    cursor: pointer;
                    font-size: 20px;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                .item-old-price {
                    font-size: 16px;
                    float: right;
                    color: red;
                    text-decoration: line-through;
                    margin: 0 5px;
                }

                .item-price {
                    font-size: 16px;
                    float: right;
                }
            }

            .item-category {
                color: gray;
                margin: 5px 0;
            }

            .item-quantity {

                .quantityInput {
                    width: 50px;
                    text-align: center;
                }

                .changeQuantityBtn {
                   outline: none;
                    &:hover {
                        /* border: gray; */
                    }

                    &:focus {
                        /* border: gray; */
                    }
                }
            }

            .item-status {
                margin-top: 20px;
            }
        }

        .item-function {
            position: relative;

            .item-delete {
                cursor: pointer;
                border: none;
                background-color: #f7f8fa;
                transform: scale(1.5);
                position: absolute;
                top: 10px;
                right: 10px;
                border-radius: 2px;
    
                &:hover {
                    background-color: gray;
                    color: white;
                }
            }

            .item-selected {
                width: 30px;
                height: 30px;
                position: absolute;
                bottom: 10px;
                right: 10px;
                cursor: pointer;
            }
        }
    }
`;

export { StyleCartItemComponent }