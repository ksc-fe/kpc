import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';
import design_system from '../../imgs/design_system.png';
import nav_logo from '../../imgs/nav_logo.png';
import index_nav_bg from '../../imgs/index_nav_bg.png';

export function makeStyles() {
    return css`
        font-family: ${global.fontFamily};
        .nav {
            height: 460px;
            position: relative;
            .nav-bg, .nav-content-box {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
            }

            .nav-bg {
               z-index: 1;
               background-image: url(${index_nav_bg});
               background-repeat: no-repeat;
               background-size: cover;
            }
            
            .nav-content-box {
                z-index: 5;
                background: linear-gradient(90deg, #EFF3FA 37.08%, rgba(235, 242, 248, 0.26) 74.87%);
                padding-top: 64px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .nav-content {
                width: ${global.contentWidth}px;
                & > div:first-child {
                    margin-top: 53px;
                    margin-bottom: 22px;
                    width: 154px;
                    height: 29px;
                    background: url(${design_system}) no-repeat;
                }
                & > div:nth-child(2) {
                    margin-bottom: 20px;
                    width: 443px;
                    height: 74px;
                    background: url(${nav_logo}) no-repeat;
                }
                & > div:nth-child(3) {
                    font-size: 24px;
                    color: #4A4A4A;
                    margin-bottom: 33px;
                }
                & > div:last-child {
                    .k-btn {
                        margin-right: 16px;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .nav {
                .nav-content {
                    width: auto;
                    & > div:nth-child(2) {
                        width: 300px;
                        background-size: contain;
                        background-position: center;
                    }
                }
            }
        }
    `
}
