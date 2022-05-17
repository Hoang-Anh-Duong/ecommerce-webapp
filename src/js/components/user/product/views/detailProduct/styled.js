import styled from "styled-components";

const StyleDetailProductComponent = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    
    .breadcrumb {
        z-index: 1;
        margin-top: 10px;
        margin-bottom: 10px;
        
        .breadcrumb-item {
            cursor: pointer;
            font-size: 16px;
            letter-spacing: 1px;
            margin-left: 3px;
            
            &:hover {
                text-decoration: underline;
            }
        }
        
        .back {
            margin-left: 5px;
            margin-right: 10px;
            
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .detail-header {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;

        .product-name {
            font-size: 36px;
            line-height: 36px;
            letter-spacing: 1px;
            font-style: normal;
            font-weight: 300;
            position: absolute;
            top: 0px;
            left: 0;
            z-index: 1;
            height: 60px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            background-color: rgba(255,255,255,0.5);
            
        }
        .product-price {
            font-size: 16px;
            line-height: 36px;
            letter-spacing: 1px;
            font-style: normal;
            font-weight: 300;
            position: absolute;
            top: 60px;
            left: 0;
            z-index: 1;
            padding: 0 10px;
            background-color: rgba(255,255,255,0.5);

            .old-price {
                text-decoration: line-through;
            }

            .new-price {
                color: red;
            }
        }

        /* .old-price {
            font-size: 16px;
            line-height: 36px;
            letter-spacing: 1px;
            font-style: normal;
            font-weight: 300;
            position: absolute;
            top: 60px;
            left: 0;
            z-index: 1;
            padding: 0 10px;
            background-color: rgba(255,255,255,0.5);
            text-decoration: line-through;
        } */

        .product-star {
            padding: 0 10px;
            background-color: rgba(255,255,255,0.5);
        }
    }
    .detail-container {
        
        .content {
            position: relative;
            
            .image {
                width: 100%;
                height: 550px;
                object-fit: cover;
                display: block;
                margin-left: 0;
                margin-right: 0;
            }
        }
        
        .sidebar-wrapper {
            
            
            button {
                cursor: pointer;
                margin-top: 20px;
                margin-bottom: 10px;
                height: 50px;
                border: none;
                background-color: black;
                color: white;
                text-transform: uppercase;
                
                &:hover {
                    color: gray;
                }
            }

            .more-info {
                font-size: 15px;
                margin-top: 10px;
                margin-bottom: 10px;
                letter-spacing: 2px;
                text-decoration: underline;
            }

            .scale1_5 {
                margin-right: 10px;
            }
        }
        
        .product-information {
            position: relative;
            
            .product-information-space-line {
                padding-top: 60px;
            }
            
            .nav-bar {
                height: 50px;
                border-top: lightgray solid 1px;
                border-bottom: lightgray solid 1px;
                margin-top: 1%;
                margin-bottom: 1%;
                position: sticky;
                top: 0;
                background-color: white;
                z-index: 5;
                
                .nav {
                    width: 50%;
                    font-size: 20px;
                    text-align: center;
                    display: inline-block;
                    margin-top: 8px;
                    margin-bottom: auto;
                    
                    .nav-item {
                        color: black;
                    }
                }
            }
            .title {
                font-size: 30px;
                line-height: 28px;
                text-transform: uppercase;
                margin-bottom: 15px;
            }
            
            .description {
                
                .desc-detail {
                    text-align: justify;
                    white-space: pre-wrap;
                }
            }
            
            .comment {
                
                .no-comment {
                    font-size: 16px;
                }
                
                .your-rate {
                    
                    .rate-title {
                        text-align: center;
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    
                    .rate-star {
                        transform: scale(1.7);
                        display: inline-block;
                        margin: auto;
                    }
                }
                
                .cmt-detail {
                    
                    .comment-title {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    
                    .user-name {
                        display: inline;
                        font-size: 15px;
                        font-weight: bold;
                        margin-left: 1.5%;
                    }
                    
                    .number-star {
                        display: inline;
                        transform: scale(0.7);
                    }
                    
                    .user-comment {
                        margin-left: 1.5%;
                        margin-right: 1.5%;
                        margin-bottom: 30px;
                        font-size: 16px;
                        white-space: pre-wrap;
                    }
                    
                    .add-comment {
                        margin-left: 1.5%;
                        margin-right: 1.5%;
                        
                        .new-comment {
                            width: 100%;
                            min-height: 100px;
                            resize: none;
                            margin-top: 10px;
                            margin-bottom: 10px;
                        }
                        
                        .add-new-comment {
                            cursor: pointer;
                            margin-top: 10px;
                            height: 50px;
                            border: none;
                            background-color: black;
                            color: white;
                            text-transform: uppercase;
                            
                            &:hover {
                                color: gray;
                            }
                        }
                    }
                }
            }
        }
    }
    `;

export { StyleDetailProductComponent };
