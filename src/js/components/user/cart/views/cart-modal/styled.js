import styled from "styled-components";

const StyleCartModalComponent = styled.div`
        .total-price {
            font-size: 18px;
        }

        .title {
            font-size: 18px;
            margin-top: 20px;
        }

        .notification {
            
        }

        .link {
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
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
                height: 20px;
                border: none;

                &:focus {
                    outline: none;
                }
            }

        }
`;

export { StyleCartModalComponent }