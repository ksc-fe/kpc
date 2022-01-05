import {css} from '@emotion/css';

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
        .title {
            height: 45px;
            display: flex;
            font-weight: 600;
            font-size: 32px;
            color: #000000;
            & > div:first-child {
                flex-grow: 1;
            }
            button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: #ffffff;
                .k-icon {
                    margin-right: 0;
                }
            }
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
    `
}
