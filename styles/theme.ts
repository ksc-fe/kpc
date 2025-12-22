import { palette, deepDefaults, deepExtends } from './utils';

export type Theme = {[name: string]: string | number | Theme};

export function defaultTheme() {
    return {
        large: {
            height: '40px',
            fontSize: '14px',
            padding: '16px',
            margin: '16px',
        },
        default: {
            height: '32px',
            fontSize: '12px',
            padding: '12px',
            margin: '12px',
        },
        small: {
            height: '24px',
            fontSize: '12px',
            padding: '8px',
            margin: '8px',
        },
        mini: {
            height: '20px',
            fontSize: '12px',
            padding: '8px',
            margin: '8px',
        },
        color: {
            primary: '#0091ea',
            warning: '#ff9a05',
            danger: '#ff4433',
            success: '#36b342',
            border: '#d0d5d9',
            text: '#3c4449',
            ghost: '#737373',
            info:'#0091ea',
            bg: '#f3f5f6',
            title: '#151b1e',
            darkBorder: '#2f2f36',
            placeholder: '#bec3c5',
            get link() { return theme.color.primary },
            get linkHover() { return palette(theme.color.primary, -1) }, 
            hoverBg: '#f3f5f6',
            disabled: '#bec3c5',
            disabledBg: '#f0f2f4',
            disabledBorder: '#d0d5d9',
            lightBlack: '#848f9a',
            purple: '#9747FF',
            teal: '#11D5A9',
            blue: '#437CFF',
            yellow: '#FFC22F',
        },
        borderRadius: '4px',
        largeBorderRadius: '6px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.08)',
        middleBoxShadow: '0px 2px 16px 2px rgba(0, 0, 0, 0.08)',
        largeBoxShadow: '0px 4px 32px 4px rgba(0, 0, 0, 0.08)',
        fontSize: '12px',
        lineHeight: 1.5,
        maxZIndex: 9999,
        midZIndex: 999,
    
        transition: {
            small: '.1s cubic-bezier(0.42, 0, 0.58, 1)',
            middle: '.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
            large: '.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        },
    }    
}

let theme = defaultTheme();
export function resetTheme() {
    theme = defaultTheme();
}
export {theme};

const queue: Function[] = [];
export function push(setTheme: Function) {
    queue.push(setTheme);
}

export function setTheme(customTheme: Theme) {
    resetTheme();
    deepExtends(theme, customTheme);
    // queue
    queue.forEach(fn => fn());
}

export function setDefault(callback: Function) {
    callback();
    push(callback);
}
