import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {spinner} = deepDefaults(theme, {
    spinner: {
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
                paddingRight: '32px'
            },
            large: {
                width: '138px',
                paddingRight: '40px'
            },
            small: {
                width: '78px',
                paddingRight: '24px'
            },
            mini: {
                width: '56px',
                paddingRight: '16px'
            }
        }
    }
});

export default function makeStyles() {
    return css`
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        .k-spinner-btn {
            vertical-align: top;
            &:hover {
                z-index: 1;
                position: relative;
            }
            &:focus {
                z-index: 1;
                position: relative;
            }
        }
        .k-spinner-left {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-right: -1px;
        }
        .k-spinner-right {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: -1px;
        }
        .k-input {
            width: ${spinner.default.inputWidth};
            vertical-align: top;
            text-align: center;
            .k-input-inner {
                text-align: center;
                padding: 0;
            }
        }
        .k-icon {
            font-size: ${spinner.default.iconFontSize};
        }
        i:before {
            font-size: ${spinner.default.iconFontSize};
        }

        
        &.k-spinner-vertical {
            position: relative;
            font-size: 0;

            .k-spinner-vertical-left {
                position: absolute;
                right: 0;
                bottom: 0;
                margin: 0;
                height: calc(50% + 1px);
                line-height: 50%;
            }
            .k-spinner-vertical-right {
                position: absolute;
                right: 0;
                top: 0;
                margin: 0;
                height: calc(50% + 1px);
                line-height: 50%;
            }
            .k-input {
                margin-right: -1px;
                font-size: 0;
                padding-right: ${spinner.vertical.default.paddingRight};
                width: ${spinner.vertical.default.width};
            }
            i:before {
                font-size: 12px !important;
            }
            ${sizes.map(s => {
                if (s !== 'default') {
                    return `
                        &.k-spinner-${s} {
                            .k-input {
                                padding-right: ${spinner.vertical[s].paddingRight};
                                width: ${spinner.vertical[s].width};
                            }
                        }
                    `;
                }
            })}
        }

        ${sizes.map(s => {
            if (s !== 'default') {
                return `
                    &.k-spinner-${s} {
                        .k-btn {
                            .k-icon {
                                font-size: ${spinner[s].iconFontSize};
                            }
                            i:before {
                                font-size: ${spinner[s].iconFontSize};
                            }
                        }
                        .k-input {
                            width: ${spinner[s].inputWidth};
                        }
                    }
                `;
            }
        })}

        .k-spinner {
            .k-input {
                .k-inner {
                    border-radius: 0;
                }
            }
                
            &.k-vertical {
                .k-input {
                    .k-inner {
                        border-radius: ${theme.borderRadius} 0 0 ${theme.borderRadius};
                    }
                }
                .k-right {
                    border-radius: 0 ${theme.borderRadius} 0 0;
                }
                .k-left {
                    border-radius: 0 0 ${theme.borderRadius} 0;
                }
            }
        }
    `;
}
