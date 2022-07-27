import {css} from '@emotion/css';

export function makeStyles(theme :string) {
    if(theme == 'light')
        return css`
            height: 100%;
            .k-btn {
                font-size: 16px;
            }
            .k-layout-wrapper {
                height: 100%;
            }
            .k-layout-header {
                background: white;
                position: relative;
                display: flex;
                align-items: center;
                font-family: Roboto;
                font-weight: 500;
                font-size: 12px;
                justify-content: space-between;
                & > div {
                    flex-grow: 1;
                }
                & > div:last-child {
                    display: flex;
                    justify-content: flex-end;
                }
                .header-title {
                    text-align: center;
                    font-size: 30px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: black;
                    
                }
                .header-logo {
                    display: flex;
                    padding-left: 25px;
                    img {
                        width: 50px;
                    }
                }
                .header-options {
                    line-height: 70px;
                    color: black;
                    vertical-align: middle;
                    & > div {
                        margin-left: 10px;
                    }
                    .contrast {
                        cursor: pointer;
                        text-align: center;
                    }
                    .theme,
                    .colorType {
                        & > button {
                            background-color: white;
                        }
                        & > button: first-child {
                            border-right: none;
                        }
                        & > button: last-child {
                            border-left: none;
                        }
                        .checkout {
                            background-color: blue;
                            color: white;
                        }
                    }
                    
                    
                }
            }
            .cp-body {
                .card-title {
                    font-size: 40px;
                }
                .k-card {
                    background: #ececec;
                }
                .input {
                    margin-top: 40px;
                    margin-bottom: 20px;
                }
                .Color-RGB {
                    // border: 1px solid black;
                    display: flex;
                    align-items: center;
                    & > div: last-child {
                        margin-left: 10px;
                    }
                }
                .recomend {
                    .recomendItem {
                        margin-top: 40px;
                        .recomendItem-title {
                            font-size: 24px;
                            margin-bottom: 20px;
                        }
                        .colorPelette {
                            display: flex;
                            align-items: center;
                            & > div:nth-child(n+5) {
                                color: white;
                            }
                            & > div:nth-child(5) {
                                margin-right: 2px;
                                height:50px !important;
                                line-height: 50px !important;
                            }
                            .colorPeletteItem {
                                flex-grow: 1;
                                width: 100px;
                                height: 46px;
                                text-align: center;
                                line-height: 46px;
                                vertical-align: middle;
                            }
                        } 
                    }
                    
                }
                .colorPelette {
                    display: flex;
                    align-items: center;
                    & > div:nth-child(n+5) {
                        color: white;
                    }
                    & > div:nth-child(5) {
                        margin-right: 2px;
                        height:50px !important;
                        line-height: 50px !important;
                    }
                    .colorPeletteItem {
                        flex-grow: 1;
                        width: 100px;
                        height: 46px;
                        text-align: center;
                        line-height: 46px;
                        vertical-align: middle;
                    }
                } 
            }
        `;
    else {
        return css`
            height: 100%;
            .k-btn {
                font-size: 16px;
            }
            .k-layout-wrapper {
                height: 100%;
            }
            .k-layout-header {
                background: black;
                position: relative;
                display: flex;
                align-items: center;
                font-family: Roboto;
                font-weight: 500;
                font-size: 12px;
                justify-content: space-between;
                & > div {
                    flex-grow: 1;
                }
                & > div:last-child {
                    display: flex;
                    justify-content: flex-end;
                }
                .header-title {
                    text-align: center;
                    font-size: 30px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                }
                .header-logo {
                    display: flex;
                    padding-left: 25px;
                    img {
                        width: 50px;
                    }
                }
                .header-options {
                    line-height: 70px;
                    color: white;
                    vertical-align: middle;
                    & > div {
                        margin-left: 10px;
                    }
                    .contrast {
                        cursor: pointer;
                        text-align: center;
                    }
                    .theme,
                    .colorType {
                        & > button {
                            background-color: white;
                        }
                        & > button: first-child {
                            border-right: none;
                        }
                        & > button: last-child {
                            border-left: none;
                        }
                        .checkout {
                            background-color: blue;
                            color: white;
                        }
                    }
                    
                    
                }
            }
            .cp-body {
                background: #373737;
                .k-card {
                    background: #373737;
                }
                .card-title {
                    font-size: 40px;
                    color: white;
                }
                .input {
                    margin-top: 40px;
                    margin-bottom: 20px;
                    color: white;
                }
                .Color-RGB {
                    display: flex;
                    align-items: center;
                    & > div: last-child {
                        margin-left: 10px;
                    }
                }
                .recomend {
                    .recomendItem {
                        margin-top: 40px;
                        .recomendItem-title {
                            color: white;
                            font-size: 24px;
                            margin-bottom: 20px;
                        }
                        .colorPelette {
                            display: flex;
                            align-items: center;
                            & > div:nth-child(n+5) {
                                color: white;
                            }
                            & > div:nth-child(5) {
                                margin-right: 2px;
                                height:50px !important;
                                line-height: 50px !important;
                            }
                            .colorPeletteItem {
                                flex-grow: 1;
                                width: 100px;
                                height: 46px;
                                text-align: center;
                                line-height: 46px;
                                vertical-align: middle;
                            }
                        } 
                    }
                    
                }
                .colorPelette {
                    display: flex;
                    align-items: center;
                    & > div:nth-child(n+5) {
                        color: white;
                    }
                    & > div:nth-child(5) {
                        margin-right: 2px;
                        height:50px !important;
                        line-height: 50px !important;
                    }
                    .colorPeletteItem {
                        flex-grow: 1;
                        width: 100px;
                        height: 46px;
                        text-align: center;
                        line-height: 46px;
                        vertical-align: middle;
                    }
                } 
            }
        `;
    }
}

export function changeTheme(theme: string){
    if(theme == 'light') {
        return css`
            .k-layout-header {
                background-color: white !important;
                .header-title {
                    color: black;
                }
            }
        `
    } 
    return css`
        .k-layout-header {
            background-color: white !important;
            .header-title {
                color: white;
            }
        }
    `
}

export function DiaStyles() {
    return css`
        .k-dialog-body {
            display: flex ;
            
            & > div: first-child {
                width: 50%;
                padding: 10px 5px;
                & > div: first-child {
                    font-size: 24px;
                }
                & > div: last-child {
                    font-size: 18px;
                }
            }
            & > div: last-child {
                width: 50%;
                .contrast-box > div {
                    margin-left: 50px;
                    margin-top: 20px;
                }
                .contrast-box {
                    border: 1px solid gray;
                    width: 100%;
                    height: 300px;
                    & > div: nth-child(n+2) {
                        font-size: 12px;
                        display: flex;
                        justify-content: 
                    }
                }
                .title {
                    font-size: 20px;
                }
                .contrast-number {
                    & > div: first-child {
                        font-size: 30px;    
                    }
                    & > div: last-child {
                        vertical-align: bottom;
                        line-height: 45px;
                        margin-left: 5px; 
                    }
                }
                .choose-box {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            } 
        }
        .k-dialog-cancel {
            display: none;
        }
    `
}
