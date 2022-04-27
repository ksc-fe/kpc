import {css} from '@emotion/css';
import {theme} from 'kpc/styles/theme';

export function makeStyles() {
    return css`
        width: 590px;
        background: #EFF3FA;
        border-radius: 8px;
        height: 100%;
        display: inline-block;
        margin-right: 20px;
        padding: 24px 48px;
        font-family: PingFang SC;
        vertical-align: top;
        transition: box-shadow ${theme.transition.middle};
        &:hover {
            box-shadow: 0 0 8px rgba(0, 0, 0, .15);
        }
        .title {
            height: 45px;
            display: flex;
            font-weight: 600;
            font-size: 32px;
            color: #000000;
            & > div:first-child {
                flex-grow: 1;
            }
            .k-btn:hover {
                background: #fff;
            }
            // button {
                // width: 40px;
                // height: 40px;
                // border-radius: 50%;
                // color: #16325C;
                // background: #EFF3FA;
                // border: none;
                // .k-icon {
                    // margin-right: 0;
                // }
            // }
        }
        .sub-title {
            font-size: 16px;
            margin-top: 8px;
            height: 22px;
            color: #797979;
        }
        .content-box {
            width: 100%;
            height: 176px;
            margin-top: 36px;
        }

        @media (max-width: 768px) {
            width: auto;
            display: block;
            margin-right: 0;
            margin-bottom: 20px;
            padding: 20px;
            .content-box {
                height: auto;
            }
        }
    `;
}
