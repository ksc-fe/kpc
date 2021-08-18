import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const types = ['primary', 'warning', 'danger', 'success', 'disabled'] as const;

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
        defaultVerticalPaddingRight: '36px',
        largeVerticalPaddingRight: '40px',
        smallVerticalPaddingRight: '30px',
        miniVerticalPaddingRight: '26px',
    }
});

export default function makeStyles() {
    return css`
        .k-spinner {
            display: inline-block;
            vertical-align: middle;
            line-height: 1;
            .k-btn {
                vertical-align: top;
                &:hover
                &:focus {
                    z-index: 1;
                    position: relative;
                }
            }
            .k-btn {
                vertical-align: top;
                &:hover
                &:focus {
                    z-index: 1;
                    position: relative;
                }
            }
            .k-left {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                margin-right: -1px;
            }
            .k-right {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                margin-left: -1px;
            }
            .k-input {
                width: input-width;
                vertical-align: top;
                .k-inner {
                    text-align: center;
                    padding: 0;
                }
            }
                
            .k-icon {
                font-size: icon-font-size;
            }

            &.k-vertical {
                position: relative;
                font-size: 0;
                .k-input {
                    margin-right: -1px;
                    font-size: 0;
                }
                .k-left
                .k-right {
                    position: absolute;
                    right: 0;
                    margin: 0;
                    height: calc(50% + 1px);
                    line-height: 50%;
                }
                .k-right {
                    top: 0;
                }
                .k-left {
                    bottom: 0;
                }
                i:before {
                    font-size: inherit;
                }
                ${sizes.map(s => {
                    if (s !== 'default') {
                        return css `
                            &.k-${s} {
                                .k-input {
                                    padding-right: ${spinner[s + 'VerticalPaddingRight']};
                                    width: ${spinner[s + 'VerticalPaddingRight']};
                                }
                            }
                        `;
                    } else {
                        return css `
                            .k-input {
                                padding-right: ${spinner[s + 'VerticalPaddingRight']};
                                width: ${spinner[s + 'VerticalPaddingRight']};
                            }
                        `;
                    }
                })}
            }
            ${sizes.map(s => {
                if (s !== 'default') {
                    return css `
                        &.k-${s} {
                            .k-btn {
                                .k-icon {
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
        }
    `;
}
