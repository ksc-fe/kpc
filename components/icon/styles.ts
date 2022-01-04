import {css, cx} from '@emotion/css';
import {theme, ThemeValue} from '../../styles/theme';
import {deepDefaults, palette}  from '../../styles/utils';
import {IconProps} from './index';
import {Sizes, Colors} from '../types';
import {rotate} from '../../styles/keyframes';
import '../../styles/fonts/iconfont';
import '../../styles/fonts/ionicons';
import '../../styles/global';

const iconStyles = {
    get transition() { return theme.transition.small },

    fontSize: {
        default: '16px',
        large: '22px',
        small: '14px',
        mini: '12px',
    },

    hover: {
        get bgColor() { return palette(theme.color.primary, -4) },
        padding: '2px'
    }
};

const {icon} = deepDefaults(theme, {
    icon: iconStyles,
});

export const colors = ['primary', 'warning', 'danger', 'success'] as const;
export const sizes = ['large', 'small', 'mini'] as const;

export default function makeStyles(color?: string) {
    return css`
        font-size: ${icon.fontSize.default};
        line-height: 1;
        // display: inline-block;
        ${sizes.map(size => {
            const fontSize = icon.fontSize[size];
            return css`
                &.k-${size} {
                    font-size: ${fontSize};
                    &.k-hoverable:hover{
                        &:after {
                            width: calc(${fontSize} + ${icon.hover.padding});
                            height: calc(${fontSize} + ${icon.hover.padding});
                        }
                    }
                }
            `
        })}
        ${colors.map(color => {
            const _color = theme.color[color];
            return css`
                &.k-${color} {
                    color: ${_color};
                    &.k-hoverable:hover {
                        color: ${palette(_color, -2)};
                        &:after {
                            display: none;
                        }
                    }
                }
            ` 
        })}
        &.k-rotate:before {
            animation: ${rotate} 1s infinite linear;
        }
        &:before {
            position: relative;
            font-size: inherit;
            z-index: 1;
        }

        // hoverable
        &.k-hoverable {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: color ${icon.transition};
            &:hover {
                color: ${theme.color.primary};
                &:after {
                    content: '';
                    position: absolute;
                    width: calc(${icon.fontSize.default} + ${icon.hover.padding});
                    height: calc(${icon.fontSize.default} + ${icon.hover.padding});
                    background: ${icon.hover.bgColor};
                }
            }
            ${color && `
                &:hover {
                    color: ${palette(color, -2)} !important;
                }
            `}
        }
    `;
}
