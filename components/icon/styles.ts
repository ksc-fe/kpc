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
    get disabledColor() { return theme.color.disabled },
    get color() { return theme.color.lightBlack },
    fontSize: {
        default: '16px',
        large: '22px',
        small: '14px',
        mini: '12px',
    },
};

let icon: typeof defaults;
setDefault(() => {
    icon = deepDefaults(theme, {icon: defaults}).icon;
});

export const colors = ['primary', 'warning', 'danger', 'success'] as const;
export const sizes = ['large', 'small', 'mini'] as const;

export default function makeStyles(color?: string) {
    return css`
        color: ${icon.color};
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
                        color: ${palette(_color, -2)};
                    }
                }
            ` 
        })}
        &.k-rotate:before {
            animation: ${rotate} 1s infinite linear;
        }
        &:before {
            font-size: inherit;
            /**
             * FIXME: Why add bellow two styles?
             * https://github.com/ksc-fe/kpc/issues/876
             */
            // position: relative;
            // z-index: 1;
        }

        // hoverable
        &.k-hoverable {
            cursor: pointer;
            transition: color ${icon.transition};
            &:hover {
                color: ${theme.color.primary};
            }
            ${color && css`
                &:hover {
                    color: ${palette(color, -2)} !important;
                }
            `}
        }
        // disabled
        &.k-disabled {
            cursor: not-allowed;
            color: ${icon.disabledColor} !important;
        }
    `;
}
