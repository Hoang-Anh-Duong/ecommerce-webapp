import styled from "styled-components";

const StyleProductComponent = styled.div`
    .item {
        cursor: pointer;
        border: 1px solid transparent;

        .product {

            .product-image {
                width: 100%;
                height: 300px;
                margin-bottom: 2%;
                object-fit: cover;
            }

            .product-price {
                padding-left: 5px;
                padding-right: 5px;
                margin-top: -25px;
                margin-bottom: 10px;

                .price {
                    color: black;
                    background-color: rgba(255,255,255,1);
                }

                .old-price {
                    color: black;
                    background-color: rgba(255,255,255,1);
                    text-decoration: line-through;
                    padding-right: 5px;
                }

                .promotion-price {
                    color: #e32b2b;
                    background-color: rgba(255,255,255,1);
                }
            }

            .wishlist {
                color: black;
                float: right;
            }

            .detail {
                padding-left: 5px;
                padding-right: 5px;

                .product-name {
                    color: black;
                    font-size: 16px;
                    line-height: 20px;
                    text-transform: uppercase;
                }

                .product-category {
                    color: gray;
                    text-transform: capitalize;
                }
            }
        }

        &:hover {
            border: 1px solid black;
        }
    }
`;

export { StyleProductComponent }