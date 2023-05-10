import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import '../../styles/global';
import spin from '~/components/spin';

const defaults = {
    get borderRadius() {return theme.borderRadius},
    get border() {return `1px solid ${theme.color.border}` },
    get hoverBorderColor() {return theme.color.primary },
    get hoverBtnBg() { return theme.color.bg },
    get btnHoverColor() { return theme.color.primary },
    get disableBorderColor() {return theme.color.disabledBorder},
    get disabledBg() {return theme.color.disabledBg},
    get disableColor() {return theme.color.disabled},

    hoverBorderRadius: '0',
    default: {
        inputWidth: '46px',
        iconFontSize: '16px'
    },
    large: {
        inputWidth: '60px',
        iconFontSize: '32px'
    },
    small: {
        inputWidth: '32px',
        iconFontSize: '18px'
    },
    mini: {
        inputWidth: '26px',
        iconFontSize: '14px'
    },

    vertical: {
        default: {
            width: '108px',
        },
        large: {
            width: '138px',
        },
        small: {
            width: '78px',
        },
        mini: {
            width: '56px',
        }
    }
};

let spinner: typeof defaults;
setDefault(() => {
    spinner = deepDefaults(theme, {spinner: defaults}).spinner;
});

export function makeStyles() {
    return css`
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        border: ${spinner.border};
        border-radius: ${spinner.borderRadius};
        &:not(.k-disabled):hover {
            border-color: ${spinner.hoverBorderColor};
            .k-spinner-btn {
                background: ${spinner.hoverBtnBg};
            }
            .k-left {
                border-top-right-radius: ${spinner.hoverBorderRadius};
                border-bottom-right-radius: ${spinner.hoverBorderRadius};
            }
            .k-right {
                border-top-left-radius: ${spinner.hoverBorderRadius};
                border-bottom-left-radius: ${spinner.hoverBorderRadius};
            }
        }
        .k-spinner-btn {
            border:none;
            &:not(.k-disabled):hover {
                .k-icon {
                    color: ${spinner.btnHoverColor};
                }
            }
        }
        .k-spinner-input {
            width: ${spinner.default.inputWidth};
            .k-input-inner {
                text-align: center;
                border:none;
                &:hover,
                &:focus {
                    border: none
                }
            }
        }
        .k-spinner-icon {
            font-size: ${spinner.default.iconFontSize};
        }
        &.k-vertical {
            position: relative;
            font-size: 0;
            .k-spinner-btn {
                position: absolute;
                right: 0;
                margin: 0;
                height: calc(50% + 1px);
                line-height: 50%;
            }
            .k-spinner-icon {
                font-size: inherit !important;
            }
            .k-spinner-btn.k-left {
                bottom: 0;
                border-radius: 0 0 ${theme.borderRadius} 0;
            }
            .k-spinner-btn.k-right {
                top: 0;
                border-radius: 0 ${theme.borderRadius} 0 0;
            }
            .k-spinner-input {
                font-size: 0;
                .k-input-inner {
                    border-radius: ${theme.borderRadius} ;
                }
            }
            ${sizes.map(size => {
                const generate = () => `
                    .k-spinner-input {
                        padding-right: calc(${theme[size].height});
                        width: ${spinner.vertical[size].width};
                    }
                `
                if (size === 'default') {
                    return generate();
                } else {
                    return `
                        &.k-${size} {
                            ${generate()}
                        }
                    `;
                }
            })}
        }
            
        &.k-disabled {
            border-color: ${spinner.disableBorderColor};
            background: ${spinner.disabledBg};
            .k-icon {
                color: ${spinner.disableColor}
            }
        }

        ${sizes.map(size => {
            const styles = spinner[size];
            const generate = () => `
                .k-spinner-icon {
                    font-size: ${styles.iconFontSize};
                }
                .k-spinner-input {
                    width: ${styles.inputWidth};
                }
            `;
            if (size === 'default') {
                return generate();
            } else {
                return `
                    &.k-${size} {
                        ${generate()}
                    }
                `;
            }
        })}
    `;
}