import {css} from '@emotion/css';
import headerLogo from '../imgs/header_logo.png';
import headerLogo2x from '../imgs/header_logo_x2.png';
import {center} from '../styles/default';
import {theme} from 'kpc/styles/theme';

export function makeHeaderStyles() {
    return css`
        &.k-layout-header {
            background: rgba(255, 255, 255, 0.65);
            box-shadow: 0px 1px 4px 0px rgba(11, 11, 11, 0.2);
            color: #000;
            backdrop-filter: blur(20px);
            -moz-backdrop-filter: blur(20px);
            justify-content: space-between; 
            .logo {
                background-image: url(${headerLogo});
                width: 182px;
                height: 40px;
                background-size: cover;
                margin-left: 22px;
                cursor: pointer;
            }
            @media screen and (-webkit-min-device-pixel-ratio: 2) {
                .logo {
                    background-image: url(${headerLogo2x});
                }
            }
            .k-tabs {
                border: none;
                display: flex;
                align-items: center;
            }
            .k-tab {
                a {
                    color: inherit;
                    &:before {
                        content: '';
                        position: absolute;
                        inset: 0;
                    }
                }
            }
            .lang-wrapper {
                height: 100%;
                display: flex;
                align-items: center;
            }
            .lang-box {
                display: flex;
                background: #DFEAF2;
                border-radius: 2px;
                padding: 4px;
                & > div {
                    color: #090909;
                    width: 66px;
                    height: 24px;
                    border-radius: 2px;
                    line-height: 24px;
                    text-align: center;
                }
                & > div.active {
                    background: #FFFFFF;
                    color: #0191EA;
                }
            }
            .main {
                height: 100%;
                display: flex;
                align-items: center;
                .k-tabs {
                    margin-right: 40px;
                    .k-tab {
                        color: #000000;
                    }
                }
                .theme-color-box {
                    font-size: 14px;
                    position: relative;
                    width: 100px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    &:hover {
                        background: #ffffff;
                        & > div:first-child {
                            background: #ffffff;
                        }
                    }
                    & > div:first-child {
                        position: absolute;
                        left: -25px;
                        display: flex;
                        align-items: center;
                        height: 100%;
                        padding-left: 10px;
                    }
                    .cur-color {
                        height: 100%;
                        ${center()};
                        flex-grow: 1;
                    }
                    .theme-color-option {
                        width: 100%;
                        position: absolute;
                        left: 0;
                        top: 65px;
                        background: #ffffff;
                        box-shadow: 0px 4px 20px rgba(108, 103, 103, 0.25);
                        border-radius: 4px;
                        overflow: hidden;
                        & > div {
                            height: 62px;
                            ${center()};
                        }
                        & > div:hover {
                            background: #F8F8F8;
                        }
                    }
                    .color-item {
                        ${center()};
                        cursor: pointer;
                        width: 34px;
                        height: 34px;
                        border-radius: 50%;
                        color: #ffffff;
                        border: 4px solid #FFFFFF;
                        box-shadow: 0px 4px 20px rgba(108, 103, 103, 0.25);
                        box-sizing: border-box;
                    }
                    .color-item:hover {
                        box-shadow: 0 0 16px rgba(0, 0, 0, .1);
                    }
                }
            }

            .menu-btn {
                display: none;
                margin-right: 20px;
            }

            @media (max-width: 768px) {
                .logo {
                    width: 50px;
                }
                .k-tabs {
                    display: none;
                }
                .menu-btn {
                    display: block;
                }
                .nav-menu-list {
                    width: 100%;
                    .active {
                        color: ${theme.color.primary};
                    }
                }
            }
        }
    `
}

export function makeLayoutStyles() {
    return css`
        a, a code {
            color: ${theme.color.link};
            text-decoration: none;
            &:hover {
                color: ${theme.color.linkHover};
            }
        }
    `
}
