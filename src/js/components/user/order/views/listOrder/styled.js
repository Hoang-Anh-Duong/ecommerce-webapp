import styled from "styled-components";

const StyleListOrderComponent = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    background-color: whitesmoke;

    .left-function {
        font-size: 16px;
        margin: 10px 0px;

        .left-item {
            cursor: pointer;
            margin: 5px 0;
        }

        .order-function {
            color: #eb491c;
        }
    }

    .order-header {
        font-size: 46px;
        padding-top: 15px;
        text-transform: uppercase;
        font-weight: 300;
    }

    .order-title {
        font-size: 30px;
        padding: 5px;
    }

    .order-body {

        .order {
            display: inline-flex;
            width: 50%;
            padding-left: 5px;
            padding-right: 5px;
        }
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
    
    .order-empty {
        font-size: 25px;
        text-align: center;
        padding: 30px 0;

    }
`;

export { StyleListOrderComponent };
