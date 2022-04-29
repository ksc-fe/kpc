import {css} from '@emotion/css';
import global from '../../styles/default';
import banner from '../../imgs/banner.jpg';

export function makeStyles() {
    return css`
        font-family: ${global.fontFamily};
        .nav {
            height: 460px;
            position: relative;
            margin-top: -64px;
            .nav-bg, .nav-content-box {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
            }
            .nav-bg {
               z-index: 1;
               background-image: url(${banner});
               background-repeat: no-repeat;
               background-size: 1920px 460px;
            }
            .nav-video-box {
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: absolute;
                left: 0;
                top: 0;
                .nav-video-bg {
                    width: 1920px;
                    height: 460px;
                }    
            }
            .nav-content-box {
                z-index: 10;
                background: linear-gradient(270deg, rgba(248,252,255,0) 32%, rgba(244,249,255,0.96) 73%);
                display: flex;
                align-items: center;
                justify-content: center;
                padding-left: 20px;
            }
            .nav-content {
                width: ${global.contentWidth}px;
                color: #000000;
                height: 100%;
                position: relative;
                & > div {
                    position: absolute;
                }

                & > div:first-child {
                    font-size: 45px;
                    font-weight: 500;
                    top: 164px;
                }
                & > div:nth-child(2) {
                    font-size: 22px;
                    top: 237px;
                }
                & > div:nth-child(3) {
                    top: 340px;
                    .k-btn {
                        margin-right: 16px;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .nav {
                .nav-content {
                    width: 100%;
                    & > div:first-child {
                        font-size: 34px;
                    }
                    & > div:nth-child(2) {
                        width: 300px;
                        background-size: contain;
                        background-position: center;
                        font-size: 16px;
                    }
                }
                .nav-video-box {
                    &,
                    & video {
                        display: none;
                    }
                }
            }
        }
    `
}
