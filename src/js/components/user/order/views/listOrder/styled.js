import styled from "styled-components";

const StyleListOrderComponent = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;

    .order-header {
        font-size: 46px;
        margin-top: 15px;
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
`;

export { StyleListOrderComponent };
