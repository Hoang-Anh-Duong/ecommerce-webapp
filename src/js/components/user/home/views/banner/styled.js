import styled from "styled-components";

const StyleBannerComponent = styled.div`
.banner {
    position: relative;
    font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;

    .banner-image {
        width: 100%;
    }

    .banner-content {
        position: absolute;
        bottom: 30%;
        left: 2%;
        width: 40%;

        .title {
            font-size: 42px;
            line-height: 38px;
            font-weight: 600;
        }

        .body {
            font-size: 18px;
        }

        .register {
            cursor: pointer;
            border: 0px;
            background-color: black;
            color: white;
            font-size: 16px;
            height: 50px;

            &:hover {
                color: gray;
            }
        }
    }

    @media (max-width: 1000px) {
        .banner-content {
            bottom: 5%;

            .title {
                font-size: 30px;
            }

            .body {
                font-size: 15px;
            }

            .register {
            font-size: 10px;
            height: 30px;

            &:hover {
                color: gray;
            }
        }
        }
    }

    @media (max-width: 800px) {
        .banner-content {
            bottom: 2%;

            .title {
                font-size: 20px;
            }

            .body {
                font-size: 10px;
            }
        }
    }

    @media (max-width: 600px) {
        .banner-content {
            bottom: 3%;

            .title {
                font-size: 10px;
            }

            .body {
                font-size: 10px;
            }
        }
    }
}
`;

export { StyleBannerComponent };