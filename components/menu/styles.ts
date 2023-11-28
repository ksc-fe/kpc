import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, getLeft, palette} from '../../styles/utils';
import '../../styles/global';

const sizes = ['large', 'small'] as const;

const defaults = {
    get transition() { return theme.transition.large },
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
        border: '1px solid #d5d5d9',
        item: {
            get color() { return theme.color.text }, 
            get hoverColor() { return theme.color.primary }, 
            disabledColor: '#999'
        },
    },

    white: {
        bgColor: '#fff',
        subBgColor:  '#fafafa',
        border: '1px solid #eee',
        item: {
            get color() { return theme.color.text }, 
            get hoverColor() { return theme.color.primary }, 
            get disabledColor() { return theme.color.disabled },
        },
        active: {
            get color() { return theme.color.primary },
            get bgColor() { return palette(theme.color.primary, -4) },
        }
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
};

let menu: typeof defaults;
setDefault(() => {
    menu = deepDefaults(theme, {menu: defaults}).menu;
});

export {menu};

export function makeMenuStyles(k: string) {
    // we must increase the priority by adding &.${k}-menu
    // to override the css of dropdownMenu
    return css`
        &.${k}-menu {
            width: ${menu.width};
            transition: width ${menu.transition};
            background: ${menu.bgColor};
            font-size: ${menu.fontSize};
        }

        .${k}-icon {
            width: ${menu.icon.width};
            margin-right: ${menu.icon.gap};
            text-align: center;
            flex-shrink: 0;
        }


        // header
        .${k}-menu-header {
            height: ${menu.header.height};
            font-size: ${menu.header.fontSize};
            font-weight: bold;
            border-bottom: ${menu.header.borderBottom};
        }

        // theme
        ${(['light', 'white'] as const).map(theme => {
            const styles = menu[theme];
            return css`
                &.${k}-${theme} {
                    background: ${styles.bgColor};
                    .${k}-menu-header {
                        color: ${styles.item.color};
                        border-bottom: ${styles.border};
                    }
                    .${k}-menu-item {
                        .${k}-menu-title {
                            color: ${styles.item.color};
                            &:hover {
                                color: ${styles.item.hoverColor};
                            }
                        }
                        &.${k}-highlighted {
                            > .${k}-menu-title {
                                color: ${styles.item.hoverColor};
                            }
                        }
                        &.${k}-disabled {
                            > .${k}-menu-title {
                                color: ${styles.item.disabledColor} !important;
                            }
                        }
                    }
                    .${k}-menu:not(.${k}-dropdown-menu) {
                        background: ${styles.subBgColor};
                    }

                    &.${k}-horizontal {
                        .${k}-menu-header {
                            border-right: ${styles.border};
                        }
                    }
                }
            `;
        })}

        &.${k}-white {
            // active
            .${k}-menu-item.${k}-active {
                > .${k}-menu-title {
                    color: ${menu.white.active.color } !important;
                    background: ${menu.white.active.bgColor};
                }
            }
        }

        // sizes
        ${sizes.map(size => {
            const styles = menu[size];

            return css`
                &.${k}-${size} {
                    width: ${styles.width};
                    font-size: ${styles.fontSize};
                    .${k}-menu {
                        font-size: ${styles.fontSize}; 
                    }
                }
            `;
        })}

        // collapse
        &.${k}-collapsed {
            width: calc(${menu.icon.width} + ${getLeft(menu.item.padding)} * 2);
            .${k}-icon {
                margin-right: 0;
            }
            .${k}-menu-arrow {
                display: none;
            }
        }

        // dropdown
        &.${k}-dropdown-menu {
            width: auto;
            min-width: ${menu.dropdown.minWidth};
            .${k}-menu-arrow {
                transform: rotate(-90deg)
            }
        }

        // horizontal
        &.${k}-horizontal {
            width: auto;
            display: flex;
            align-items: center;
            .${k}-menu-header {
                border-bottom: none;
                border-right: ${menu.header.borderBottom};
            }
        }
    `
}

export function makeTitleStyles(k: string) {
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

export function makeItemStyles(k: string) {
    const item = menu.item;
    return css`
        .${k}-menu-title {
            cursor: pointer;
            height: ${menu.item.height};
            transition: color ${menu.transition};
            &:hover {
                color: ${menu.item.hoverColor};
            }
        }
        .${k}-menu-name {
            flex: 1;
            display: flex;
            align-items: center;
            min-width: 0;
            span {
                overflow: hidden;
                text-overflow: ellipsis;
                min-width: 0;
            }
        }
        .${k}-menu-arrow {
            transition: transform ${menu.transition};
            margin: 0 0 0 ${menu.icon.gap};
        }

        // expanded
        &.${k}-expanded {
            > .${k}-menu-title {
                color: ${menu.item.hoverColor};
                .${k}-menu-arrow {
                    transform: rotateX(180deg);
                }
            }
        }

        // highlighted
        &.${k}-highlighted {
            > .${k}-menu-title {
                color: ${menu.item.hoverColor};
            }
        }

        // active
        &.${k}-active {
            > .${k}-menu-title {
                color: ${menu.item.hoverColor} !important;
                background: ${menu.item.activeBgColor};
            }
        }

        // disabled
        &.${k}-disabled {
            > .${k}-menu-title {
                color: ${menu.item.disabledColor} !important;
                cursor: not-allowed;
            }
        }

        // dot
        .${k}-menu-dot {
            font-size: ${menu.item.dotFontSize};
            transform: scale(.4);
        }
    `
}

export function makeNestedMenuStyles(k: string, hasIcon: boolean, parentPaddingLeft: string = getLeft(menu.item.padding)) {
    const paddingLeft = `${parentPaddingLeft}${hasIcon ? ' + ' + menu.icon.width : ''} + ${menu.icon.gap}`;
    return [
        css`
            &.${k}-menu {
                width: auto;
                background: ${menu.subBgColor};
                .${k}-menu-title {
                    padding-left: calc(${paddingLeft});
                }
            }
        `,
        paddingLeft,
    ]
}
