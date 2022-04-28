import styled from "styled-components";

const StyleHeaderComponent = styled.div`
    .web-header {
        display: block;
    }

    .mobile-header {
        display: none;
    }

    @media (max-width: 1000px) {
        .web-header {
            display: none;
        }

        .mobile-header {
            display: block;
        }
    }
`;

export default StyleHeaderComponent;