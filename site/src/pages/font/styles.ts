import {css} from '@emotion/css';
import text_web from "../../imgs/font/text-web.png";
import text_h5 from "../../imgs/font/text-h5.png";
import new_source from '../../imgs/font/new_source.jpg'
import new_source_h5 from '../../imgs/font/new_source_h5.png'
import new_title from '../../imgs/font/new_title.png'
import new_title_h5 from '../../imgs/font/new_title_h5.png'

export function makeStyles() {
    return css`
        .source-nav {
            display: flex;
            justify-content: center;
            position: relative;
            height: 600px;
            width: 100%;
            overflow: hidden;
            background-image: url(${new_source});
            @media (max-width: 768px) {
                overflow: hidden;
                background-image: url(${new_source_h5});
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
                height: 200px;
                width: 320px;
                margin-top: 26px;
                display: flex;
                justify-content: center;
                background-image: url(${new_title});
                background-repeat: no-repeat;
                background-position: right bottom;
                background-size: 100%;
                position: absolute;
                left: 18%;
                bottom: 244px;
                @media (max-width: 768px) {
                    left: 50%;
                    transform: translate(-50%,0);
                    background-image: url(${new_title_h5});
                    bottom: 47%;
                    width: 64%;
                }
            }
            .dowload {
                width: 320px;
                height: 40px;
                position: absolute;
                left: 17.8%;
                bottom: 165px;
                border: none;
                background: #006FFF;
                border-radius: 5px;
                font-family: PingFangSC-Regular;
                font-size: 15px;
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
                    font-size: 25px;
                    left: 50%;
                    transform: translate(-50%,0);
                    bottom: 31%;
                    width: 68%;
                    height: 65px;
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