import {theme} from 'kpc/styles/theme';
import {deepExtends} from 'kpc/styles/utils';

const myTheme = {
    color: {
        primary: '#fe6b8b',
        danger: '#f44336',
        warning: '#fb8c00',
        success: '#4caf50',
        secondary: 'rgb(220, 0, 78)',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        text: 'rgba(0, 0, 0, 0.87)',
        disabledBorder: 'rgba(0, 0, 0, 0.26)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        border: 'rgba(0, 0, 0, 0.12)',
    },
    borderRadius: '4px',
    // input: {
        // width: '400px',
    // }
};

const defaults = deepExtends({}, theme);

export function attach() {
    deepExtends(theme, myTheme);
}

export function detach() {
    deepExtends(theme, defaults);
}
