import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';
import solution_bg from '../../imgs/solution_bg.jpg';
import {theme} from 'kpc/styles/theme';

export function makeStyles() {
    return css`
        font-family: ${global.fontFamily};
        .solution-nav {
            ${mainBlock(260)};
            background-image: url(${solution_bg});
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: cover;
            .content {
                display: flex;
                align-items: center;
                .nav-title {
                    color: #000000;
                    & > div:first-child {
                        font-size: 44px;
                    }
                    & > div:last-child {
                        font-size: 16px;
                    }
                }
            }
        }
        .solution-content {
            background: #F7F8FA;
            padding-bottom: 40px;
            ${mainBlock(1030)};
            height: auto;
            & > div {
                padding-top: 20px;
            }
            .solution-title {
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #000000;
                margin-bottom: 30px;
                margin-top: 10px;
            }
            .solution-box {
                display: flex;
                flex-wrap: wrap;
            }
            .solution-item {
                width: 285px;
                height: 310px;
                background: #ffffff;
                margin-bottom: 20px;
                border-radius: 10px;
                img {
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                    cursor: pointer;
                }
                transition: box-shadow ${theme.transition.middle};
            &:hover {
                box-shadow: ${global.cardBoxShadow};
            }
            }
            .solution-item:not(:nth-child(4)) {
                margin-right: 20px;
            }
            .solution-item:hover {
                box-shadow: ${global.cardBoxShadow};
            }

            .solution-info {
                padding: 20px;
                & > div:first-child {
                    font-size: 16px;
                }
                & > div:last-child {
                    display: flex;
                    align-items: center;
                    .sketch-logo {
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #E6E6E6;
                        border-radius: 6px;
                        cursor: pointer;
                        transition: background ${theme.transition.middle};
                    }
                    .sketch-logo:hover {
                        background: #F3F3F3;
                        border-color: #F3F3F3;
                    }
                    .solution-desc {
                        flex-grow: 1;
                        color: #8A8A8A;
                    }
                    img {
                        width: 70%;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .solution-nav {
                .content  {
                    padding-left: 20px;
                }
            }
            .solution-title {
                padding-left: 20px;
            }
            .solution-content {
                .solution-row {
                    flex-direction: column;
                    padding: 0 16px;
                }
            }
            .solution-box {
                padding: 0 20px;
            }
            .solution-content {
                .solution-item {
                    margin: 0 0 20px 0 !important;
                    width: 100%;
                    height: 340px;
                }
            }
        }
    `
}
