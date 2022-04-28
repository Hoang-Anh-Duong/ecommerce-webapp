import styled from "styled-components";

const StyleDetailProductComponent = styled.div`
    position: relative;
    margin-top: 20px;
            margin-left: 5%;
            margin-right: 5%;

    .detail-header {
        
        .breadcrumb {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            margin-left: 10px;
            
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
        
        .product-name {
            font-size: 36px;
            line-height: 36px;
            letter-spacing: 1px;
            font-style: normal;
            font-weight: 300;
            position: absolute;
            top: 30px;
            left: 0;
            z-index: 1;
            margin-left: 10px;
        }
    }
    .detail-container {
        
        .content {
            
            .image {
                width: 100%;
                max-height: 550px;
                object-fit: cover;
                display: block;
                margin-left: 0;
                margin-right: 0;
            }
        }
        
        .sidebar-wrapper {
            
            .product-price {
                font-size: 16px;
                position: absolute;
                top: 65px;
                margin-left: 10px;
            }
            
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
