import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';
import resource_bg from '../../imgs/resource_bg.png';
import color_process_bg from '../../imgs/color_process_bg.png';

export function makeStyles() {

    return css`
        font-family: ${global.fontFamily};
        .source-nav {
            ${mainBlock(196)};
            padding-top: 64px;
            background: #F1F6FA;
            background-image: url(${resource_bg});
            background-repeat: no-repeat;
            background-position: 750px -50px;
            .content {
                display: flex;
                align-items: center;
                .nav-title {
                    & > div:first-child {
                        font-size: 26px;
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
                    }
                    .process-box {
                        background-image: url(${color_process_bg});
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
                }
            }
        }
    `
}
