import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, getLeft, getRight} from '../../styles/utils';
import '../../styles/global';
import {dropdownMenu} from './menuStyles';

const {dropdownItem} = deepDefaults(theme, {
    dropdownItem: {
        get height() { return theme.default.height },
        get padding() { return `0 ${theme.default.padding}` },
        get hoverBgColor() { return theme.color.bg },

        // disabled
        get disabledBgColor() { return theme.color.disabledBg },
        get disabledColor() { return theme.color.disabled },
    } 
});

export default function makeStyles() {
    return css`
        padding: ${dropdownItem.padding};
        cursor: pointer;
        white-space: nowrap;
        height: ${dropdownItem.height};
        line-height: ${dropdownItem.height};
        &.k-hover {
            background: ${dropdownItem.hoverBgColor};
        }
        &:first-of-type {
            border-radius: ${dropdownMenu.borderRadius} ${dropdownMenu.borderRadius} 0 0
        }
        &:last-of-type {
            border-radius: 0 0 ${dropdownMenu.borderRadius} ${dropdownMenu.borderRadius}
        }

        // disabled
        &.k-disabled {
            background: ${dropdownItem.disabledBgColor};
            color: ${dropdownItem.disabledColor};
            cursor: not-allowed;
        }

        // checkbox / radio
        .k-checkbox,
        .k-radio {
            display: block;
            margin: 0 -${getRight(dropdownItem.padding)} 0 -${getLeft(dropdownItem.padding)};
            padding: ${dropdownItem.padding};
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
