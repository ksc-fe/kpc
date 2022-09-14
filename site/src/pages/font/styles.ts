import {css} from '@emotion/css';
import source_nav_web from '../../imgs/font/banner-font.jpg';
import text_web from "../../imgs/font/text-web.png";
import text_h5 from "../../imgs/font/text-h5.png";

export function makeStyles() {
    return css`
        .font-nav {
            height: 600px;
            margin-top: -64px;
            background-image: url(${source_nav_web});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            .bg-img {
                display: none;
            }
            .font-nav-content {
                height: 536px;
                margin-top: 64px;
                width: 1200px;
                display: flex;
                align-items: center;
                .nav-content-img {
                    img {
                        width: 380px;
                    }
                    .nav-btn-download {
                        margin-top: 30px;
                        width: 380px;
                        height: 60px;
                        border: none;
                        background: #006FFF;
                        border-radius: 14px;
                        font-family: PingFangSC-Regular;
                        font-size: 18px;
                        color: #FFFFFF;
                        font-weight: 400;
                        cursor: pointer;
                        transition: all .25s ease-in;
                        outline: none;
                        &:hover {
                            background-color: #3D91FF;
                        }
                        &:active {
                            background-color: #3D91FF;
                        }
                    }
                }
            }
            @media (max-width: 768px) {
                background-image: none;
                height: 900px;
                position: relative;
                height: auto;
                .bg-img {
                    display: block;
                    width: 100%;
                }
                .font-nav-content {
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 100%;
                    height: 40%;
                    justify-content: center;
                    .nav-content-img {
                        width: 100%;
                        text-align: center;
                        img {
                            width: 65%;
                        }
                        .nav-btn-download {
                            height: 50px;
                            width: 65%;
                        }
                    }
                }
            }
        }
        .source-intro {
            margin: 100px auto;
            background-image: url(${text_web});
            width: 800px;
            height: 590px;
            @media (max-width:768px) {
                margin: 13% auto;
                width: 64%;
                background-image: url(${text_h5});
                background-size: contain;
                background-position: center;
            }
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: cover;
        }
        .font-info {
            background: #F7F8F9;
            margin-bottom: 60px;
            padding: 80px 0;
            text-align: center;
            img {
                width: 400px;
            }
            @media (max-width:768px) {
                margin-bottom: 40px;
                padding: 60px 0;
                img {
                    width: 80%;
                    height: auto;
                }
            }
        }
        .designer-box {
            background: #F7F8F9;
            padding-top: 40px;
        }
        .designer-part {
            width: 1200px;
            margin: 0 auto;
            .designer-title {
                display: flex;
                margin-bottom: 60px;
                img {
                    width: 90px;
                }
                & > div:last-child {
                    flex-grow: 1;
                    margin-left: 24px;
                    border-bottom: 1px solid rgba(151, 151, 151, .3);
                }
                @media (max-width:768px) {
                    margin-bottom: 40px;
                    img {
                        width: 60px;
                        height: auto;
                    }
                }
            }
            .designer-list {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                @media (max-width: 768px) {
                    justify-content: space-between;    
                }
                .designer-item {
                    img {
                        width: 200px;
                        border-radius: 16px;
                    }
                    & > div:last-child {
                        text-align: center;
                        font-size: 18px;
                        color: #000000;
                        padding: 20px 0 40px 0;
                        font-family: PingFangSC-Regular;
                    }
                    @media (max-width: 768px) {
                        img {
                            border-radius: 8px;
                        }
                        & > div:last-child {
                            font-size: 12px;    
                            padding: 10px 0 25px 0;
                        }
                    }
                }
                .designer-item:not(:nth-child(5n)) {
                    margin-right: 50px;
                }
            }
            @media (max-width: 768px) {
                width: 90%;
                .designer-list {
                    .designer-item {
                        width: 22%;
                        img {
                            width: 100% !important;
                        }
                    }
                    .designer-item:not(:nth-child(5n)) {
                        margin-right: 0;
                    }
                }
            }
        }
        .icon-list-box {
            /* padding-top: 60px;
            @media (max-width: 768px) {
                padding-top: 30px;
            } */
        }
        .icon-list {
            width: 1200px;
            margin: 0 auto;
            @media (max-width: 768px) {
                width: 98%;
            }
            .icon-box {
                margin-top: 20px;
                .icon-box-title {
                    margin-bottom: 60px;
                    display: flex;
                    & > div {
                        border-bottom: 1px solid rgba(151, 151, 151, .3);
                    }
                    & > div:first-child {
                        display: none;
                    }
                    img {
                        height: 30px;
                    }
                    & > div:last-child {
                        width: 100%;
                        margin-left: 24px;
                    }
                    @media (max-width: 768px) {
                        & > div:first-child {
                            display: block;
                            width: 45%;
                            margin-right: 24px;
                        }
                        & > div:last-child {
                            width: 45%;
                            margin-left: 24px;
                        }
                        margin-bottom: 40px;
                        img {
                            height: 20px;
                        }
                    }
                }
                .icon-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    img {
                        width: 60px;
                        height: 60px;
                    }
                    .icon-item {
                        width: 240px;
                        display: flex;
                        align-items: center;
                        margin-bottom: 60px;
                        display: flex;
                        & > div:last-child {
                            margin-left: 20px;
                            font-family: PingFangSC-Regular;
                            font-size: 16px;
                            color: #000000;
                        }
                        @media (max-width: 768px) {
                            text-align: center;
                            display: block;
                            margin-bottom: 30px;
                            width: 33.33%;
                            & > div:last-child {
                                font-size: 14px !important;
                                margin-left: 0px;
                                margin-top: 5px;
                            }
                            img {
                                width: 45%;
                                height: auto;
                            }
                        }
                    }
                }
            }
        }
    `
}