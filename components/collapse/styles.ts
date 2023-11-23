import {deepDefaults}  from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.large },
    fontSize: '12px',
    titleMarginRight: '8px',
    borderPadding: '0 24px',
    collBorder: '1px solid #eee',
    get borderRadius() {
        return theme.largeBorderRadius
    },

    item: {
        borderBottom: '1px solid #e5e5e5',
        titleHeight: '40px',
    }
};

let collapse: typeof defaults;
setDefault(() => {
    collapse = deepDefaults(theme, {collapse: defaults}).collapse;
});

export function makeStyles(k: string) {
    return css`
        font-size: ${collapse.fontSize};
        
        &.${k}-left {
            .${k}-collapse-arrow {
                float: left;
                margin-right: ${collapse.titleMarginRight};
            }
        }

        &.${k}-border {
            border-radius: ${collapse.borderRadius};
            padding: ${collapse.borderPadding};
            border: ${collapse.collBorder};
        }
    `;
}

export function makeItemStyles(k: string) {
    const collapseItem = collapse.item;
    return css`
        border-bottom: ${collapseItem.borderBottom};
        &:last-of-type {
            border-bottom-color: transparent;
        }

        .${k}-collapse-title {
            cursor: pointer;
            font-weight: bold;
            height: ${collapseItem.titleHeight};
            line-height: ${collapseItem.titleHeight};
            transition: color ${collapse.transition};
            
        }
        
        .${k}-collapse-arrow {
            float: right;
            transition: transform ${collapse.transition};
            line-height: ${collapseItem.titleHeight};
            height: ${collapseItem.titleHeight};
        }

        &:not(.${k}-disabled) {
            .${k}-collapse-title {
                &:hover {
                    color: ${theme.color.primary};
                }
            }
        }

        &.${k}-active {
            .${k}-collapse-arrow  {
                transform: rotate(90deg);
            }
        }

        &.${k}-disabled {
            color: ${theme.color.disabledBorder};
            .${k}-collapse-title  {
                cursor: not-allowed;
            }
        }
    `;
}
