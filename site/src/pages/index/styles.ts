import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';
import design_system from '../../imgs/design_system.png';
import nav_logo from '../../imgs/nav_logo.png';

export function makeStyles() {

    return css`
        font-family: ${global.fontFamily};
        .nav {
            ${mainBlock(460)};
            padding-top: 64px;
            background: linear-gradient(110.15deg, #EFF3FA 36.71%, rgba(235, 242, 248, 0.64) 79.74%);
            .nav-content {
                & > div:first-child {
                    margin-top: 53px;
                    margin-bottom: 22px;
                    width: 154px;
                    height: 29px;
                    background-image: url(${design_system});
                }
                & > div:nth-child(2) {
                    margin-bottom: 20px;
                    width: 443px;
                    height: 74px;
                    background-image: url(${nav_logo});
                }
                & > div:nth-child(3) {
                    font-size: 24px;
                    color: #4A4A4A;
                    margin-bottom: 33px;
                }
                & > div:last-child {
                    display: flex;
                    .k-btn {
                        width: 108px;
                        height: 40px;
                        margin-right: 16px;
                        display: flex;
                        align-items: center;
                        font-family: Roboto;
                        font-size: 14px;
                        img {
                            margin-right: 7px;
                        }
                    }
                }
            }
        }
    `
}
