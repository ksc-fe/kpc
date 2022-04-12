import {css} from '@emotion/css';
import global, {mainBlock, center} from '../../styles/default';
import resource_bg from '../../imgs/resource_bg.png';
import color_process_bg from '../../imgs/color_process_bg.png';
import workflow_bg from '../../imgs/workflow_bg.png';
import color_process_expect from '../../imgs/expect.png';
import {theme} from 'kpc/styles/theme';

export function makeStyles() {
    return css`
        font-family: ${global.fontFamily};
        .source-nav {
            ${mainBlock(260)};
            background: #F1F6FA;
            .content {
                display: flex;
                padding-top: 64px;
                align-items: center;
                background-image: url(${resource_bg});
                background-repeat: no-repeat;
                background-position: right bottom;
                .nav-title {
                    & > div:first-child {
                        font-size: 44px;
                        color: #000000;
                    }
                    & > div:last-child {
                        color: #797979;
                        font-size: 16px;
                    }
                }
            }
        }
        .source-content {
            ${mainBlock(961)};
            .content-top {
                height: 429px;
                background: #EFF3FA;
                border-radius: 8px;
                margin-top: 32px;
            }
            .main-title {
                color: #000000;
                font-weight: 600;
                font-size: 24px;
                padding: 26px 0px 9px 40px;
            }
            .secondary-title {
                padding-left: 40px;
                color: #7A7A7A;
                font-size: 16px;
            }
            .card-title {
                margin-bottom: 24px;
                font-size: 12px;
                color: #626262;
            }
            .card-content-box {
                height: 141px;
                display: flex;
                & > div:not(:last-child) {
                    margin-right: 27px;
                }
            }
            .card-item {
                width: 168px;
                height: 42px;
                background: #EFF3FA;
                border-radius: 4px;
                display: flex;
                align-items: center;
                padding-left: 9px;
                color: #434343;
                margin-bottom: 12px;
                cursor: pointer;
                img {
                    width: 27px;
                    height: 27px;
                    border-radius: 4px;
                }
                & > div:last-child {
                    padding-left: 14px;
                }
                &:hover {
                    background: #E5EAF4;
                }
                &:active {
                    background: #DAE3EF;
                }
                .github-logo {
                    width: 27px;
                    height: 27px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    ${center()};
                    background: #fff;
                    margin-right: 14px;
                }
                .code-resource {
                    display: flex;
                    align-items: center;
                    color: #434343;
                }
            }
            .workflow-box {
                background-image: url(${workflow_bg});
                width: 1132px;
                height: 252px;
                margin: 32px auto;
                margin-bottom: 18px;
                background-repeat: no-repeat;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding-top: 25px;
            }
            .line {
                height: 4px;
                width: 100%;
                background: linear-gradient(90deg, #0191EA 20.07%, #0142EA 84.76%);
            }
            .content-bottom {
                height: 420px;
                margin-top: 29px;
                display: flex;
                color: #7A7A7A;
                font-size: 16px;
                .title {
                    color: #000000;
                    font-size: 24px;
                }
                & > div {
                    background: #EFF3FA;
                    border-radius: 8px;
                }
                .tool-box {
                    flex-grow: 1;
                    margin-right: 31px;
                    padding: 25px 39px 37px 41px;
                    .tool-item {
                        background: #DAE3EF;
                        border-radius: 8px;
                        height: 120px;
                        margin-top: 30px;
                        display: flex;
                        align-items: center;
                        padding-left: 40px;
                        transition: box-shadow ${theme.transition.large};
                    }
                    .tool-item:hover {
                        box-shadow: ${global.cardBoxShadow};
                    }
                    .process-box {
                        background-image: url(${color_process_bg});
                        span {
                            color: #626262;
                            margin-left: 10px;
                        }
                    }
                    .expect-box {
                        background-image: url(${color_process_expect});
                        background-size: cover;
                    }
                }
                .priciples {
                    margin-top: 15px;
                }
                .principle {
                    width: 505px;
                    padding: 28px 49px 29px 41px;
                    .priciple-item {
                        cursor: pointer;
                        color: #000000;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        span {
                            flex-grow: 1;
                        }
                        .k-icon {
                            color: #5A5A68;
                        }
                    }
                    .priciple-item:not(:last-child) {
                        border-bottom: 1px solid #B0BDC8;
                    }
                    .priciple-item, .priciple-item i {
                        transition: all .25s linear;
                    }
                    .priciple-item:hover {
                        color: #0191EA;
                        i {
                            color: #0191EA;
                        }
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .source-nav {
                .content {
                    padding-left: 20px;
                }
            }
            .source-content {
                height: auto;
                padding: 8px;
                .content-top {
                    height: auto;
                }
                .main-title {
                    padding: 26px 16px;
                }
                .secondary-title {
                    padding-left: 16px;
                }
                .workflow-box {
                    flex-direction: column;
                    padding: 8px;
                    height: auto;
                    width: 100%;
                    align-items: normal;
                }
                .card-content-box {
                    height: auto;
                    flex-direction: column;
                }

                .content-bottom {
                    height: auto;
                    flex-direction: column;
                    .tool-box {
                        padding: 26px 16px;
                        margin-right: 0;
                        .tool-item {
                            max-width: 500px;
                        }
                        .process-box {
                            padding-left: 15px;
                        }
                        .expect-box {
                            background-position: -24px;
                        }
                    }
                    .principle {
                        width: auto;
                        margin-top: 20px;
                        padding: 26px 16px;
                    }
                }
            }
        }
    `
}
