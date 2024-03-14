import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const sizes = ['large', 'default', 'small'] as const;

const defaults = {
    positionWidth: '5%',
    get borderColor() { return theme.color.darkBorder },

    light: {
        get borderColor() { return theme.color.disabledBg },
    },

    large: {
        get margin() { return theme.large.padding},
    }
    
};

let divider: typeof defaults;
setDefault(() => {
    divider = deepDefaults(theme, {divider: defaults}).divider;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        &.${k}-divider {
            padding: 0;
            border-top: 1px solid ${divider.borderColor};
        }

        &.${k}-light {
            border-top-color: ${divider.light.borderColor};
            &.${k}-divider-with-text {
                &::before, &::after {
                    border-top-color: ${divider.light.borderColor};
                }
            }
            &.${k}-divider-vertical {
                border-right-color: ${divider.light.borderColor};
            }
        }

        &.${k}-divider-vertical {
            border-top: 0; 
            display: inline-block;
            height: 100%;
            border-right: 1px solid ${divider.borderColor};
            vertical-align: middle;
        }

        &.${k}-divider-horizontal {
            width: 100%;
            min-width: 100%;
        }

        &.${k}-dashed {
            border-top-style: dashed;
        }

        &.${k}-divider-with-text {
            border-top: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            text-align: center;
            &::before, &::after {
                width: 50%;
                content: '';
                transform: translateY(50%);
                border-top: 1px solid ${divider.borderColor};
            }
            .${k}-divider-text {
                padding: 0 16px;
            }
        }

        &.${k}-divider-with-text-left {
            &::before {
                width: ${divider.positionWidth};
            }
            &::after {
                width: calc(100% - ${divider.positionWidth});
            }
        }

        &.${k}-divider-with-text-right {
            &::before {
                width: calc(100% - ${divider.positionWidth});
            }
            &::after {
                width: ${divider.positionWidth};
            }
        }

        // margin sizes
        ${sizes.map(size => {
            return css`
                &.${k}-divider-${size} {
                    margin: ${theme[size].margin} 0;
                    &.${k}-divider-vertical {
                        margin: 0 ${theme[size].margin};
                    }
                }
            `;
        })}
    `;
});
