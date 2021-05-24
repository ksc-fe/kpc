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

export const colors = ['default', 'primary', 'warning', 'danger', 'success'];

type Props = {
    size?: Sizes
    color?: Exclude<Colors, 'default'>
    rotate: boolean
}

export default function makeStyles({size, color, rotate: shouldRotate}: Props) {
    return css`
        display: inline-block;
        ${size && `font-size: ${icon.fontSize[size]}`};
        ${color && `color: ${theme.color[color]}`};
        ${shouldRotate && `animation: ${rotate} 1s infinite linear`};
        &:before {
            font-size: inherit;
        }
    `;
}
