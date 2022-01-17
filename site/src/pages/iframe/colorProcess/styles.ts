import {css} from '@emotion/css';
import {center} from 'site/src/styles/default';
import {BgThemeValue, ThemeValue} from './index';

export function makeStyles(bgTheme: BgThemeValue, theme: ThemeValue) {
    const styleId = 'style';

    if(!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        
        style.innerHTML = `
            html, body, #page {
                height: 100%;
            }
        `;
        document.head.appendChild(style);    
    }

    return css`
        height: 100%;
        .k-btn {
            font-size: 16px;
        }
        .k-layout-wrapper {
            height: 100%;
        }
        .cp-body {
            padding: 20px;
            background: ${bgTheme.bgColor};
        }
        .k-layout-aside {
            background: ${bgTheme.menuColor};
        }
        .k-layout-header {
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-weight: 500;
            font-size: 24px;
            & > div:first-child {
                flex-grow: 1;
            }
            .header-logo {
                display: flex;
                padding-left: 25px;
            }
            .header-menu {
                display: flex;
                align-items: center;
                padding-right: 60px;
                & > div {
                    cursor: pointer;
                    height: 100%;
                    align-items: center;
                    margin-left: 82px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .25s ease-in-out;
                }
                & > div: hover {
                    color: #fff;
                }
                & > div:last-child {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: #ffffff;
                }
            }
        }
        .k-menu {
            height: 100%;
            .k-menu-header {
                font-family: Roboto;
                font-weight: 500;
                font-size: 32px;
                letter-spacing: -0.05em;
                color: #C6C6C6;
                height: 100px;
                & > div:first-child {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    & > span {
                        flex-grow: 1;
                    }
                }
                .k-icon {
                    font-size: 50px;
                }
            }
        }
        .menu-footer {
            ${center()};
            height: 86px;
            border-top: 1px solid #696969;
            background: ${bgTheme.menuColor};
            & > div {
                width: 280px;
                border: 1px solid ${theme.mainColor};
                color: ${theme.mainColor};
                display: flex;
                align-items: center;
                padding: 12px 20px;
                & > div:first-child {
                    flex-grow: 1;
                }
                ${(() => {
                    if(theme.mainColor.includes('linear-gradient')) {
                        return `
                            border: 1px solid transparent;
                            background-image: ${theme.mainColor};
                            background-clip: text; 
                            text-fill-color: transparent;
                            border-image: ${theme.mainColor} 10 10 stretch;
                        `
                    }
                })()}
            }
        }
        .cp-content {
            padding-left: 20px;
            .img-box {
                width: 100%;
                height: 500px;
                background: ${theme.mainColor};
            }
            .card-box {
                font-family: Roboto;
                padding-top: 20px;
                display: flex;
                font-weight: 500;
                overflow: hidden;
                letter-spacing: -0.1em;
                & > div {
                    height: 350px;
                    flex-grow: 1;
                    width: 0;
                    padding: 23px 40px 0 40px;
                }
                & > div:first-child {
                    margin-right: 10px;
                }
                & > div:last-child {
                    margin-left: 10px;
                }
                .card-title {
                    font-size: 32px;
                    color: #C6C6C6;
                    display: flex;
                    align-items: center;
                    & > div:first-child {
                        flex-grow: 1;
                    }
                    .k-icon {
                        font-size: 56px;
                    }
                }
                .title-secondary:not(:last-child) {
                    border-bottom: 1px solid #696969;
                }
                .title-secondary {
                    padding: 15px 0;
                    & > div:first-child {
                        display: flex;
                        align-items: center;
                        & > span:first-child {
                            font-size: 30px;
                            color: ${bgTheme.cardTextColor};
                            flex-grow: 1;
                        }
                        & > span:last-child {
                            font-size: 20px;
                            color: #A5A5A5;
                        }
                    }
                    p {
                        font-size: 20px;
                        width: 570px;
                        color: #A5A5A5;
                        margin: 0;
                    }
                }
                .collection-box {
                    display: flex;
                    margin-top: 40px;
                    & > div {
                        width: 200px;
                        height: 200px;
                        margin-right: 16px;
                        background: ${theme.mainColor};
                        color: ${theme.collectionsColor};
                        text-align: center;
                        & > div:first-child {
                            font-size: 50px;
                            margin: 62px auto 10px auto;
                        }
                        & > div:last-child {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    `;
}