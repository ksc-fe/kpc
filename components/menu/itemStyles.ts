import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {menuItem} = deepDefaults(theme, {
    menuItem: {
        height: '40px',
        padding: '0 21px',
        paddingLeft: '46px',
        color: '#b2b2b2',
        hoverColor: '#fff',
        get disabledColor() { return theme.color.text },
        
        icon: {
            width: '36px',
            minWidth: '14px',
            left: '10px',
            gap: '11px'
        },

        arrow: {
            gap: '8px'
        },

        dot: {
            fontSize: '12px'
        },

        light: {
            get color() { return theme.color.text }, 
            get hoverColor() { return theme.color.primary }, 
            disabledColor: '#999'
        }
    } 
});

export {menuItem};

export default function makeStyles() {
    return css`
        .k-menu-title {
            padding: ${menuItem.padding};
            cursor: pointer;
            height: ${menuItem.height};
            line-height: ${menuItem.height};
            color: ${menuItem.color};
            white-space: nowrap;
            position: relative;
            overflow: hidden;
            transition: all ${theme.transition};
            &:hover {
                color: ${menuItem.hoverColor};
            }
            .k-menu-arrow {
                float: right;
                transition: all ${theme.transition};
                margin-left: ${menuItem.arrow.gap};
                &:before {
                    vertical-align: top;
                }
            }
            .k-icon {
                line-height: ${menuItem.height};
            }
        }

        // expanded
        &.k-expanded,
        &.k-show {
            > .k-menu-title {
                color: ${menuItem.hoverColor};
                .k-menu-arrow {
                    transform: rotate(180deg);
                }
            } 
        }
    
        // highlighted
        &.k-highlighted {
            > .k-menu-title {
                color: ${menuItem.hoverColor};
            }
        }
        
        // active
        &.k-active {
            > .k-menu-title {
                color: ${menuItem.hoverColor} !important;
                background: ${theme.color.primary};
            }
        }
    
        // disabled
        &.k-disabled {
            > .k-menu-title {
                color: ${menuItem.disabledColor} !important;
                cursor: not-allowed;
            }
        }
    
        // dot
        .k-menu-dot {
            display: inline-block;
            vertical-align: top;
            &:before {
                font-size: ${menuItem.dot.fontSize};
                vertical-align: top;
                transform: scale(.4);
            }
        }
    `
}