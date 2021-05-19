import {palette} from './utils';

export type Theme = {[name: string]: string | number | Theme};

export default {
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
        link: '#0091ea',
        linkHover: palette('#0091ea', -1), 
        disabled: '#ccc',
        disabledBg: '#f2f2f2',
        disabledBorder: '#ccc',
    },
    borderRadius: '2px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, .3)',
    fontSize: '12px',
    lineHeight: 1.5,
}
