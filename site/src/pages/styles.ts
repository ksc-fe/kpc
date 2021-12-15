import {css} from '@emotion/css';
import headerLogo from '../imgs/header_logo.png';
import headerLogo2x from '../imgs/header_logo_x2.png';

export function makeHeaderStyles() {
    return css`
        &.k-layout-header {
            background: rgba(255, 255, 255, 0.6); 
            opacity: 0.86;
            box-shadow: 0px 1px 1px rgba(176, 176, 176, 0.63);
            color: #000;
            justify-content: space-between; 
            .logo {
                background-image: url(${headerLogo});
                width: 174px;
                height: 37px;
                background-size: cover;
                margin-left: 22px;
            }
            @media screen and (-webkit-min-device-pixel-ratio: 2) {
                .logo {
                    background-image: url(${headerLogo2x});
                }
            }

            .k-tabs {
                border: none;
            }
            .k-tab {
                color: #000;
            }
        }
    `
}
