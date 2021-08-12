import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, sizes} from '../../styles/utils';
import '../../styles/global';

const {switch: kswitch} = deepDefaults(theme, {
    switch: {
        bgColor: `#fff`,
        fontSize: `12px`,
        get color() { return theme.color.text },
        checkedBgColor: `#fff`,
        handleBorderRadius: `100%`,
        get handleBgColor() { return theme.color.border },
        get border() { return `1px solid ${theme.color.border}` },

        // checked
        checked: {
            get borderColor() { return theme.color.primary },
            get color() { return theme.color.primary },
            get bgColor() { return theme.color.primary },
        },

        // default
        default: {
            width: `36px`,
            height: `18px`,
            padding: `2px`,
        },

        // large
        large: {
            width: `52px`,
            height: `26px`,
            padding: `2px`,
        },

        // small
        small: {
            width: `32px`,
            height: `16px`,
            padding: `2px`,
        },

        // mini
        mini: {
            width: `24px`,
            height: `12px`,
            padding: `1px`,
        },

        // disabled
        get disabledBgColor() { return theme.color.disabledBg },
    }
});

export function makeStyles() {
    return css`
        display: inline-block;
        vertical-align: middle;
        background: ${kswitch.bgColor};
        position: relative;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        border: ${kswitch.border};
        box-sizing: content-box;
        input {
            opacity: 0;
            position: absolute;
        }
        .k-switch-bar,
        .k-switch-off {
            box-sizing: border-box;
        }
        .k-switch-bar {
            position: absolute;
            text-align: right;
            overflow: hidden;
        }
        .k-switch-wrapper {
            display: inline-block;
            position: relative;
            z-index: 1;
            border-radius: ${kswitch.handleBorderRadius};
        }
        .k-switch-bar,
        .k-switch-wrapper {
            height: 100%;
            background: ${kswitch.bgColor};
            transition: all ${theme.transition};
        }
        .k-switch-handle {
            border-radius: ${kswitch.handleBorderRadius};
            background: ${kswitch.handleBgColor};
            height: 100%;
            cursor: pointer;
            transition: left ${theme.transition};
            display: inline-block;
            img {
                height: 100%;
                visibility: hidden;
            }
        }

        // text
        .k-switch-on,
        .k-switch-off {
            position: absolute;
            font-size: ${kswitch.fontSize};
            color: ${kswitch.color};
            text-align: center;
        }

        // dragging
        &.k-dragging {
            .k-switch-bar,
            .k-switch-wrapper {
                background: ${kswitch.checkedBgColor};
                transition: background ${theme.transition};
            }
        }
        &:focus {
            outline: none;
            .k-switch-bar,
            .k-switch-wrapper {
                background: ${kswitch.checkedBgColor};
            }
        }

        // size
        ${sizes.map(size => {
            const {width, height, padding} = kswitch[size];
            return css`
               &.k-${size},
               &.k-${size} .k-switch-on,
               &.k-${size} .k-switch-off {
                   width: ${width};
                   height: ${height};
               }
               &.k-${size} {
                   border-radius: ${height};
                   .k-switch-bar {
                       width: ${height};
                       border-radius: ${height};
                   }
                   .k-switch-wrapper {
                       padding: ${padding};
                   }
                   .k-switch-on,
                   .k-switch-off {
                       line-height: ${height};
                       left: 0;
                   }
                   .k-switch-on {
                       padding: 0 ${height} 0 calc(${height} / 3);
                   }
                   .k-switch-off {
                       padding: 0 calc(${height} / 3) 0 ${height};
                   }
               }
            `
        })}

        // checked
        &.k-checked {
            border-color: ${kswitch.checked.borderColor};
            .k-switch-on {
                color: ${kswitch.checked.color};
            }
            .k-switch-handle {
                background: ${kswitch.checked.bgColor};
            }
            .k-switch-bar,
            .k-switch-wrapper {
                background: ${kswitch.checkedBgColor};
            }
            .k-switch-bar {
                width: 100%;
            }
        }

        // disabled
        &.k-disabled {
            background: ${kswitch.disabledBgColor};
            cursor: not-allowed;
            .k-switch-bar,
            .k-switch-wrapper {
                background: ${kswitch.disabledBgColor};
            }
        }

        &:not(.k-checked) {
            .k-switch-bar,
            .k-switch-wrapper {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    `;    
}
