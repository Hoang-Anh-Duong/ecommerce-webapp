import styled from "styled-components";

const StyleVerifiedMailComponent = styled.div`
    text-align: center;
    margin-top: 7%;
    margin-bottom: 7%;

    .success {
        font-size: 40px;
    }

    .wish {
        font-size: 30px;
    }

    .home {
        cursor: pointer;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
        height: 50px;
        border: none;
        text-transform: uppercase;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

export { StyleVerifiedMailComponent }