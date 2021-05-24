import {palette} from './utils';
import {isFunction} from 'intact-shared';

export type ThemeValue<T> = T; // | (() => T) | (() => ThemeValue<T>) 
export type Theme = {[name: string]: ThemeValue<string> | ThemeValue<number> | Theme};

export const theme = {
    large: {
        height: '40px',
        fontSize: '14px',
        padding: '24px',
    },
    default: {
        height: '32px',
        fontSize: '12px',
        padding: '16px',
    },
    small: {
        height: '24px',
        fontSize: '12px',
        padding: '8px',
    },
    mini: {
        height: '16px',
        fontSize: '12px',
        padding: '8px',
    },
    color: {
        lightBlack: '#737373',
        primary: '#0091ea',
        warning: '#ff9800',
        danger: '#ff4133',
        success: '#36b342',
        border: '#ccc',
        text: '#4c4c4c',
        ghost: '#737373',
        bg: '#f1f1f5',
        title: '#333',
        darkBorder: '#b2b2b2',
        placeholder: '#b2b2b2',
        get link () { return theme.color.primary },
        get linkHover () { return palette(theme.color.primary, -1) }, 
        disabled: '#ccc',
        disabledBg: '#f2f2f2',
        disabledBorder: '#ccc',
    },
    borderRadius: '2px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, .3)',
    fontSize: '12px',
    lineHeight: 1.5,
}
