import {css} from '@emotion/css';
import global, {mainBlock, center} from '../../../styles/default';

export function makeStyles(themeColor: string) {
    return css`
        background: #F0F4FA;
        ${mainBlock(657)};
        padding-top: 35px;
        padding-bottom: 50px;
        .best-box {
            & > div:first-child {
                display: flex;
                justify-content: center;
                .title-box div {
                    text-align: center;
                }
                .main-title {
                    font-weight: 600;
                    font-size: 24px;
                    color: #000000;
                    margin-bottom: 14px;
                }
                .sub-title {
                    font-size: 16px;
                    color: #7A7A7A;
                }
            }

            & > div:nth-child(2) {
                display: flex;
                justify-content: center;
                .imgs-box {
                    margin: 30px 0;
                    display: flex;
                    justify-content: space-between;
                    width: 600px;
                    font-family: Roboto;
                    font-size: 16px;
                    & > div {
                        cursor: pointer;
                        border-radius: 8px;
                        width: 99px;
                        height: 99px;
                        img {
                            margin: 20px auto 5px auto;
                            display: block;
                            width: 40px;
                        }
                        text-align: center;
                    }
                    & > div:not(.active):hover {
                        background: #E5EAF4;
                    }
                    & > div.active {
                        color: #ffffff;
                        background: ${themeColor};
                    }
                }
            }

            & > div:last-child {
                display: flex;
                height: 315px;
                & > div {
                    height: 100%;
                    border-radius: 8px;
                }
                .code-pen {
                    width: 455px;
                    margin-right: 20px;
                    background: #212121;
                    border-radius: 8px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    & > div:first-child {
                        padding: 20px 45px;
                        color: #B8B8B8;
                        font-size: 14px;
                        font-family: Roboto;
                        background: #212121;
                    }
                    & > div:last-child {
                        flex-grow: 1;
                        .mtk1, .mtk22 {
                            color: #FACD11;
                        }
                        .mtk5 {
                            color: #04E1D1;
                        }
                    }
                }
                .optional-box {
                    width: 725px;
                    background: #FFFFFF;
                    padding: 27px 28px 27px 19px;
                    display: flex;
                    &:hover {
                        box-shadow: ${global.cardBoxShadow};
                    }
                }
                .left {
                    width: 326px;
                    height: 261px;
                    background: #F0F0F0;
                    border-radius: 8px;
                    overflow: hidden;
                    position: relative;
                    .row {
                        position: absolute;
                        width: 100%;
                        border-bottom: 1px dashed #ccc;
                        left: 0;
                        top: 20px;
                    }
                    .column {
                        position: absolute;
                        height: 100%;
                        top: 0;
                        left: 20px;
                        border: 1px dashed #D5D5D5;
                    }
                    ${center()}
                    iframe {
                        z-index: 10;
                    }
                    .k-btn {
                        width: 120px;
                        height: 40px;
                        font-family: Roboto;
                        font-size: 16px;    
                    }
                }
                .right {
                    padding-left: 60px;
                    padding-top: 15px;
                    .input-box {
                        input:hover {
                            border-color: #36acef;
                        }
                    }
                    .item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 30px;
                        & > div:first-child {
                            color: #4F4F4F;
                            width: 110px;
                        }
                        & > div:last-child {
                            flex-grow: 1;
                            width: 0;
                            & > * {
                                width: 160px;
                                height: 32px;
                            }
                        }
                    }
                    /* .k-select {
                        border-color: #F0F4FA;
                        background: #F0F4FA;
                    } */
                    .radius-box {
                        display: flex;
                        align-items: center;
                        color: #000000;
                        .k-slider {
                            flex-grow: 1;
                        }
                        .radius-value:first-child {
                            padding-right: 10px;
                        }
                        .radius-value:last-child {
                            padding-left: 10px;
                        }
                    }
                }
            }
        }

        @media (max-width: 768px) {
            display: block;
            padding: 0 20px;
            height: auto;
            .best-box {
                width: auto !important;
                & > div:first-child {
                    .title-box {
                        padding: 20px;
                    }
                }

                & > div:nth-child(2) {
                    .imgs-box {
                        width: auto;
                    }
                }

                & > div:last-child {
                    flex-direction: column;
                    height: auto;
                    .code-pen {
                        width: auto;
                        margin-right: 0;
                    }
                    .optional-box {
                        flex-direction: column;
                        width: auto;
                        margin: 12px 0 20px;
                        padding: 20px;
                    }
                    .left {
                        height: 100px;
                        width: 100%;
                    }
                    .right {
                        padding-left: 20px;
                        .item {
                            &:last-of-type {
                                margin-bottom: 0;
                            }
                            > div:first-child {
                                width: 80px;
                            }
                        }
                    }
                }
            }
        }
    `
}
