import styled from "styled-components";

const StyleOrderItemsComponent = styled.div`
    background-color: white;
    margin: 10px 0;
    border-radius: 3px;

    
    .order-item {
        padding: 0px 20px;
        
        .item-header {
            width: 100%;
            height: 40px;
            border-bottom: 1px solid whitesmoke;
            font-size: 16px;
            padding: 10px 0px;
            /* float: right; */
            
            .pending {
                color: orange;
                float: right;
            }

            .confirm {
                color: olivedrab;
                float: right;
            }

            .shipping {
                color: darkgreen;
                float: right;
            }

            .success {
                color: green;
                float: right;
            }

            .delete {
                color: red;
                float: right;
            }
        }

        .order-product {

        }

        .item-footer {
            height: auto;
            margin: 5px 0;

            .address {
                display: inline-block;

                .address-title {
                    font-size: 18px;
                    line-height: 24px;
                }

                .name {
                    font-size: 12px;
                }

                .phone {
                    font-size: 12px;
                    color: gray;
                }

                .address {
                    font-size: 12px;
                    color: gray;
                }
            }

            .totalPrice {
                display: inline-block;
                float: right;
                font-size: 16px;

                .priceColor {
                    color: #eb491c;
                }
            }
        }
    }
`;

export { StyleOrderItemsComponent }