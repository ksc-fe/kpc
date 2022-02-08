import {css} from '@emotion/css';

export function makeStyles() {

    return css`
        background: #FFFFFF;
        border-radius: 4px;
        display: inline-block;
        .title {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #E3E3E3;
            font-weight: 600;
            font-size: 14px;
            color: #000;
            padding: 0 16px;
        }
        .content {
            padding: 16px;
        }
    `
}
