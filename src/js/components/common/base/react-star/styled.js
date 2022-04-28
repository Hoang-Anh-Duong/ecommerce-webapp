import styled from "styled-components";

const StyleStar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 20px;
        padding: 0;
    }

    .on {
        color: black;
    }

    .off {
        color: #ccc;
    }
`;

export { StyleStar };
