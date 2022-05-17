import styled from "styled-components";

const StyleOrderProductItemComponent = styled.div`

    .cart-item {
        /* border: 1px black solid; */
        background-color: #f0f0f5;
        border-radius: 3px;
        margin-top: 10px;
        margin-bottom: 15px;
        position: relative;
        cursor: pointer;

        .item-image {

            .image {
                width: 100%;
                height: 100px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                max-height: 100px;
                object-fit: cover;
            }
        }

        .item-information {
            padding-top: 10px;
            margin-left: 10px;

            .item-infor {
                display: block;

                .item-name {
                    font-size: 20px;
                }

                .item-price {
                    font-size: 16px;
                }
            }

            .item-quantity {
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

export { StyleOrderProductItemComponent }