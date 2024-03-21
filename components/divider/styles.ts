import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const sizes = ['large', 'default', 'small'] as const;

const defaults = {
    positionOffset: '5%',
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

export const makeStyles = cache(function makeStyles(k: string, borderType: string) {
    return css`
        &.${k}-divider {
            padding: 0;
            border-top: 1px ${borderType} ${divider.borderColor};
        }

        &.${k}-light {
            border-top-color: ${divider.light.borderColor};
            &.${k}-with-text {
                &::before, &::after {
                    border-top-color: ${divider.light.borderColor};
                }
            }
            &.${k}-vertical {
                border-right-color: ${divider.light.borderColor};
            }
        }

        &.${k}-vertical {
            border-top: 0; 
            display: inline-block;
            height: 100%;
            border-right: 1px solid ${divider.borderColor};
            vertical-align: middle;
        }

        &.${k}-horizontal {
            width: 100%;
            min-width: 100%;
        }

        &.${k}-with-text {
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
        }

        .${k}-divider-text {
            padding: 0 16px;
        }

        &.${k}-left {
            &::before {
                width: ${divider.positionOffset};
            }
            &::after {
                width: calc(100% - ${divider.positionOffset});
            }
        }

        &.${k}-right {
            &::before {
                width: calc(100% - ${divider.positionOffset});
            }
            &::after {
                width: ${divider.positionOffset};
            }
        }

        // margin sizes
        ${sizes.map(size => {
            return css`
                &.${k}-${size} {
                    margin: ${theme[size].margin} 0;
                    &.${k}-vertical {
                        margin: 0 ${theme[size].margin};
                    }
                }
            `;
        })}
    `;
});
