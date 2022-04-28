import styled from "styled-components";

const StyleLoginComponent = styled.div`
.register-container {
    font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;
    padding-left: 5%;
    padding-right: 5%;

    .form-register {
        padding-top: 2rem;
        padding-right: 10%;
        padding-left: 10%;
        /* position: relative; */
        .header-form {
            font-size: 36px;
            line-height: 38px;
            font-style: normal;
            font-weight: 600;
            text-transform: uppercase;
        }

        .input-container {
            border:1px solid;
            margin-top:15px;
            margin-bottom:15px;
            position: relative;

            label {
                font-size: 16px;
                position:absolute;
                top:-15px;
                left:20px;
                background-color:white;
            }

            input {
                display: block;
                width: 100%;
                margin-top: 0.5rem;
                padding: 21px;
                font-size: 16px;
                height: 40px;
                border: none;

                &:focus {
                    outline: none;
                }
            }

        }
        button {
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
        .invalid-feedback {
            color: red;
        }
    }

    .right-text {
        padding-top: 2rem;
        padding-right: 10%;
        padding-left: 10%;
        
        .header-text {
            font-size: 36px;
            line-height: 38px;
            font-style: normal;
            font-weight: bold;
            text-transform: uppercase;
        }

        .register-text {
            padding-top: 1rem;
            font-size: 16px;
        }
        
    }
    
    .register-button {
        background-color: black;
        padding: 0 10px;
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
}
`;
export { StyleLoginComponent };
