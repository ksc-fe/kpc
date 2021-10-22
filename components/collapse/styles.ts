import {deepDefaults}  from '../../styles/utils';
import {theme} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';

export const kls = (className: string) => `k-collapse-${className}`;

const {collapse} = deepDefaults(theme, {
    collapse: {
        fontSize: '12px',
        titleMarginRight: '8px',
        borderPadding: '0 24px',
        collBorder: '1px solid #eee',

        item: {
            borderBottom: '1px solid #e5e5e5',
            titleHeight: '40px',
            contentPadding: '0 16px 16px'
        }
    }
});

export function makeStyles() {
    return css`
        font-size: ${collapse.fontSize};
        
        &.k-left {
            .${kls('arrow')} {
                float: left;
                margin-right: ${collapse.titleMarginRight};
                transform-origin: center center 0;
            }
        }

        &.k-border {
            border-radius: ${theme.borderRadius};
            padding: ${collapse.borderPadding};
            border: ${collapse.collBorder};
        }
    `;
}

export function makeItemStyles() {
    const collapseItem = collapse.item;
    return css`
        border-bottom: ${collapseItem.borderBottom};
        &:last-of-type {
            border-bottom-color: transparent;
        }

        .${kls('title')} {
            cursor: pointer;
            font-weight: bold;
            height: ${collapseItem.titleHeight};
            line-height: ${collapseItem.titleHeight};
            transition: color ${theme.transition};
            
        }
        
        .${kls('arrow')} {
            float: right;
            transition: transform ${theme.transition};
            line-height: ${collapseItem.titleHeight};
            height: ${collapseItem.titleHeight};
            transform-origin: left center 0;
        }

        &:not(.k-disabled) {
            .${kls('title')} {
                &:hover {
                    color: ${theme.color.primary};
                }
            }
        }

        .${kls('content')} {
            overflow: hidden;
            .${kls('wrapper')} {
                overflow: hidden;
                padding: ${collapseItem.contentPadding};
            }
        }

        &.k-active {
            .${kls('arrow')} {
                transform: rotate(90deg);
            }
        }

        &.k-disabled {
            color: ${theme.color.disabledBorder};
            .${kls('title')} {
                cursor: not-allowed;
            }
        }
    `;
}
