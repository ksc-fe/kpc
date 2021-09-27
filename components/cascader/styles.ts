import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight, getLeft} from '../../styles/utils';
import '../../styles/global';

const {cascader} = deepDefaults(theme, {
    cascader: {
        width: '140px',
        height: '160px',
        get highlightColor() { return theme.color.danger },
        loadingGap: '20px',
        arrowGap: '8px',
        get selectedColor() { return theme.color.primary },
        get activeBgColor() { return theme.color.bg },

        // empty
        empty: {
            padding: `16px`,
            get color() { return theme.color.placeholder },
        },
    }
});

export function makeMenuStyles() {
    return css`
        min-width: ${cascader.width} !important;
        height: ${cascader.height};
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
    ` 
}
