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
            img {
                cursor: pointer;
            }
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
            .visit-king-vision {
                width: 370px;
                height: 61px;
                justify-content: flex-start;
                font-size: 18px;
                // background: linear-gradient(90deg, #0079FB, #15A3FB, #0079FB) no-repeat;
                // background-size: 630px 61px;
                  // background-position: -260px 0;
                  // transition: background-position 0.3s linear;
            }
            // .visit-king-vision:hover {
                // background-position: 0 0;
            // }
        }

        @media (max-width: 768px) {
            display: block;
            padding: 0 20px;
            height: auto;
            .visit-king-vision, .vis-description {
                width: 100% !important;
            }
            .king-vis-wrapper {
                width: auto !important;
                flex-direction: column;
                img {
                    max-width: 100%;
                }
                & > div:first-child {
                    width: auto;
                }
                .vis-description {
                    margin-bottom: 20px;
                }
                & > div:last-child {
                    width: auto;
                    & > div {
                        background-position: left center;
                        height: 260px;
                    }
                }
            }
        }
    `
}
