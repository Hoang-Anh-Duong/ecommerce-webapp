import styled from "styled-components";

const StyleElementCategoryComponent = styled.div`
    width: 33.33%;
    height: 300px;
    display: inline-flex;
    position: relative;
    max-height: 300px;
    cursor: pointer;

    .category {
        margin: 5px;
        width: 100%;

        .category-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            display: block;
            margin-left: 0;
            margin-right: 0;
        }
    
        .category-name {
            width: 100%;
            position: absolute;
            top: 50%;
            text-align: center;
            font-weight: bold;
            color: white;
            font-size: 20px;
        }
    }
`;

export { StyleElementCategoryComponent }