import {css} from '@emotion/css';
import {deepDefaults, darken, palette} from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import '../../styles/global';

const defaults = {
    width: '16px',
    get transition() { return theme.transition.small },
    get borderColor() { return theme.color.darkBorder; },
    get hoverBorderColor() { return theme.color.primary; },
    bgColor: '#fff',
    textGap: '8px',
    innerWidth: '8px',
    get checkedColor() { return theme.color.primary },

    disabled: {
        get color() { return theme.color.disabled },
        get borderColor() { return theme.color.disabledBorder },
        get bgColor() { return theme.color.disabledBg },
        checked: {
            get borderColor() {
                return palette(theme.color.primary, -2)
            },
            get bgColor() {
                return palette(theme.color.primary, -4)
            },
            get innerColor() {
                return palette(theme.color.primary, -3)
            }
        }
    }
};

let radio: typeof defaults;
setDefault(() => {
    radio = deepDefaults(theme, {radio: defaults}).radio;
});

export function makeStyles() {
    return css`
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        vertical-align: middle;
        .k-radio-wrapper {
            width: ${radio.width};
            height: ${radio.width};
            border: 1px solid ${radio.borderColor};
            border-radius: 50%;
            transition: all ${radio.transition} ;
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
                transition: all ${radio.transition};
            }
            &:hover {
                border: 1px solid ${radio.hoverBorderColor};
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
            }
            input {
                cursor: not-allowed;
            }
            &.k-checked {
                .k-radio-wrapper {
                    border-color: ${radio.disabled.checked.borderColor};
                    background: ${radio.disabled.checked.bgColor};
                    &:before {
                        background: ${radio.disabled.checked.innerColor};
                    }    
                }
            }
        }            
    `;
}
