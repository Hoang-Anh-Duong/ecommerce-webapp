import styled from "styled-components";

const StyleOrderProductItemComponent = styled.div`

    .cart-item {
        border-bottom: 1px whitesmoke solid;
        border-radius: 3px;
        margin-top: 10px;
        padding-bottom: 10px;
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

                .item-old-price {
                    font-size: 16px;
                    text-decoration: line-through;
                    margin-right: 3px;
                    color: red;
                }
            }

            .item-quantity {
            }
        }
    }
`;

export { StyleOrderProductItemComponent }