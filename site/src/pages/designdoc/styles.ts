import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';

export function makeStyles() {

    const menuWidth = '240px';
    
    return css`
        padding-top: 64px;
        font-family: ${global.fontFamily};
        .box {
            position: relative;
            .menu {
                position: absolute;
                left: 0;
                top: 0;
                width: ${menuWidth};
                border-right: 1px solid #D2D2D2;
                .k-menu {
                    width: 100%;
                }
                .k-menu-item {
                    background: #ffffff;
                }
                .k-menu-name {
                    color: #676767;
                }
                .k-active {
                    .k-menu-name {
                        color: #ffffff;
                    }   
                }
            }
            .content-box {
                display: flex;
                justify-content: center;
                .content {
                    width: 990px;
                }
            }
        }
    `
}
