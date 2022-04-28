import styled from "styled-components";

const StyleStillInterestedComponent = styled.div`
    margin-left: 1.5%;
    margin-right: 1.5%;
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;

    .carousel-title {

        .title {
            font-size: 40px;
            margin-bottom: 30px;
            text-transform: uppercase;
        }

        
    }
    .keyword {
        margin-bottom: 15px;
        height: 30px;

        .link-keyword {
            color: black;
            text-transform: uppercase;
            margin-right: 3%;
            text-decoration: underline;

            &:hover {
                background-color: black;
                color: white;
            }
        }
    }

    .carousel {
        padding-bottom: 10px;
    }
`;

export { StyleStillInterestedComponent }