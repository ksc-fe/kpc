import {deepDefaults}  from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    get transition() { return theme.transition.large },
    fontSize: '12px',
    borderPadding: '0 24px',
    collBorder: '1px solid #eee',
    get borderRadius() {
        return theme.largeBorderRadius
    },

    item: {
        borderBottom: '1px solid #e5e5e5',
        titleHeight: '40px',
        titleGap: '8px',
    }
};

let collapse: typeof defaults;
setDefault(() => {
    collapse = deepDefaults(theme, {collapse: defaults}).collapse;
    makeStyles?.clearCache();
    makeItemStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        font-size: ${collapse.fontSize};
        
        &.${k}-left {
            > .${k}-collapse-item > .${k}-collapse-title {
                flex-direction: row-reverse;
            }
        }

        &.${k}-border {
            border-radius: ${collapse.borderRadius};
            padding: ${collapse.borderPadding};
            border: ${collapse.collBorder};
        }
    `;
});

export const makeItemStyles = cache(function makeItemStyles(k: string) {
    const collapseItem = collapse.item;
    return css`
        border-bottom: ${collapseItem.borderBottom};
        &:last-of-type {
            border-bottom-color: transparent;
        }

        > .${k}-collapse-title {
            cursor: pointer;
            font-weight: bold;
            height: ${collapseItem.titleHeight};
            transition: color ${collapse.transition};
            display: flex;
            align-items: center;
            gap: ${collapseItem.titleGap};
            .${k}-collapse-title-wrapper {
                flex: 1;
            }
            .${k}-collapse-arrow {
                transition: transform ${collapse.transition};
            }
        }
        
        &:not(.${k}-disabled) {
            > .${k}-collapse-title {
                &:hover {
                    color: ${theme.color.primary};
                }
            }
        }

        &.${k}-active {
            > .${k}-collapse-title .${k}-collapse-arrow  {
                transform: rotate(90deg);
            }
        }

        &.${k}-disabled {
            color: ${theme.color.disabledBorder};
            > .${k}-collapse-title  {
                cursor: not-allowed;
            }
        }
    `;
});
