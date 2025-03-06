import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette, getLeft}  from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    width: '16px',
    get borderColor() { return theme.color.border },
    get borderRadius() { return theme.borderRadius },
    get transition() { return theme.transition.small },
    get hoverBorder() {
        return `1px solid ${theme.color.primary}`
    },
    bgColor: '#fff',
    marginRight: '24px',
    // text
    text: {
        gap: '8px',
    },

    // checked
    checked: {
        get borderColor() { return theme.color.primary },
        get bgColor() { return checkbox.checked.borderColor },
    },

    
    inner: {
        width: '6px',
        height: '10px',
        top: '0px',
        left: '4px',
        border: '2px solid #fff',
    },

    // disabled
    disabled: {
        get color() { return theme.color.disabled },
        get borderColor() { return theme.color.disabledBorder },
        get bgColor() { return theme.color.disabledBg }, 
        innerColor: '#fff',
        checked:{
            get borderColor() {
                return palette(theme.color.primary, -3)
            },
            get bgColor() {
                return palette(theme.color.primary, -3)
            },
        } 
    },
};

let checkbox: typeof defaults;
setDefault(() => {
    checkbox = deepDefaults(theme, {checkbox: defaults}).checkbox;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        margin-right: ${checkbox.marginRight};
        vertical-align: middle;
        .${k}-checkbox-wrapper {
            width: ${checkbox.width};
            height: ${checkbox.width}; 
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
        &:hover {
            .${k}-checkbox-wrapper {
                border: ${checkbox.hoverBorder}
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
        .${k}-checkbox-text {
            margin-left: ${checkbox.text.gap};
            flex: 0 1 auto;
        }

        // indeterminate
        // checked
        &.${k}-checked,
        &.${k}-indeterminate {
            .${k}-checkbox-wrapper {
                border-color: ${checkbox.checked.borderColor};
                background: ${checkbox.checked.bgColor};
            }
        }
        &.${k}-indeterminate {
            .${k}-checkbox-wrapper {
                &:before {
                    transform: rotate(90deg) scale(1);
                    border-bottom: 0;
                }
            }
      
        }
        &.${k}-checked {
            .${k}-checkbox-wrapper {
                &:before {
                    transform: rotate(45deg) scale(1);
                }
            }
        
        }
            
        // focus
        &:focus {
            outline: none;
            .${k}-checkbox-wrapper {
                border-color: ${checkbox.checked.borderColor};
            }
        }
      
    
        // disabled
        &.${k}-disabled {
            color: ${checkbox.disabled.color};
            cursor: not-allowed;
            .${k}-checkbox-wrapper {
                border-color: ${checkbox.disabled.borderColor};
                background: ${checkbox.disabled.bgColor};
                // checked
                &:before {
                    border-color: ${checkbox.disabled.innerColor};
                }
            }
            input {
                cursor: not-allowed;
            }
            &.${k}-checked,
            &.${k}-indeterminate {
              .${k}-checkbox-wrapper {
                  border-color: ${checkbox.disabled.checked.borderColor};
                  background: ${checkbox.disabled.checked.bgColor};
              }
            }
          
        }
    `;
});
