import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import '../../styles/global';
import spin from '~/components/spin';

const defaults = {
    get borderRadius() { return theme.borderRadius },
    get border() { return `1px solid ${theme.color.border}` },
    get hoverBorderColor() { return theme.color.primary },
    get hoverBtnBg() { return theme.color.bg },
    get disabledBorderColor() { return theme.color.disabledBorder },
    get disabledBg() { return theme.color.disabledBg },
    get disabledColor() { return theme.color.disabled },

    default: {
        inputWidth: '46px',
        iconFontSize: '16px'
    },
    large: {
        inputWidth: '60px',
        iconFontSize: '24px'
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

export function makeStyles(k: string) {
    return css`
        display: inline-block;
        vertical-align: middle;
        border: ${spinner.border};
        border-radius: ${spinner.borderRadius};
        &:hover {
            border-color: ${spinner.hoverBorderColor};
            .${k}-spinner-btn {
                background: ${spinner.hoverBtnBg};
            }
            .${k}-left {
                border-radius: ${spinner.borderRadius} 0 0 ${spinner.borderRadius};
            }
            .${k}-right {
                border-radius: 0 ${spinner.borderRadius} ${spinner.borderRadius} 0;
            }
        }
        .${k}-spinner-input {
            width: ${spinner.default.inputWidth};
            .${k}-input-wrapper {
                border:none;
                border-radius: 0;
                &:hover{
                    border: none
                }
            }
            &.${k}-focus .${k}-input-wrapper {
                border: none;
            }
            .${k}-input-inner {
                text-align: center;
            }
        }
        .${k}-spinner-icon {
            font-size: ${spinner.default.iconFontSize};
        }
        &.${k}-vertical {
            position: relative;
            font-size: 0;
            .${k}-spinner-btn {
                position: absolute;
                right: 0;
                margin: 0;
                height: calc(50% - 2px);
                line-height: 50%;
            }
            .${k}-spinner-icon {
                font-size: inherit !important;
            }
            .${k}-spinner-btn.${k}-left {
                bottom: 1px;
                border-radius: 0 0 ${spinner.borderRadius} 0;
            }
            .${k}-spinner-btn.${k}-right {
                top: 1px;
                border-radius: 0 ${spinner.borderRadius} 0 0;
            }
            .${k}-spinner-input {
                .${k}-input-wrapper {
                    border-radius: ${spinner.borderRadius} 0 0 ${spinner.borderRadius};
                }
            }
            ${sizes.map(size => {
                const generate = () => css`
                    .${k}-spinner-input {
                        padding-right: ${theme[size].height};
                        width: ${spinner.vertical[size].width};
                    }
                `
                if (size === 'default') {
                    return generate();
                } else {
                    return css`
                        &.k-${size} {
                            ${generate()}
                        }
                    `;
                }
            })}
        }
            
        &.${k}-disabled {
            border-color: ${spinner.disabledBorderColor};
            background: ${spinner.disabledBg};
        }

        ${sizes.map(size => {
            const styles = spinner[size];
            const generate = () => css`
                .${k}-spinner-icon {
                    font-size: ${styles.iconFontSize};
                }
                .${k}-spinner-input {
                    width: ${styles.inputWidth};
                }
            `;
            if (size === 'default') {
                return generate();
            } else {
                return css`
                    &.k-${size} {
                        ${generate()}
                    }
                `;
            }
        })}
    `;
}
