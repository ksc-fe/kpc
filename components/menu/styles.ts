import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, getLeft, getRight} from '../../styles/utils';
import '../../styles/global';

const sizes = ['large', 'small'] as const;

const {menu} = deepDefaults(theme, {
    menu: {
        width: '200px',
        bgColor: '#262626',
        fontSize: '14px',
        get borderRadius() { return theme.borderRadius },

        item: {
            height: '40px',
            padding: '0 21px',
            color: '#b2b2b2',
            hoverColor: '#fff',
            get disabledColor() { return theme.color.text },
            get activeBgColor() { return theme.color.primary },
            dotFontSize: '12px'
        },

        icon: {
            width: '16px',
            gap: '11px'
        },

        header: {
            height: '50px',
            fontSize: '14px',
            borderBottom: '1px solid #1b1b1d',
        },

        // sub-menu
        subBgColor: '#000',

        light: {
            bgColor: '#e5e5e9',
            subBgColor:  '#d5d5d9',
            headerBorderBottom: '1px solid #d5d5d9',
            item: {
                get color() { return theme.color.text }, 
                get hoverColor() { return theme.color.primary }, 
                disabledColor: '#999'
            },
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

export function makeMenuStyles() {
    const {light} = menu;
    // we must increase the priority by adding &.k-menu
    // to override the css of dropdownMenu
    return css`
        &.k-menu {
            width: ${menu.width};
            transition: width ${theme.transition};
            background: ${menu.bgColor};
            font-size: ${menu.fontSize};
        }

        // nested menu
        &:not(.k-dropdown-menu) &:not(.k-dropdown-menu) {
            width: auto;
            background: ${menu.subBgColor};
            .k-menu-title {
                padding-left: calc(${getLeft(menu.item.padding)} + ${menu.icon.width} + ${menu.icon.gap});
            }
        }
        &:not(.k-dropdown-menu) &:not(.k-dropdown-menu) &:not(.k-dropdown-menu) {
            .k-menu-title {
                padding-left: calc(${getLeft(menu.item.padding)} + ${menu.icon.width} * 2 + ${menu.icon.gap});
            }
        }

        .k-icon {
            width: ${menu.icon.width};
            margin-right: ${menu.icon.gap};
            text-align: center;
            flex-shrink: 0;
        }


        // header
        .k-menu-header {
            height: ${menu.header.height};
            font-size: ${menu.header.fontSize};
            font-weight: bold;
            border-bottom: ${menu.header.borderBottom};
        }

        // light theme
        &.k-light {
            background: ${light.bgColor};
            .k-menu-header {
                color: ${light.item.color};
                border-bottom: ${light.headerBorderBottom};
            }
            .k-menu-item {
                .k-menu-title {
                    color: ${light.item.color};
                    &:hover {
                        color: ${light.item.hoverColor};
                    }
                }
                &.k-highlighted {
                    > .k-menu-title {
                        color: ${light.item.hoverColor};
                    }
                }
                &.k-disabled {
                    > .k-menu-title {
                        color: ${light.item.disabledColor} !important;
                    }
                }
            }
            .k-menu:not(.k-dropdown-menu) {
                background: ${light.subBgColor};
            }
        }

        // sizes
        ${sizes.map(size => {
            const styles = menu[size];

            return css`
                &.k-${size} {
                    width: ${styles.width};
                    font-size: ${styles.fontSize};
                    .k-menu {
                        font-size: ${styles.fontSize}; 
                    }
                }
            `;
        })}

        // collapse
        &.k-collapsed {
            width: calc(${menu.icon.width} + ${getLeft(menu.item.padding)} * 2);
            .k-icon {
                margin-right: 0;
            }
            .k-menu-arrow {
                display: none;
            }
        }

        // dropdown
        &.k-dropdown-menu {
            width: auto;
            min-width: ${menu.dropdown.minWidth};
            .k-menu-arrow {
                transform: rotate(-90deg)
            }
        }

        // horizontal
        &.k-horizontal {
            width: auto;
            display: flex;
            align-items: center;
            .k-menu-header {
                border-bottom: none;
                border-right: ${menu.header.borderBottom};
            }
            &.k-light {
                .k-menu-header {
                    border-right: ${light.headerBorderBottom};
                }
            }
        }
    `
}

export function makeTitleStyles() {
    const item = menu.item;
    return css`
        display: flex;
        align-items: center;
        padding: ${item.padding};
        color: ${item.color};
        white-space: nowrap;
        overflow: hidden;
        flex-wrap: nowrap;
    `;
}

export function makeItemStyles() {
    const item = menu.item;
    return css`
        .k-menu-title {
            cursor: pointer;
            height: ${item.height};
            transition: all ${theme.transition};
            &:hover {
                color: ${item.hoverColor};
            }
        }
        .k-menu-name {
            flex: 1;
            display: flex;
            align-items: center;
        }
        .k-menu-arrow {
            transition: transform ${theme.transition};
            margin-left: ${menu.icon.gap};
        }

        // expanded
        &.k-expanded {
            > .k-menu-title {
                color: ${item.hoverColor};
                .k-menu-arrow {
                    transform: rotate(180deg);
                }
            }
        }

        // highlighted
        &.k-highlighted {
            > .k-menu-title {
                color: ${item.hoverColor};
            }
        }

        // active
        &.k-active {
            > .k-menu-title {
                color: ${item.hoverColor} !important;
                background: ${item.activeBgColor};
            }
        }

        // disabled
        &.k-disabled {
            > .k-menu-title {
                color: ${item.disabledColor} !important;
                cursor: not-allowed;
            }
        }

        // dot
        .k-menu-dot {
            font-size: ${item.dotFontSize};
            transform: scale(.4);
        }
    `
}
