import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import '../../styles/global';

const defaults = {
    default: {
        inputWidth: '46px',
        iconFontSize: '24px'
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
        &:hover {
            border: 1px solid ${theme.color.primary};
            border-radius: ${theme.radius.formRadius}
        }
        .k-spinner-btn {
            vertical-align: top;
            &:hover,
            &:focus {
                z-index: 1;
                position: relative;
                border:1px solid #fff ;
                border-radius: ${theme.radius.formRadius};
                background:#f3f5f6;
            }
            &.k-left {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                margin-right: -1px;
                border-right:0;
            }
            &.k-right {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                margin-left: -1px;
                border-left:0;
            }
        }
        .k-spinner-input {
            width: ${spinner.default.inputWidth};
            vertical-align: top;
            .k-input-inner {
                text-align: center;
                padding: 0;
                border-radius: 0;
                border-left:0;
                border-right:0;
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
                line-height: 50% !important;
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
                    border-radius: ${theme.borderRadius} 0 0 ${theme.borderRadius};
                }
            }

            ${sizes.map(size => {
                const generate = () => `
                    .k-spinner-input {
                        padding-right: calc(${theme[size].height} - 1px);
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
            .k-spinner-btn {
                &:hover,
                &:focus {
                    z-index: 0;
                }
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
