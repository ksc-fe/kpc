import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight, getLeft} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    width: '140px',
    height: '160px',
    loadingGap: '20px',
    arrowGap: '8px',
    get selectedColor() { return theme.color.primary },
    get activeBgColor() { return theme.color.bg },

    // empty
    empty: {
        padding: `16px`,
        get color() { return theme.color.placeholder },
    },

    // filter
    filter: {
        get highlightColor() { return theme.color.danger },
        minWidth: '300px',
        maxHeight: '200px',
    }
};

let cascader: typeof defaults;
setDefault(() => {
    cascader = deepDefaults(theme, {cascader: defaults}).cascader;
});

export function makeMenuStyles() {
    return css`
        min-width: ${cascader.width} !important;
        min-height: ${cascader.height};
        .k-cascader-arrow {
            float: right;
            height: 100%;
            margin-left: ${cascader.arrowGap};
            line-height: inherit;
        }

        .k-cascader-loading {
            display: block;
            text-align: center;
            margin-top: ${cascader.loadingGap};
        }

        .k-cascader-empty {
            padding: ${cascader.empty.padding};
            color: ${cascader.empty.color};
            text-align: center;
        }

        .k-cascader-option {
            &.k-selected {
                color: ${cascader.selectedColor};
            }
            &.k-active {
                background: ${cascader.activeBgColor};
            }
        }
    `; 
}

export function makeFilterMenuStyles() {
    return css`
        min-width: ${cascader.filter.minWidth} !important;
        height: auto;
        max-height: ${cascader.filter.maxHeight};
        em {
            font-style: normal;
            color: ${cascader.filter.highlightColor};
        }
    `;
}
