import {css} from '@emotion/css';
import {mainBlock, center} from '../../../styles/default';

export function makeStyles(colorList: any[]) {
    
    const boxShadowColorList: string[] = colorList.map((item: any) => {
        return item.color.includes('linear-gradient')
            ? item.color.match(/#\w{6}/)[0]
            : item.color
    });

    return css`
        background: linear-gradient(94.17deg, #F1DEFF 35.58%, rgba(0, 194, 255, 0) 99.19%);
        ${mainBlock(450)};
        position: relative;
        .web-info {
            display: block;
        }
        .h5-info {
            display: none;
        }
        .bg-layer {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            img {
                position: absolute;
                filter: blur(40px);
            }
            img:first-child {
                left: 760px;
                top: 120px;
            }
            img:nth-child(2) {
                left: 1270px;
                top: -10px;
                opacity: .67;
            }
            img:last-child {
                left: 1220px;
                top: 230px;
                opacity: .67;
            }
        }
        .cp-content {
            position: relative;
            z-index: 5;
            display: flex;
            & > div:first-child {
                flex-grow: 1;
            }
            & > div:last-child {
                width: 625px;
                display: flex;
                align-items: center;
            }
            .cp-logo {
                margin-top: 30px;
            }
            .cp-desc {
                font-size: 16px;
                line-height: 22px;
                color: #2E2E2E;
                width: 374px;
            }
            .info-box {
                display: flex;
                align-items: center;
                & > div:first-child { 
                    font-size: 14px;
                    color: #000000;
                    font-family: Roboto;
                    a {
                        text-decoration: none;
                        color: #000000;
                        border-bottom: 1px solid #000000;
                    }
                }
                & > div:last-child a:hover {
                    color: #0191EA;
                }
            }
            .color-box {
                padding-top: 20px;
                .color-wrapper {
                    width: 407px;
                    height: 112px;
                    background: #000000;
                    border: 1px solid #6E64E0;
                    box-sizing: border-box;
                    border-radius: 8px;
                    display: flex;
                    .color-item-box {
                        display: flex;
                        justify-content: space-around;
                        flex-grow: 1;
                        align-items: center;
                        color: #CDCDCD;
                        .color-item {
                            margin-top: 20px;
                            & > div:first-child {
                                width: 33px;
                                height: 33px;
                                border-radius: 50%;
                                background: #ffffff;
                                ${center()};
                                margin: 0 auto;
                                color: #ffffff;
                                cursor: pointer;
                            }
                            & > div:last-child {
                                padding-top: 10px;
                                text-align: center;
                                color: #737373;
                            }
                        }
                        ${(() => {
                            return boxShadowColorList.map((color: string, index: number) =>  {
                                return  `
                                    .color-item:nth-child(${index + 1}) {
                                        & > div:first-child:hover {
                                            box-shadow: 0 0 16px ${color};
                                        }
                                    }
                                `;
                            })
                        })()}
                    }
                    .color-swtich-box {
                        width: 69px;
                        margin-top: 10px;
                        .theme-type-switch {
                            width: 60px;
                            height: 20px;
                            background: #777777;
                            border-radius: 4px;
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            & > div {
                                ${center()};
                                width: 27px;
                                height: 13px;
                                border-radius: 4px;
                                cursor: pointer;
                            }
                            & > div.active {
                                background: #414141;
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
            
            .cp-box {
                width: 625px;
                height: 360px;
                border-radius: 8px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                background: #3D3D3D;
                & > div:first-child {
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding-right: 15px;
                    background: #3D3D3D;
                    & > div {
                        width: 9px;
                        height: 9px;
                        border-radius: 50%;
                        margin-left: 5px;
                    }
                    & > div:nth-child(1) {
                        background: #F93E3E;
                    }
                    & > div:nth-child(2) {
                        background: #FAAB11;
                    }
                    & > div:last-child {
                        background: #37CD02;
                    }
                }
                iframe {
                    transform-origin: 0 0;
                }
            }
        }

        @media (max-width: 768px) {
            display: block;
            padding: 0 20px;
            height: auto;
            .web-info {
                display: none;
            }
            .h5-info {
                display: block;
            }
            .cp-content {
                width: auto !important;
                flex-direction: column;
                img {
                    max-width: 100%;
                }
                .cp-desc-box {
                    text-align: center;
                }
                .info-box {
                    & > div {
                        margin: 0 auto;
                    }
                    & > div:first-child { 
                        font-size: 12px;
                        a {
                            border: none;
                        }
                    }
                    & > div:last-child a:hover {
                        color: #0191EA;
                    }
                }
                .cp-desc {
                    width: 100%;
                    text-align: center;
                    font-size: 16px;
                    & > p {
                        margin: 0;
                    }
                }
                .color-box {
                    .color-wrapper {
                        width: auto;
                    }
                }
                & > div:last-child {
                    width: auto;
                }
                .cp-box {
                    display: block;
                    height: auto;
                    margin: 12px 0 20px;
                    & > div:first-child {
                        height: 20px;
                    }
                }
            }
        }
    `
}
