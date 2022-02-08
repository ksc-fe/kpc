import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, getLeft, getRight} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    item: {
        get height() { return theme.default.height },
        get padding() { return `0 ${theme.default.padding}` },
        get hoverBgColor() { return theme.color.bg },

        // disabled
        get disabledBgColor() { return theme.color.disabledBg },
        get disabledColor() { return theme.color.disabled },
    },
    menu: {
        minWidth: '100px',
        bgColor: '#fff',
        get borderRadius() { return theme.borderRadius },
        fontSize: '12px',
        get zIndex() { return theme.midZIndex },
    }
};

let dropdown: any;
setDefault(() => {
    dropdown = deepDefaults(theme, {dropdown: defaults}).dropdown;
});

export function makeMenuStyles() {
    return css`
        position: absolute;
        min-width: ${dropdown.menu.minWidth};
        background: ${dropdown.menu.bgColor};
        border-radius: ${dropdown.menu.borderRadius};
        box-shadow: ${theme.boxShadow};
        font-size: ${dropdown.menu.fontSize};
        z-index: ${dropdown.menu.zIndex};
        top: 0;
        left: 0;
        
        // nested dropdown
        .k-dropdown {
            display: block;
        }
    `
}

export function makeItemStyles() {
    return css`
        padding: ${dropdown.item.padding};
        cursor: pointer;
        white-space: nowrap;
        height: ${dropdown.item.height};
        line-height: ${dropdown.item.height};
        &.k-hover {
            background: ${dropdown.item.hoverBgColor};
        }
        &:first-of-type {
            border-radius: ${dropdown.menu.borderRadius} ${dropdown.menu.borderRadius} 0 0
        }
        &:last-of-type {
            border-radius: 0 0 ${dropdown.menu.borderRadius} ${dropdown.menu.borderRadius}
        }

        // disabled
        &.k-disabled {
            background: ${dropdown.item.disabledBgColor};
            color: ${dropdown.item.disabledColor};
            cursor: not-allowed;
        }

        // checkbox / radio
        .k-checkbox,
        .k-radio {
            display: block;
            margin: 0 -${getRight(dropdown.item.padding)} 0 -${getLeft(dropdown.item.padding)};
            padding: ${dropdown.item.padding};
        }
        .k-checkbox-wrapper,
        .k-radio-wrapper {
            vertical-align: text-bottom;
        }
        .k-checkbox-text,
        .k-radio-text {
            vertical-align: baseline;
        }
    `
}
