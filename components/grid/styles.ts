import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {grid} = deepDefaults(theme, {
    grid: {
        row: {

        },

        col: {

        }
    }
});

export function makeRowStyles() {
    return css`
        position: relative;
        display: flex;
        flex-wrap: wrap;
    `;
}

const colsStyles = makeCols();
export function makeColStyles() {
    return css`
        position: relative;
        width: 100%;
        ${colsStyles}
    `;
}

function makeCols() {
    const colsStyles: string[] = [];
    for (let i = 0; i < 24; i++) {
        const percentage = String((i / 24) * 100) + '%';
        colsStyles.push(`
            &.k-${i} {
                width: ${percentage};
            }
            &.k-offset-${i} {
                margin-left: ${percentage};
            }
            &.k-order-${i} {
                order: ${i};
            }
            &.k-push-${i} {
                left: ${percentage};
            }
            &.k-pull-${i} {
                right: ${percentage};
            }
        `);
    }

    return colsStyles.join('');
}
