import {css} from '@emotion/css';
import global from '../../styles/default';
import banner from '../../imgs/banner.jpg';
import h5banner from '../../imgs/h5banner.jpg';

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
               background-size: cover;
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
                padding: 0 20px;
            }
            .nav-content {
                width: ${global.contentWidth}px;
                color: #000000;
                height: 100%;
                position: relative;
                .main-title.h5-title {
                    font-size: 36px;
                }
                .h5-title {
                    display: none;
                }
                .web-title {
                    display: block;
                }
                .h5-title {
                    width: 100%;
                    text-align: center;
                }
                & > div {
                    position: absolute;
                }
                .main-title {
                    font-size: 45px;
                    font-weight: 500;
                    top: 164px;
                }
                .sub-title {
                    font-size: 22px;
                    top: 237px;
                }
                & > div:last-child {
                    top: 340px;
                    .k-btn {
                        margin-right: 16px;
                    }
                }
            }
        }

        @media (min-width: 1920px) {
            .nav {
                .nav-video-box {
                    .nav-video-bg {
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .nav {
                .nav-content {
                    width: 100%;
                    .h5-title {
                        display: block;
                    }
                    .web-title {
                        display: none;
                    }
                    .sub-title {
                        margin-top: 10px;
                    }
                    & > div:last-child {
                        width: 100%;
                        text-align: center;
                    }
                }
                .nav-bg {
                    background-image: url(${h5banner});
                    background-size: cover;
                    background-position: center;
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
