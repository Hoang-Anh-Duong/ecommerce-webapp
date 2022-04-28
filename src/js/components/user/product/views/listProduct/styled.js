import styled from "styled-components";

const StyleListProductComponent = styled.div`
    margin: 1.5%;

    .breadcrumb {

        .breadcrumb-item {
            cursor: pointer;
            font-size: 16px;
            letter-spacing: 1px;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .product-filter {
        display: block;
        margin-top: 10px;
        margin-bottom: 20px;

        .label {
            font-size: 15px;
            margin-right: 10px;
        }

        .filter {
            height: 30px;
            width: 20%;
            border-radius: 0px;
            margin-right: 10px;
        }
    }

    .header-bar {
            font-size: 46px;
            text-transform: uppercase;
    }

    .list-product {

        .product-item {
            margin-bottom: 2%;
            padding-right: 1%;
        }
    }

    .product-pagination {
        width: auto;
        
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }
`;

export { StyleListProductComponent }