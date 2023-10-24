import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    get bgColor() { return theme.color.border },
    get hoverBgColor() { return theme.color.placeholder },
    fontSize: `12px`,
    color: '#fff',
    handleBorderRadius: `100%`,
    handleBgColor: '#fff',

    // checked
    checked: {
        get bgColor() { return theme.color.primary },
        get disabledBgColor() {
            return palette(theme.color.primary, -3);
        },
        get hoverBgColor() { return theme.color.linkHover },
    },

    // default
    default: {
        width: `45px`,
        height: `24px`,
        padding: `3px`,
    },

    // large
    large: {
        width: `58px`,
        height: `30px`,
        padding: `3px`,
    },

    // small
    small: {
        width: `30px`,
        height: `16px`,
        padding: `2px`,
    },

    // mini
    mini: {
        width: `18px`,
        height: `10px`,
        padding: `1px`,
    },

    // disabled
    get disabledBgColor() { return theme.color.disabledBg },
};

let kswitch: typeof defaults;
setDefault(() => {
    kswitch = deepDefaults(theme, {switch: defaults}).switch;
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
        box-sizing: content-box;
        transition: background ${kswitch.transition};
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
            transition: all ${kswitch.transition};
        }
        &:hover {
            &,
            .k-switch-bar,
            .k-switch-wrapper {
                background: ${kswitch.hoverBgColor};
            }
        }
        .k-switch-handle {
            border-radius: ${kswitch.handleBorderRadius};
            background: ${kswitch.handleBgColor};
            height: 100%;
            cursor: pointer;
            transition: left ${kswitch.transition};
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
                background: ${kswitch.checked.bgColor};
                transition: background ${kswitch.transition};
            }
        }
        &:focus {
            outline: none;
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
            .k-switch-bar,
            .k-switch-wrapper {
                background: ${kswitch.checked.bgColor};
            }
            .k-switch-bar {
                width: 100%;
            }
            &:hover {
                .k-switch-bar,
                .k-switch-wrapper {
                    background: ${kswitch.checked.hoverBgColor};
                }
            }
        }

        // disabled
        &.k-disabled {
            &,
            .k-switch-handle {
                cursor: not-allowed;
            }
            &,
            .k-switch-bar,
            .k-switch-wrapper {
                background: ${kswitch.disabledBgColor};
            }
            &.k-checked {
                &,
                .k-switch-bar,
                .k-switch-wrapper {
                    background: ${kswitch.checked.disabledBgColor};
                }
            }
        }
    `;    
}
