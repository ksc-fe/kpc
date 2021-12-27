import {css} from '@emotion/css';
import {mainBlock, center} from '../../../styles/default';

export function makeStyles() {
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
                        }
                        text-align: center;
                    }
                    & > div.active {
                        color: #ffffff;
                        background: #0191EA;
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
                }
                .optional-box {
                    width: 725px;
                    background: #FFFFFF;
                    padding: 27px 28px 27px 19px;
                    display: flex;
                }
                .left {
                    width: 326px;
                    height: 261px;
                    background: #F0F0F0;
                    background-image: linear-gradient(0deg, #D5D5D5 1px, #D5D5D5 1px, transparent 1px, transparent), 
                        linear-gradient(90deg, #D5D5D5 1px, transparent 0);
                    background-size: 20px 20px;
                    border-radius: 8px;
                    overflow: hidden;
                    ${center()}
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
                    .k-select {
                        border-color: #F0F4FA;
                        background: #F0F4FA;
                    }
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
    `
}
