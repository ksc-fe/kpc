import {css} from '@emotion/css';

export function makeStyles() {
    return css`
        &.design-page {
            img {
                display: block;
                width: 100%;
                max-width: 990px;
            }
            .api {
                font-size: 14px;
            }
            article {
                line-height: 2;
                // max-width: 990px;
                // margin: 0 auto !important;
            }
        }
    `
}
