import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, getLeft, palette} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const sizes = ['large', 'small'] as const;

const defaults = {
    get transition() { return theme.transition.large },
    width: '200px',
    bgColor: '#1c1c20',
    fontSize: '14px',
    get borderRadius() { return theme.borderRadius },

    item: {
        height: '40px',
        padding: '0 21px',
        hoverPadding: '0 17px',
        hoverMargin: '0 4px',
        color: '#b2b2b2',
        hoverColor: '#fff',
        get disabledColor() { return theme.color.text },
        get activeBgColor() { return theme.color.primary },
        get hoverBgColor() { return theme.color.hoverBg },
        dotFontSize: '12px'
    },

    title: {
        height: '40px',
        padding: '0 17px',
        color: '#fff',
        hoverColor: '#2a2a30',
        borderTop: '1px solid #2f2f36',
        margin:'4px 4px 0 4px'
    },

    icon: {
        width: '16px',
        gap: '11px'
    },

    header: {
        height: '50px',
        fontSize: '14px',
        color: '#fff',
        borderBottom: '1px solid #1b1b1d',
    },

    light: {
        bgColor: '#fff',
        border: '1px solid #eee',
        item: {
            get color() { return theme.color.text }, 
            get hoverColor() { return theme.color.primary }, 
            get disabledColor() { return theme.color.disabled },
        },
        title: {
            get color() { return theme.color.text }, 
            borderTop: '1px solid #f0f2f4',
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
    makeMenuStyles?.clearCache();
    makeItemStyles?.clearCache();
    makeTitleStyles?.clearCache();
    makeNestedMenuStyles?.clearCache();
});

export {menu};

export const makeMenuStyles = cache(function makeMenuStyles(k: string) {
    // we must increase the priority by adding &.${k}-menu
    // to override the css of dropdownMenu
    return css`
        &.${k}-menu {
            width: ${menu.width};
            transition: width ${menu.transition};
            background: ${menu.bgColor};
            font-size: ${menu.fontSize};
            position: relative;
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
            color: ${menu.header.color};
            font-size: ${menu.header.fontSize};
            font-weight: bold;
        }

        // menu title
        .${k}-menu-title {
            height: ${menu.title.height};
            padding: ${menu.title.padding};
            margin: ${menu.title.margin};
            color: ${menu.title.color};
            font-weight: bold;
            border-top: ${menu.title.borderTop};
        }

        // theme
        ${(['light', 'white'] as const).map(theme => {
            const styles = menu.light;
            return css`
                &.${k}-${theme} {
                    background: ${styles.bgColor};
                    .${k}-menu-header {
                        color: ${styles.item.color};
                    }
                    .${k}-menu-item {
                        .${k}-menu-item-title {
                            color: ${styles.item.color};
                            &:hover {
                                background: #f3f5f6;
                            }
                        }
                        &.${k}-highlighted {
                            > .${k}-menu-item-title {
                                color: ${styles.item.hoverColor};
                            }
                        }
                        &.${k}-disabled {
                            > .${k}-menu-item-title {
                                color: ${styles.item.disabledColor} !important;
                            }
                        }
                    }
                    .${k}-menu-body {
                        .${k}-menu-title {
                            color: ${styles.title.color};
                            border-top: ${styles.title.borderTop};
                        }
                    }
                    
                    .${k}-menu-arrowbox {
                        background: ${styles.bgColor};
                    }
                    .${k}-menu:not(.${k}-dropdown-menu) {
                        background: ${styles.bgColor};
                    }

                    &.${k}-horizontal {
                        .${k}-menu-header {
                            border-right: ${styles.border};
                        }
                        .${k}-menu-body > .${k}-menu-title {
                            border-right: ${styles.title.borderTop};
                        }
                    }
                    // active
                    .${k}-menu-item.${k}-active {
                        > .${k}-menu-item-title {
                            color: ${menu.light.active.color } !important;
                            background: ${menu.light.active.bgColor};
                        }
                    }
                }
            `;
        })}

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
                    .${k}-menu-arrowbox {
                        left: ${styles.width}; 
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
            .${k}-menu-title {
                opacity: 0;
            }
        }

        // show collapse arrow
        &.${k}-collapsed-arrow {
            width: 0px;
            .${k}-menu-item, .${k}-menu-title {
                overflow: hidden;
            }
            .${k}-menu-arrowbox {
                left: 0;
                transition: left ${menu.transition};
                .${k}-menu-arrowhead:before {
                    transform: rotateY(180deg);
                }
            }
        }

        // dropdown
        &.${k}-dropdown-menu {
            width: fit-content;
            min-width: ${menu.dropdown.minWidth};
            .${k}-menu-arrow {
                transform: rotate(-90deg)
            }
        }

        // horizontal
        &.${k}-horizontal {
            width: auto;
            display: flex;
            .${k}-menu-body {
                display: flex;
                align-items: center;
                .${k}-menu-title {
                    border-top: none;
                    border-right: ${menu.title.borderTop};
                }
            }
        }
    `
});

export const makeTitleStyles = cache(function makeTitleStyles(k: string) {
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
});

export const makeArrowStyles = cache(function makeArrowStyles(k: string) {
    return css`
        &.${k}-menu-arrowbox {
            width: 14px;
            height: 60px;
            cursor: pointer;
            background: ${menu.bgColor};
            border-radius: 0 8px 8px 0;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 50%;
            left: ${menu.width};
            transition: left ${menu.transition};
            transform: translateY(-50%);
            .${k}-icon {
                margin-right: 0;
            }
        }
    `;
});

export const makeItemStyles = cache(function makeItemStyles(k: string) {
    const item = menu.item;
    return css`
        .${k}-menu-item-title {
            transition: all ${menu.transition};
            cursor: pointer;
            height: ${item.height};
            &:hover {
                margin: ${item.hoverMargin};
                padding: ${item.hoverPadding};
                border-radius: ${menu.borderRadius};
                background: #2a2a30;
            }
            & > .${k}-menu-arrow:before {
                font-size: small;
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
            .${k}-icon {
                color: inherit;
            }
        }
        .${k}-menu-arrow {
            margin: 0 0 0 ${menu.icon.gap};
        }

        // expanded
        &.${k}-expanded {
            > .${k}-menu-item-title {
                color: ${item.hoverColor};
                .${k}-menu-arrow {
                    transform: rotateX(180deg);
                }
            }
        }

        // highlighted
        &.${k}-highlighted {
            > .${k}-menu-item-title {
                color: ${item.hoverColor};
            }
        }

        // active
        &.${k}-active {
            > .${k}-menu-item-title {
                margin: ${item.hoverMargin};
                padding: ${item.hoverPadding};
                border-radius: ${menu.borderRadius};
                color: ${item.activeBgColor} !important;
                background: ${item.hoverBgColor};
            }
        }

        // disabled
        &.${k}-disabled {
            > .${k}-menu-item-title {
                color: ${item.disabledColor} !important;
                cursor: not-allowed;
            }
        }

        // dot
        .${k}-menu-dot {
            font-size: ${item.dotFontSize};
            transform: scale(.4);
        }
    `
});

export const makeNestedMenuStyles = cache(function makeNestedMenuStyles(k: string, hasIcon: boolean, parentPaddingLeft: string = getLeft(menu.item.padding)) {
    const paddingLeft = `${parentPaddingLeft}${hasIcon ? ' + ' + menu.icon.width + ' + ' + menu.icon.gap : ''}`;
    const marginLeft = getLeft(menu.item.hoverMargin);
    return [
        css`
            &.${k}-menu {
                position: relative;
                width: auto;
                background: ${menu.bgColor};
                .${k}-menu-item-title {
                    padding-left: calc(${paddingLeft});
                    &:hover {
                        padding-left: calc(${paddingLeft} - ${marginLeft});
                    }
                }
                .${k}-active {
                    > .${k}-menu-item-title {
                        padding-left: calc(${paddingLeft} - ${marginLeft});
                    }
                }
            }
        `,
        paddingLeft,
    ]
});
