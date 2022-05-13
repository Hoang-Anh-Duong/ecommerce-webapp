import styled from "styled-components";

const StyleCartComponent = styled.div`
    font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;
    margin-left: 5%;
    margin-right: 5%;

    .cart-header {
        font-size: 46px;
        margin-top: 15px;
        text-transform: uppercase;
        font-weight: 300;
    }

    .not-authenticate {
        margin-top: 5%;
        margin-bottom: 5%;

        .auth-notification {
            font-size: 30px;
            text-align: center;
        }

        .login {
            cursor: pointer;
            margin-top: 10px;
            margin-bottom: 10px;
            height: 50px;
            border: none;
            background-color: black;
            color: white;
            text-transform: uppercase;
            display: block;
            margin-left: auto;
            margin-right: auto;

            &:hover {
                color: gray;
            }
        }

        .register {
            text-align: center;
            font-size: 16px;

            .register-redirect {
                text-decoration: underline;
                margin-left: 4px;
            }
        }
    }

    .cart-summary {
        font-size: 20px;
        margin-bottom: 16px;

        .cart-sum {
            font-weight: bold;
        }

        .warning {
            font-size: 16px;
            margin-top: 10px;
        }
    }

    .cart-infor {

        .cart-product {

        }

        .cart-detail {
            margin-top: 10px;
            border: 1px solid lightgray;
            max-height: 160px;
            padding-left: 2%;
            padding-right: 2%;
            line-height: 30px;

            .detail-title {
                margin-top: 10px;
                text-transform: uppercase;
                font-size: 20px;
                font-weight: 600;
            }

            .detail-body {
                
                .body-title {
                    text-transform: uppercase;
                    font-size: 14px;
                }

                .body-content {
                    float: right;
                    font-size: 14px;
                }
            }

            .summary {
                font-weight: bold;
            }
        }
    }

    .cart-payment {

        button {
            background-color: black;
            color: white;
            height: 50px;
            cursor: pointer;
            margin-top: 10px;
            height: 50px;
            border: none;
            background-color: black;
            color: white;
            text-transform: uppercase;

            &:hover {
                color: gray;
            }
        }

        .warning {
            font-size: 14px;
            margin-top: 10px;
        }
    }
`;

export { StyleCartComponent };
