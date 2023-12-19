import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import {breakpoints, responsiveMap} from './constants';
import { cache } from '../utils';

// const defaults = {};

// let grid: typeof defaults;
// setDefault(() => {
    // grid = deepDefaults(theme, {grid: defaults}).grid;
    // makeRowStyles?.clearCache();
    // makeColStyles?.clearCache();
// });

export const makeRowStyles = cache(function makeRowStyles(k: string) {
    return css`
        position: relative;
        display: flex;
        flex-wrap: wrap;
        // justify
        &.${k}-justify-start {
            justify-content: flex-start;
        }
        &.${k}-justify-end {
            justify-content: flex-end;
        }
        &.${k}-justify-center {
            justify-content: center;
        }
        &.${k}-justify-between {
            justify-content: space-between;
        }
        &.${k}-justify-around {
            justify-content: space-around;
        }
        &.${k}-justify-evenly {
            justify-content: space-evenly;
        }
        // align
        &.${k}-align-top {
            align-items: flex-start;
        }
        &.${k}-align-bottom {
            align-items: flex-end;
        }
        &.${k}-align-middle {
            align-items: center;
        }
        &.${k}-align-stretch {
            align-items: stretch;
        }
        &.${k}-align-baseline {
            align-items: baseline;
        }
    `;
});

export const makeColStyles = cache(function makeColStyles(k: string) {
    return css`
        position: relative;
        width: 100%;
        .${k}-col-wrapper {
            height: 100%;
        }
        ${makeBreakpointsCols(k)}
    `;
});

function makeBreakpointsCols(k: string) {
    const styles: string[] = [];
    styles.push(makeCols(k));

    for (let i = breakpoints.length - 1; i >= 0; i--) {
        const breakpoint = breakpoints[i];
        if (breakpoint === 'xs') continue;

        styles.push(`@media ${responsiveMap[breakpoint]} {`);
        styles.push(makeCols(`${k}-${breakpoint}`));
        styles.push('}');
    }

    return styles.join('');
}

function makeCols(prefix: string) {
    const colsStyles: string[] = [];
    for (let i = 0; i < 24; i++) {
        const percentage = String((i / 24) * 100) + '%';
        colsStyles.push(`
            &.${prefix}-${i} {
                width: ${percentage};
            }
            &.${prefix}-offset-${i} {
                margin-left: ${percentage};
            }
            &.${prefix}-order-${i} {
                order: ${i};
            }
            &.${prefix}-push-${i} {
                left: ${percentage};
            }
            &.${prefix}-pull-${i} {
                right: ${percentage};
            }
        `);
    }

    return colsStyles.join('');
}
