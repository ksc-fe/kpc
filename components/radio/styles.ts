import {css} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {radio} = deepDefaults(theme, {
    radio: {
        width: '14px',
        get borderColor() {
            return theme.color.darkBorder;
        },
        bgColor: '#fff',
        textGap: '8px',
        innerWidth: '8px',
        get checkedColor() { return theme.color.primary },

        disabled: {
            get color() { return theme.color.disabled },
            get borderColor() { return theme.color.disabledBorder },
            get bgColor() { return theme.color.disabledBg },
            get innerColor() { return theme.color.disabledBorder },
        }
    }
});

export function makeStyles() {
    return css`
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        vertical-align: middle;
        .k-radio-wrapper {
            display: inline-block;
            width: ${radio.width};
            height: ${radio.width};
            vertical-align: middle;
            border: 1px solid ${radio.borderColor};
            border-radius: 50%;
            transition: all ${theme.transition} ;
            position: relative;
            background: ${radio.bgColor};
            flex: 0 0 auto;
            // inner
            &:before {
                content: "";
                display: block;
                position: absolute;
                width: ${radio.innerWidth};
                height: ${radio.innerWidth};
                top: 50%;
                left: 50%;
                margin-left: calc(-${radio.innerWidth} / 2);
                margin-top: calc(-${radio.innerWidth} / 2);
                border-radius: 50%;
                background-color: ${radio.checkedColor};
                transform: scale(0);
                transition: all ${theme.transition};
            }    
        }
        input {
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            position: absolute;
        }    
        .k-radio-text {
            vertical-align: middle;
            display: inline-block;
            margin-left: ${radio.textGap};
            flex: 0 1 auto;
        }

        // checked
        &.k-checked {
            .k-radio-wrapper {
                border-color: ${radio.checkedColor};
                &:before {
                    transform: scale(1);
                }    
            }        
        }            

        // focus
        &:focus {
            outline: none;
            .k-radio-wrapper {
                border-color: ${radio.checkedColor};
            }    
        }    

        // disabled
        &.k-disabled {
            color: ${radio.disabled.color};
            cursor: not-allowed;
            .k-radio-wrapper {
                border-color: ${radio.disabled.borderColor};
                background: ${radio.disabled.bgColor};
                &:before {
                    background: ${radio.disabled.innerColor};
                }    
            }
            input {
                cursor: not-allowed;
            }
        }            
    `;
}
