import styled from "styled-components";

const StyleOrderItemComponent = styled.div`
    width: 100%;
    .order-item {
        border: 1px solid gray;
        border-radius: 3px;
        margin: 10px 0px;
        width: 100%;
        display: inline-block;
        padding: 1% 3%;
        
        .order-element {
            display: inline-block;
            width: 70%;
            
            .info {
                width: 100%;
                
                .title {
                    display: inline-block;
                    width: 50%;
                }
                
                .body {
                    display: inline-block;
                    width: 50%;
                }
            }      
        }
        
        .order-function {
            display: inline-block;
            width: 30%;
            
            .order-button {
                width: 100%;
                display: inline-block;
                
                button {
                    cursor: pointer;
                    margin: 5px 0;
                    height: 30px;
                    border: none;
                    width: 100%;
                    background-color: black;
                    color: white;
                    text-transform: uppercase;
                    /* float: right; */
                    display: block;
                    text-align: center;
                    font-size: 1em;
                    
                    &:hover {
                        color: gray;
                    }
                }
        }
    }
    
}
    `;

export { StyleOrderItemComponent }