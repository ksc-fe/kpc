import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight, getLeft} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

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
    makeMenuStyles?.clearCache();
    makeFilterMenuStyles?.clearCache();
});

export const makeMenuStyles = cache(function makeMenuStyles(k: string) {
    return css`
        min-width: ${cascader.width} !important;
        height: ${cascader.height};
        overflow: auto;
        .${k}-cascader-arrow {
            float: right;
            height: 100%;
            margin-left: ${cascader.arrowGap};
            line-height: inherit;
        }

        .${k}-cascader-loading {
            display: block;
            text-align: center;
            margin-top: ${cascader.loadingGap};
        }

        .${k}-cascader-empty {
            padding: ${cascader.empty.padding};
            color: ${cascader.empty.color};
            text-align: center;
        }

        .${k}-cascader-option {
            &.${k}-selected {
                color: ${cascader.selectedColor};
            }
            &.${k}-active {
                background: ${cascader.activeBgColor};
            }
        }
    `; 
});

export const makeFilterMenuStyles = cache(function makeFilterMenuStyles(k: string) {
    return css`
        min-width: ${cascader.filter.minWidth} !important;
        height: auto;
        max-height: ${cascader.filter.maxHeight};
        em {
            font-style: normal;
            color: ${cascader.filter.highlightColor};
        }
        .${k}-dropdown-item.${k}-selected {
            color: ${cascader.selectedColor};
        }
    `;
});
