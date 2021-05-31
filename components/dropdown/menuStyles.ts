import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {dropdownMenu} = deepDefaults(theme, {
    dropdownMenu: {
        minWidth: '100px',
        bgColor: '#fff',
        get borderRadius() { return theme.borderRadius },
        fontSize: '12px',
        get zIndex() { return theme.midZIndex },
    } 
});

export {dropdownMenu};

export default function makeStyles() {
    return css`
        position: absolute;
        min-width: ${dropdownMenu.minWidth};
        background: ${dropdownMenu.bgColor};
        border-radius: ${dropdownMenu.borderRadius};
        box-shadow: ${theme.boxShadow};
        font-size: ${dropdownMenu.fontSize};
        z-index: ${dropdownMenu.zIndex};
        top: 0;
        left: 0;
        
        // nested dropdown
        .k-dropdown {
            display: block;
        }
    `
}
