import {css} from '@emotion/css';
import {mainBlock} from '../../../styles/default';
import kingVisionBgInner from '../../../imgs/kingvision_bg_inner.png';
import kingVisionBgOuter from '../../../imgs/kingvision_bg_outer.png';
import kingvision from '../../../imgs/kingvision.png';

export function makeStyles() {
    return css`
        background: #F8F8F8;
        ${mainBlock(450)};
        background-image: url(${kingVisionBgOuter});
        background-repeat: no-repeat;
        background-position: 84% 106%;
        .king-vis-wrapper {
            background-image: url(${kingVisionBgInner});
            background-repeat: no-repeat;
            background-position: 400px -12px;
            display: flex;
            & > div:first-child {
                flex-grow: 1;
                width: 0;
                padding-top: 53px;
            }
            & > div:last-child {
                width: 625px;
                display: flex;
                align-items: center;
                & > div {
                    width: 100%;
                    height: 350px;
                    background-image: url(${kingvision});
                    border-radius: 8px;
                    overflow: hidden;
                    background-repeat: no-repeat;
                    background-size: contain;
                    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
                }
            }
            .main-logo {
                margin-bottom: 15px;
            }
            .vis-title {
                margin-bottom: 18px;
            }
            .vis-description {
                width: 374px;
                font-size: 16px;
                margin-bottom: 65px;
                color: #2E2E2E;
                a {
                    text-decoration: none;
                    color: #0191EA;
                }
            }
        }
    `
}
