import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, getLeft, getRight} from '../../styles/utils';
import '../../styles/global';

const {menu} = deepDefaults(theme, {
    menu: {
        width: '200px',
        bgColor: '#262626',
        fontSize: '14px',
        get borderRadius() { return theme.borderRadius },
        get zIndex() { return theme.midZIndex },

        item: {
            height: '40px',
            padding: '0 21px',
            paddingLeft: '46px',
            color: '#b2b2b2',
            hoverColor: '#fff',
            get disabledColor() { return theme.color.text },
            
            arrowGap: '8px',

            dotFontSize: '12px'
        },

        icon: {
            width: '36px',
            minWidth: '14px',
            left: '10px',
            gap: '11px'
        },

        header: {
            height: '50px',
            fontSize: '14px',
            borderBottom: '1px solid #1b1b1d',
            get padding() { return menu.item.padding },
        },

        // sub-menu
        subBgColr: '#000',

        light: {
            bgColor: '#e5e5e9',
            subBgColor:  '#d5d5d9',
            headerBorderBottom: '1px solid #d5d5d9',
            item: {
                get color() { return theme.color.text }, 
                get hoverColor() { return theme.color.primary }, 
                disabledColor: '#999'
            },
        },

        // dropdown
        dropdown: {
            minWidth: '150px',
        },

        large: {
            width: '250px',
            get fontSize() { return menu.fontSize },
        },

        small: {
            width: '180px',
            get fontSize() { return theme.small.fontSize },
        }
    } 
});

export function makeMenuStyles() {

}

export function makeItemStyles() {

}
