import {css} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {radio} = deepDefaults(theme, {
    radio: {
        radioWidth: '14rem',
        get radioBorderColor() {
            return theme.color.darkBorder;
        },
        radioBgColor: '#fff',
        radioTextMarginLeft: '8em',
        radioInnerWidth: '8rem',
        get radioCheckedColor() {
            return theme.color.primary;
        },
        get radioDisabledColor() {
            return theme.color.disabled;
        },
        get radioDisabledBorderColor() {
            return theme.color.disabledBorder;
        },
        get radioDisabledBgColor() {
            return theme.color.disabledBg;
        },
        get radioDisabledInnerColor() {
            return theme.color.disabled;
        },
        get transition() {
            return theme.transition;
        }
    }
});

export default function makeStyles() {
    return css`
    .k-radio {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        vertical-align: middle;
        .k-wrapper {
            display: inline-block;
            width: ${radio.radioWidth};
            height: ${radio.radioWidth};
            vertical-align: middle;
            border: 1px solid ${radio.radioBorderColor};
            border-radius: 50%;
            transition: all ${radio.transition} ;
            position: relative;
            background: ${radio.radioBgColor};
            flex: 0 0 auto;
            // inner
            &:before {
                content: "";
                display: block;
                position: absolute;
                width: ${radio.radioInnerWidth};
                height: ${radio.radioInnerWidth};
                top: 50%;
                left: 50%;
                margin-left: calc(${radio.radioInnerWidth} / 2);
                margin-top: calc(${radio.radioInnerWidth} / 2);
                border-radius: 50%;
                background-color: ${radio.radioCheckedColor};
                transform: scale(0);
                transition: all ${radio.transition};
            }    
        }
        input {
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            position: absolute;
        }    
        .k-text {
            vertical-align: middle;
            display: inline-block;
            margin-left: ${radio.radioTextMarginLeft};
            flex: 0 1 auto;
        }
        // checked
        &.k-checked {
            .k-wrapper {
                border-color: ${radio.radioCheckedColor};
                &:before {
                    transform: scale(1);
                }    
            }        
        }            
        // focus
        &:focus {
            outline: none;
            .k-wrapper {
                border-color: ${radio.radioCheckedColor};
            }    
        }    
        // disabled
        &.k-disabled {
            color: ${radio.radioDisabledColor};
            cursor: not-allowed;
            .k-wrapper {
                border-color: ${radio.radioDisabledBorderColor};
                background: ${radio.radioDisabledBgColor};
                &:before {
                    background: ${radio.radioDisabledInnerColor};
                }    
            }        
        }            
    }`;
}
