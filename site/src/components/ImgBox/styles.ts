import {css} from '@emotion/css';

export function makeStyles() {

    return css`
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, .6);
        z-index: 1000;
        width: 100%;
        height: 100%;
        .img-wrapper {
            position: relative;
            height: 100%;
        }
        .img-box {
            display: flex;
            align-items: center;
            transform: translateX(0px);
            transition: transform .5s ease-in-out;
            height: 100%;
            & > div {
                flex-shrink: 0;
            }
            .img-item {
                text-align: center;
                margin: 0 25px;
                img {
                    margin: 0 auto;
                    max-width: 900px;
                    max-height: calc(100vh - 100px);
                    display: block;
                }
            }
        }
        .img-with-shadow {
            position: relative;
            display: inline-block;
            & > div {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
                transition: opacity .5s ease-in-out;
            }
            & > div.active {
                opacity: 0;
            }
        }
        /* .icon-arrow {
            position: absolute;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            top: 50%;
            margin-top: -25px;
            cursor: pointer;
            transition: all .25s linear;
            .icon {
                font-size: 35px;
            }
        } */
        .icon-arrow {
            position: absolute;
            top: 50%;
            margin-top: -25px;
        }
        .icon-arrow:hover {
            color: #0191EA;
        }
        .arrow-left {
            left: 150px;
        }
        .arrow-right {
            right: 150px;
        }
    `
}
