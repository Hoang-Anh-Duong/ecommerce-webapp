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
            label {
                display: block;
                margin-top: 1rem;
                font-size: 16px;
            }

            input {
                display: block;
                width: 100%;
                margin-top: 0.5rem;
                padding: 21px;
                font-size: 16px;
                height: 50px;
                border: 1px solid #767677;
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

            
            /* .behind-button {
                border: 1px solid black;
                width: 100px;
                height: 50px;
                position: absolute;
                left: 10.2%;
                top: 2%;
            } */
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
