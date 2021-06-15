import {css, cx} from '@emotion/css';
import {theme, ThemeValue} from '../../styles/theme';
import {deepDefaults, palette, getLeft}  from '../../styles/utils';
import '../../styles/global';

const {checkbox} = deepDefaults(theme, {
    checkbox: {
        width: '14px',
        get borderColor() { return theme.color.darkBorder },
        get borderRadius() { return theme.borderRadius },
        get transition() { return theme.transition },
        bgColor: '#fff',
        
        // text
        text: {
            marginLeft: '8px',
        },

        // checked
        checked: {
            get borderColor() { return theme.color.primary },
            get bgColor() { return checkbox.checked.borderColor },
        },

        inner: {
            width: '5px',
            height: '10px',
            top: '-1px',
            left: '4px',
            border: '1px solid #fff',
        },

        // disabled
        disabled: {
            get color() { return theme.color.disabled },
            get borderColor() { return theme.color.disabledBorder },
            get bgColor() { return theme.color.disabledBg }, 
            get innerColor() { return theme.color.disabledBorder }, 
        },

        // indeterminate
        indeterminate: {
            innerLeft: '3px'
        }
    },
});

export {checkbox};

export default function makeStyles() {
    return css`
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        vertical-align: middle;
        .k-checkbox-wrapper {
            display: inline-block;
            width: ${checkbox.width};
            height: ${checkbox.width}; 
            vertical-align: middle;
            border: 1px solid ${checkbox.borderColor}; 
            border-radius: ${checkbox.borderRadius};
            position: relative;
            transition: all ${checkbox.transition};
            background: ${checkbox.bgColor};
            flex: 0 0 auto;

            // inner
            &:before {
                content: "";
                display: block;
                position: absolute;
                width: ${checkbox.inner.width};
                height: ${checkbox.inner.height}; 
                top: ${checkbox.inner.top};  
                left: ${checkbox.inner.left};  
                border: ${checkbox.inner.border}; 
                border-top: 0;
                border-left: 0;
                transform: rotate(45deg) scale(0);
                transition: all ${checkbox.transition};
            }
        }

        input {
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            position: absolute;
            left: 0;
            top: 0;
            margin: 0;
        }
        .k-checkbox-text {
            vertical-align: middle;
            margin-left: ${checkbox.text.marginLeft};
            display: inline-block;
            flex: 0 1 auto;
        }

        // indeterminate
        // checked
        &.k-checked,
        &.k-indeterminate {
            .k-checkbox-wrapper {
                border-color: ${checkbox.checked.borderColor};
                background: ${checkbox.checked.bgColor};
            }
        }
        &.k-indeterminate {
            .k-checkbox-wrapper {
                &:before {
                    transform: rotate(90deg) scale(1);
                    border-bottom: 0;
                    left: ${checkbox.indeterminate.innerLeft};
                }
            }
        }
        &.k-checked {
            .k-checkbox-wrapper {
                &:before {
                    transform: rotate(45deg) scale(1);
                }
            }
        }
            
        // focus
        &:focus {
            outline: none;
            .k-checkbox-wrapper {
                border-color: ${checkbox.checked.borderColor};
            }
        }
      
    
        // disabled
        &.k-disabled {
            color: ${checkbox.disabled.color};
            cursor: not-allowed;
            .k-checkbox-wrapper {
                border-color: ${checkbox.disabled.borderColor};
                background: ${checkbox.disabled.bgColor};
                // checked
                &:before {
                    border-color: ${checkbox.disabled.innerColor};
                }
            }
        }
    `;
}