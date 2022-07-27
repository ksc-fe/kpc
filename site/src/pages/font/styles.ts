import {css} from '@emotion/css';
import source_nav_web from '../../imgs/font/banner-web.jpg';
import source_nav_h5 from '../../imgs/font/banner-h5.jpg';
import title_web from "../../imgs/font/title-web.png";
import text_web from "../../imgs/font/text-web.png";
import text_h5 from "../../imgs/font/text-h5.png";

export function makeStyles() {
    return css`
        .source-nav {
            display: flex;
            justify-content: center;
            position: relative;
            height: 800px;
            width: 100%;
            overflow: hidden;
            background-image: url(${source_nav_web});
            @media (max-width: 768px) {
                overflow: hidden;
                background-image: url(${source_nav_h5});
                width: 100%;
                background-position: center;
            }
            @media (min-width: 1920px) {
                width: 100%
            }
            background-repeat: no-repeat;
            background-position: left ;
            background-size: cover;

            .content-img {
                height: 151px;
                width: 440px;
                margin-top: 26px;
                display: flex;
                justify-content: center;
                background-image: url(${title_web});
                background-repeat: no-repeat;
                background-position: right bottom;
                background-size: 100%;
                position: absolute;
                left: 21%;
                bottom: 356px;
                @media (max-width: 768px) {
                    left: 50%;
                    transform: translate(-50%,0);
                    bottom: 75%;
                    width: 57%;
                }
            }

            .dowload {
                width: 440px;
                height: 80px;
                position: absolute;
                left: 21%;
                bottom: 254px;
                border: none;
                background: #006FFF;
                border-radius: 14px;
                font-family: PingFangSC-Regular;
                font-size: 30px;
                color: #FFFFFF;
                font-weight: 400;
                cursor: pointer;
                &:hover {
                    background-color: #3D91FF;
                }
                &:active {
                    background-color: #3D91FF;
                }
                @media (max-width: 768px) {
                    left: 50%;
                    transform: translate(-50%,0);
                    bottom: 58%;
                    width: 57%;
                    height: 60px;
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

        .source-designer {
            background-color: #FAFAFA;
            padding-top: 30px;
            padding-bottom: 100px;
            position: relative;
            @media (max-width:768px) {
                padding-top: 4%;
                padding-bottom: 13.4%;
            }
            .designer-title {
                position: relative;
                width: 800px;
                height: 120px;
                margin: 30px auto 40px;
                img {
                    width: 100%;
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                @media (max-width:768px) {
                    width: 72%;
                    height: 40px;
                    margin: 3.8% auto 4.8%;
                }
            }
            .designer-content {
                margin: 0 15%;
                @media (max-width:768px) {
                    margin: 0 5.8%;
                }
                .designer-show {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, 200px);
                    grid-template-rows: repeat(auto-fill, 290px);
                    grid-gap: 40px 50px;
                    justify-content: center;
                    @media (max-width:768px) {
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: repeat(6, 1fr);
                        grid-gap: 5.3% 6.7%;
                    }
                    .designer-item {
                        img {
                            width: 100%;
                        }
                        & > div {
                            margin-top: 20px;
                            font-family: PingFangSC-Regular;
                            font-size: 20px;
                            color: #000000;
                            letter-spacing: 0;
                            text-align: center;
                            line-height: 30px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }

    `
}