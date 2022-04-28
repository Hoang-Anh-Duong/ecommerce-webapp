import styled from "styled-components";

const StyleOrderItemComponent = styled.div`
    border: 1px solid gray;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    display: inline-block;
    padding: 5px;

    .order-item {
        margin-left: 2%;
        margin-right: 2%;
    }

    button {
        cursor: pointer;
        margin-top: 10px;
        height: 30px;
        border: none;
        background-color: black;
        color: white;
        text-transform: uppercase;

        &:hover {
            color: gray;
        }
    }
`;

export { StyleOrderItemComponent }