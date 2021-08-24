import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {spinner} = deepDefaults(theme, {
    spinner: {
        inputWidth: '46px',
        largeInputWidth: '60px',
        smallInputWidth: '32px',
        miniInputWidth: '26px',

        iconFontSize: '24px',
        largeIconFontSize: '32px',
        smallIconFontSize: '18px',
        miniIconFontSize: '14px',

        // vertical
        defaultVerticalWidth: '108px',
        largeVerticalWidth: '138px',
        smallVerticalWidth: '78px',
        miniVerticalWidth: '56px',
        defaultVerticalPaddingRight: '32px',
        largeVerticalPaddingRight: '40px',
        smallVerticalPaddingRight: '24px',
        miniVerticalPaddingRight: '16px',
    }
});

export default function makeStyles() {
    return css`
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        .k-btn {
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
            width: ${spinner.inputWidth};
            vertical-align: top;
            text-align: center;
            .k-inner {
                text-align: center;
                padding: 0;
            }
            .k-input-inner {
                text-align: center;
                padding: 0;
            }
        }
        .k-icon {
            font-size: ${spinner.iconFontSize};
        }
        i:before {
            font-size: ${spinner.iconFontSize};
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
                padding-right: ${spinner.defaultVerticalPaddingRight};
                width: ${spinner.defaultVerticalWidth};
            }
            i:before {
                font-size: 12px !important;
            }
            ${sizes.map(s => {
                if (s !== 'default') {
                    return `
                        &.k-spinner-${s} {
                            .k-input {
                                padding-right: ${spinner[s + 'VerticalPaddingRight']};
                                width: ${spinner[s + 'VerticalWidth']};
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
                                font-size: ${spinner[s + 'IconFontSize']};
                            }
                            i:before {
                                font-size: ${spinner[s + 'IconFontSize']};
                            }
                        }
                        .k-input {
                            width: ${spinner[s + 'InputWidth']};
                        }
                    }
                `;
            }
        })}
    `;
}
