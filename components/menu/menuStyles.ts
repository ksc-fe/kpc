import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, getLeft, getRight} from '../../styles/utils';
import '../../styles/global';
import {menuItem} from './itemStyles';

const {menu} = deepDefaults(theme, {
    menu: {
        width: '200px',
        bgColor: '#262626',
        fontSize: '14px',
        get borderRadius() { return theme.borderRadius },
        get zIndex() { return theme.midZIndex },

        header: {
            height: '50px',
            fontSize: '14px',
            borderBottom: '1px solid #1b1b1d',
            get padding() { return menuItem.padding },
        },

        // sub-menu
        sub: {
            bgColor: '#000',
        },

        light: {
            bgColor: '#e5e5e9',
            subBgColor:  '#d5d5d9',
            headerBorderBottom: '1px solid #d5d5d9'
        },

        // dropdown
        dropdown: {
            minWidth: '150px',
        },

        large: {
            width: '250px',
            get fontSize() { return menu.fontSize },
        },

        small: {
            width: '180px',
            get fontSize() { return theme.small.fontSize },
        }

    } 
});

export {menu};

const sizes = ['large', 'small'] as const;

export default function makeStyles() {
    return css`
        width: ${menu.width};
        transition: width ${theme.transition};
        font-size: ${menu.fontSize};

        // nested menu
        .k-menu {
            width: auto;
            background: ${menu.sub.bgColor};
            .k-menu-title {
                padding-left: ${menuItem.paddingLeft};
            }
            .k-menu {
                .k-menu-title {
                    padding-left: calc(${menuItem.paddingLeft} + ${menuItem.icon.left} * 2);
                }
            }
        }

        .k-icon {
            display: inline-block;
            width: ${menuItem.icon.width};
            text-align: center;
            margin-left: calc(-1 * (${menuItem.icon.width} - ${menuItem.paddingLeft} + ${getLeft(menuItem.padding)}));
            vertical-align: middle;
        }
            
        // header
        .k-menu-header {
            height: ${menu.header.height};
            line-height: ${menu.header.height};
            font-size: ${menu.header.fontSize};
            font-weight: bold;
            padding: ${menu.header.padding};
            border-bottom: ${menu.header.borderBottom}; 
            position: relative;
            color: ${menuItem.color};
            overflow: hidden;
            .k-icon {
                line-height: ${menu.header.height};
            }
        }

        &.k-dark {
            background: ${menu.bgColor};
        }
        
        // light theme
        &.k-light {
            background: ${menu.light.bgColor};
            .k-menu-header {
                color: ${menuItem.light.color}; 
                border-bottom: ${menu.light.headerBorderBottom};
            }
            .k-menu-item {
                .k-menu-title {
                    color: ${menuItem.light.color}; 
                    &:hover {
                        color: ${menuItem.light.hoverColor};
                    }
                }
                &.k-highlighted {
                    > .k-menu-title {
                        color: ${menuItem.light.hoverColor};
                    }
                }
                // disabled
                &.k-disabled {
                    > .k-menu-title {
                        color: ${menuItem.light.disabledColor} !important;
                    }
                }
            }
            .k-menu {
                background: ${menu.light.subBgColor };
            }
        }

        // sizes
        ${sizes.map(size => {
            const styles = menu[size];
            const sizeClassName = css`
                width: ${styles.width};
                font-size: ${styles.fontSize};
                .k-menu {
                    font-size: ${styles.fontSize}; 
                }
            `;

            return css`
                &.k-${size} {
                    ${sizeClassName};
                }
            `
        })}


        // collapse
        .k-menu-item .k-menu-title span,
        .k-menu-header :not(.k-icon) {
            transition: opacity ${theme.transition};
        }
        &.k-collapsed {
            width: calc(${menuItem.icon.left} * 2 + ${menuItem.icon.width});
            .k-menu-item
                .k-menu-title {
                    span,
                    .k-menu-arrow {
                        opacity: 0;
                    }
                }
            .k-menu-header 
                :not(.k-icon):not(intact-content) {
                    opacity: 0;
                }
        }
     
        &.k-horizontal.k-collapsed {
            .k-menu-item
                k-menu-title {
                    span,
                    .k-menu-arrow {
                        display: none;
                    }
                }
            .k-menu-header 
                :not(.k-icon) {
                    display: none;
                }
        }

        // horizontal
        &.k-horizontal {
            width: auto;
            .k-menu-header {
                display: inline-block;
                vertical-align: middle;
                border-bottom: none;
                border-right: ${menu.header.borderBottom};
                height: ${menuItem.height};
                line-height: ${menuItem.height};
                .k-icon {
                    line-height: ${menuItem.height};
                }
            }
            .k-menu-item {
                display: inline-block;
                vertical-align: middle;
            }
            &.k-collapsed {
                width: auto;
            }
            // light
            &.k-light {
                .k-menu-header {
                    border-right: ${menu.light.headerBorderBottom};
                }
            }
        }

        // dropdown menu
        &.k-dropdown-menu {
            width: auto;
            min-width: ${menu.dropdown.minWidth};
            .k-menu-item {
                .k-menu-title {
                    padding: 0 ${getRight(menuItem.padding)};
                    .k-menu-arrow {
                        transform: rotate(-90deg);
                    }
                }
            }
        }
    `
}