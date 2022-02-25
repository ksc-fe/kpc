import {css} from '@emotion/css';
import {theme} from 'kpc/styles/theme';

export function makeStyles() {
    return css`
        position: absolute;
        top: 0;
        right: -200px;
        width: 200px;
        .k-tabs {
            width: 100%;
            border-right: none;
            border-left: 1px solid ${theme.color.border};
            .k-tab {
                text-align: left;
            }
            .k-tabs-active-bar {
                left: 0;
            }
        }
        .senior {
            font-size: 14px !important;
        }
        .k-affix-wrapper {
            max-height: calc(100% - 120px);
            overflow: auto;
        }
    `
}
