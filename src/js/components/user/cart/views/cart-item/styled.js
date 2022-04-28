import styled from "styled-components";

const StyleCartItemComponent = styled.div`

    .cart-item {
        border: 1px black solid;
        margin-top: 10px;
        margin-bottom: 15px;
        position: relative;

        .item-image {

            .image {
                width: 200px;
                height: auto;
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

                .item-price {
                    font-size: 16px;
                    float: right;
                }
            }

            .item-quantity {

                .quantityInput {
                    width: 30px;
                }

                .changeQuantityBtn {
                   width: 30px;
                }
            }
        }

        .item-function {
            position: relative;

            .item-delete {
                cursor: pointer;
                border: none;
                background-color: white;
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
                background-color: green;
            }
        }
    }
`;

export { StyleCartItemComponent }