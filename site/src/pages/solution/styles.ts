import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';
import solution_bg from '../../imgs/solution_bg.png';
import {theme} from 'kpc/styles/theme';

export function makeStyles() {

    return css`
        font-family: ${global.fontFamily};
        .solution-nav {
            ${mainBlock(260)};
            background: #F1F6FA;
            .content {
                display: flex;
                padding-top: 64px;
                align-items: center;
                background-image: url(${solution_bg});
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
        .solution-content {
            ${mainBlock(1030)};
            height: auto;
            & > div {
                padding-top: 32px;
            }
            .solution-row {
                display: flex;
                margin-top: 20px;
                flex-wrap: wrap;
                gap: 24px;
            }
            .solution-item {
                width: 384px;
                img {
                    width: 384px;
                    border-radius: 8px;
                }
                & > div:first-child {
                    width: 384px;
                    height: 240px;
                    background: #EFF3FA;
                    border-radius: 8px;
                    transition: box-shadow ${theme.transition.large};
                    &:hover {
                        box-shadow: ${global.cardBoxShadow};
                    }
                }
                & > div:last-child {
                    display: flex;
                    padding: 15px 0;
                    align-items: center;
                    .title-box {
                        flex-grow: 1;
                        & > div:first-child {
                            font-size: 18px;
                            color: #000000;
                        }
                    }
                    .download-icon {
                        cursor: pointer;
                        .k-icon {
                            font-size: 25px;
                        }
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
            .solution-content {
                .solution-row {
                    flex-direction: column;
                    padding: 0 16px;
                }
                .solution-item {
                    width: auto;
                    & > div:first-child {
                        width: auto;
                        height: auto;
                    }
                    img {
                        width: 100%;
                    }
                }
            }
        }
    `
}
