import {css, cx} from '@emotion/css';
import {theme, ThemeValue} from '../styles/theme';
import {deepDefaults, palette}  from '../styles/utils';
import {IconProps} from './index';
import {Sizes, Colors} from '../types';
import {rotate} from '../styles/keyframes';
import '../styles/fonts/iconfont';
import '../styles/fonts/ionicons';

const iconStyles = {
    fontSize: {
        default: '16px',
        large: '22px',
        small: '14px',
        mini: '12px',
    }
};

const {icon} = deepDefaults(theme, {
    icon: iconStyles,
});

export const colors = ['primary', 'warning', 'danger', 'success'] as const;
export const sizes = ['large', 'small', 'mini'] as const;

export default function makeStyles() {
    return css`
        font-size: ${icon.fontSize.default};
        display: inline-block;
        ${sizes.map(size => {
            return css`
                &.k-${size} {
                    font-size: ${icon.fontSize[size]};
                }
            `
        })}
        ${colors.map(color => {
            return css`
                &.k-${color} {
                    color: ${theme.color[color]};
                }
            ` 
        })}
        &.k-rotate {
            animation: ${rotate} 1s infinite linear;
        }
        &:before {
            font-size: inherit;
        }
    `;
}
