import styled from "styled-components";

const StyleWebHeaderComponent = styled.div`
font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;
.header {
    display: block;
    width: 100%;
    border-bottom: 1px solid rgb(230,230,230);

    .top-header {
        background-color: black;

        .top-label {
            display: inline-block;
            color: rgb(255, 255, 255);
            font-weight: 300;
            text-align: center;
            font-size: 15px;
            letter-spacing: 2px;
            text-shadow: 1 1 1 rgba(255,255,255,1);
            margin-top: 3px;
            margin-bottom : 3px;
        }

    }

    .header-mid {
        display: inline-block;
        width: 100%;
        height: 30px;

        .label {
            float: right;
            padding-right: 2rem;
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;

            .mid-label {
                padding-right: 1rem;
                padding-left: 1rem;
                color: rgb(255,0,0);
                font-size: 13px;

                .text-color {
                    color: black;
                }
            }
        }
        
    }

    .header-bot {
        display: inline-block;
        width: 100%;
        padding-left: 2.5%;
        padding-right: 2.5%;
        height: 40px;
        position: relative;

        .header-logo {
            .logo {
                width: 80px;
                height: auto;
                margin-top: -20px;
            }
        }

        .header-menu {
            position: absolute;
            top: 10px;

            .label-bot {
                cursor: pointer;
                border: 0px;
                font-size: 14px;
                text-transform: uppercase;
                margin-left: 5px;
                margin-right: 5px;
                padding: 10px;

                &:hover {
                    color: black;
                    border-radius: 0px;
                    border-bottom: 2px darkgray solid;
                }
            }
        }

        .search {
            border: 0px;
        }

        .wish-list {
            cursor: pointer;
            padding: 10px;
            font-size: 25px;
            color: black;
        }

        .cart {
            cursor: pointer;
            padding: 10px;
            font-size: 25px;
            color: black;
        }
    }
}


`;

export default StyleWebHeaderComponent;