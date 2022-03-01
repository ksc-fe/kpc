import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import {breakpoints, responsiveMap} from './constants';

const defaults = {};

let grid: any;
setDefault(() => {
    grid = deepDefaults(theme, {grid: defaults}).grid;
});

export function makeRowStyles() {
    return css`
        position: relative;
        display: flex;
        flex-wrap: wrap;
        // justify
        &.k-justify-start {
            justify-content: flex-start;
        }
        &.k-justify-end {
            justify-content: flex-end;
        }
        &.k-justify-center {
            justify-content: center;
        }
        &.k-justify-between {
            justify-content: space-between;
        }
        &.k-justify-around {
            justify-content: space-around;
        }
        &.k-justify-evenly {
            justify-content: space-evenly;
        }
        // align
        &.k-align-top {
            align-items: flex-start;
        }
        &.k-align-bottom {
            align-items: flex-end;
        }
        &.k-align-middle {
            align-items: center;
        }
        &.k-align-stretch {
            align-items: stretch;
        }
        &.k-align-baseline {
            align-items: baseline;
        }
    `;
}

const colsStyles = makeBreakpointsCols();
export function makeColStyles() {
    return css`
        position: relative;
        width: 100%;
        ${colsStyles}
    `;
}

function makeBreakpointsCols() {
    const styles: string[] = [];
    styles.push(makeCols(''));

    for (let i = breakpoints.length - 1; i >= 0; i--) {
        const breakpoint = breakpoints[i];
        if (breakpoint === 'xs') continue;

        styles.push(`@media ${responsiveMap[breakpoint]} {`);
        styles.push(makeCols(`-${breakpoint}`));
        styles.push('}');
    }

    return styles.join('');
}

function makeCols(prefix: string) {
    const colsStyles: string[] = [];
    for (let i = 0; i < 24; i++) {
        const percentage = String((i / 24) * 100) + '%';
        colsStyles.push(`
            &.k${prefix}-${i} {
                width: ${percentage};
            }
            &.k${prefix}-offset-${i} {
                margin-left: ${percentage};
            }
            &.k${prefix}-order-${i} {
                order: ${i};
            }
            &.k${prefix}-push-${i} {
                left: ${percentage};
            }
            &.k${prefix}-pull-${i} {
                right: ${percentage};
            }
        `);
    }

    return colsStyles.join('');
}
