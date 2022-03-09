import {css} from '@emotion/css';

export function makeStyles() {
    return css`
        &.design-page {
            img {
                max-width: 100%;
            }
            .api {
                font-size: 14px;
            }
            article {
                max-width: 990px;
                margin: 0 auto !important;
            }
        }
    `
}
