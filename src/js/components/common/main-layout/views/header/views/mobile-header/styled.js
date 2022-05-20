import styled from "styled-components";

const StyleMobileHeaderComponent = styled.div`
    margin-top: 10px;

    .mobile-logo {
        width: 100%;

        .logo {
            height: 40px;
            width: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .wish-list {
            padding: 10px;
            font-size: 25px;
            color: black;
        }

        .cart {
            font-size: 25px;
            color: black;

            .number {
                position: absolute;
                top: 5%;
                right: 2%;
                background-color: orange;
                border-radius: 50%;
                width: 15px;
                font-size: 10px;
                text-align: center;
            }
        }
`;

export { StyleMobileHeaderComponent };
