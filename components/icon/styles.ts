import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette}  from '../../styles/utils';
import {IconProps} from './index';
import {Sizes, Colors} from '../types';
import {rotate} from '../../styles/keyframes';
import '../../styles/fonts/iconfont';
import '../../styles/fonts/ionicons';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.small },

    fontSize: {
        default: '16px',
        large: '22px',
        small: '14px',
        mini: '12px',
    },

    hover: {
        get bgColor() { return theme.color.hoverBg },
        padding: '2px'
    }
};

let icon: typeof defaults;
setDefault(() => {
    icon = deepDefaults(theme, {icon: defaults}).icon;
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
                }
            `
        })}
        ${colors.map(color => {
            const _color = theme.color[color];
            return css`
                &.k-${color} {
                    color: ${_color};
                    &.k-hoverable:hover {
                        color: ${_color};
                        background: ${palette(_color, -4)};
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
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: ${icon.hover.padding};
            aspect-ratio: 1;
            width: calc(1em + ${icon.hover.padding} * 2);
            &:hover {
                color: ${theme.color.primary};
                background: ${icon.hover.bgColor};
            }
            ${color && `
                &:hover {
                    color: ${color};
                    background: ${palette(color, -4)} !important;
                }
            `}
        }
    `;
}
