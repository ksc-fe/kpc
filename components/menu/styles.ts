import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, getLeft, palette} from '../../styles/utils';
import type {MenuProps} from './menu';
import '../../styles/global';
import { cache } from '../utils';

const sizes = ['large', 'small'] as const;

const defaults = {
    get transition() { return theme.transition.large },
    width: '200px',
    bgColor: '#1c1c20',
    fontSize: '14px',
    get borderRadius() { return theme.borderRadius },
    get border() { return `1px solid ${theme.color.darkBorder}` },

    item: {
        height: '40px',
        padding: '0 12px',
        bodyPadding: '0 4px',
        color: '#aeaeb9',
        hoverColor: '#fff',
        disabledColor: '#53535a',
        get activeBgColor() { return theme.color.primary },
        get hoverBgColor() { return palette(theme.color.primary, 4) },
        dotFontSize: '12px',
        subTitleColor: '#858592',
    },

    title: {
        height: '40px',
        padding: '0 12px',
        color: '#fff',
    },

    icon: {
        width: '16px',
        gap: '11px'
    },

    header: {
        height: '52px',
        fontSize: '14px',
        color: '#fff',
        borderBottom: '1px solid #1b1b1d',
    },

    light: {
        bgColor: '#fff',
        get border() { return `1px solid ${theme.color.disabledBg}` },
        item: {
            get color() { return theme.color.text }, 
            get hoverColor() { return theme.color.primary }, 
            get hoverBg() { return theme.color.hoverBg },
            disabledColor: '#b6bec2',
            subTitleColor: '#5e686f',
        },
        title: {
            get color() { return theme.color.title }, 
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
            padding: 0 16px;
            color: ${menu.header.color};
            font-size: ${menu.header.fontSize};
            font-weight: bold;
        }

        .${k}-menu-body {
            padding: ${menu.item.bodyPadding};
            max-height: calc(100% - ${menu.header.height});
            overflow-y: auto;
            overflow-x: hidden;
            scrollbar-width: none;
        }

        // menu title
        .${k}-menu-title {
            height: ${menu.title.height};
            border-top: ${menu.border};
            margin-top: 4px;
            .${k}-menu-name {
                transition: all ${menu.transition};
                height: ${menu.title.height};
                color: ${menu.title.color};
                font-weight: bold;
            }
        }

        // menu arrow
        .${k}-menu-arrow-box {
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
            left: calc(${menu.width} - 2px);
            transition: left ${menu.transition};
            transform: translateY(-50%);
            border: ${menu.border};
            border-left: none;
            .${k}-icon {
                margin-right: 0;
            }
            &:hover {
                .${k}-menu-arrow:before {
                    color: ${menu.item.activeBgColor};
                }
            }
        }

        // theme light
        &.${k}-light {
            border-right: 1px solid ${theme.color.disabledBg};
            background: ${menu.light.bgColor};
            .${k}-menu-header {
                color: ${menu.light.title.color};
            }
            .${k}-menu-item {
                .${k}-menu-item-title {
                    color: ${menu.light.item.color};
                    &:hover {
                        background: ${menu.light.item.hoverBg};
                    }
                }
                .${k}-menu-item-arrow {
                    color: ${menu.light.item.color};
                }
                &.${k}-highlighted {
                    > .${k}-menu-item-title {
                        color: ${menu.light.item.hoverColor};
                    }
                }
                &.${k}-disabled {
                    > .${k}-menu-item-title {
                        color: ${menu.light.item.disabledColor} !important;
                    }
                }
            }

            .${k}-menu-title {
                border-top: ${menu.light.border};
                .${k}-menu-name {
                    color: ${menu.light.title.color};
                }
            }
            
            .${k}-menu-arrow-box {
                background: ${menu.light.bgColor};
                border: ${menu.light.border};
                border-left: none;
                &:hover {
                    .${k}-menu-arrow:before {
                        color: ${menu.light.active.color};
                    }
                }
            }
            .${k}-menu:not(.${k}-dropdown-menu) {
                background: ${menu.light.bgColor};
            }

            &.${k}-horizontal {
                .${k}-menu-header {
                    border-right: ${menu.light.border};
                }
                .${k}-menu-body > .${k}-menu-title {
                    border-right: ${menu.light.border};
                }
            }
            // active
            .${k}-menu-item.${k}-active {
                > .${k}-menu-item-title {
                    color: ${menu.light.active.color } !important;
                    background: ${menu.light.active.bgColor};
                }
            }
            .${k}-sub-menu {
                .${k}-menu-item-title, .${k}-menu-item-arrow {
                    color: ${menu.light.item.subTitleColor} !important;
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
                    .${k}-menu-arrow-box {
                        left: calc(${styles.width} - 2px); 
                    }
                }
            `;
        })}

        // collapse
        &.${k}-collapsed {
            width: calc(${menu.icon.width} + (${getLeft(menu.item.padding)} + ${getLeft(menu.item.bodyPadding)}) * 2);
            .${k}-icon {
                margin-right: 0;
            }
            .${k}-menu-item-arrow {
                display: none;
            }
        }

        // show collapse arrow
        &.${k}-collapsed-arrow {
            width: 0px;
            border-left: none;
            .${k}-menu-header {
                padding: 0;
            }
            .${k}-menu-body {
                overflow: hidden;
                padding: 0;
            }
            .${k}-menu-arrow-box {
                left: 0;
                .${k}-menu-arrow:before {
                    transform: rotateY(180deg);
                }
            }
        }

        // dropdown
        &.${k}-dropdown-menu {
            width: fit-content;
            min-width: ${menu.dropdown.minWidth};
            position: absolute;
            .${k}-menu-item-arrow {
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
                    border-right: ${menu.border};
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

export const makeItemStyles = cache(function makeItemStyles(k: string) {
    const item = menu.item;
    return css`
        .${k}-menu-item-title {
            transition: all ${menu.transition};
            cursor: pointer;
            height: ${item.height};
            &:hover {
                padding: ${item.padding};
                border-radius: ${menu.borderRadius};
                background: #2a2a30;
            }
            & > .${k}-menu-item-arrow:before {
                font-size: small;
            }
        }
        .${k}-menu-name {
            flex: 1;
            display: flex;
            align-items: center;
            min-width: 0;
            .${k}-icon {
                color: inherit;
                display: inline-block;
            }
        }
        .${k}-menu-item-arrow {
            color: ${item.color};
            margin: 0 0 0 ${menu.icon.gap};
            transition: transform ${menu.transition};
        }

        // expanded
        &.${k}-expanded {
            > .${k}-menu-item-title {
                color: ${item.hoverColor};
                .${k}-menu-item-arrow {
                    transform: rotate(180deg);
                }
            }
        }

        // highlighted
        &.${k}-highlighted {
            > .${k}-menu-item-title {
                color: ${menu.light.item.hoverColor};
            }
        }

        // active
        &.${k}-active {
            > .${k}-menu-item-title {
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

export const makeNestedMenuStyles = cache(function makeNestedMenuStyles(k: string, hasIcon: boolean, parentPaddingLeft: string = getLeft(menu.item.padding), size: MenuProps['size']) {
    const fontSize = `${size === 'small' ? menu.small.fontSize : menu.fontSize}`;
    const paddingLeft = `${parentPaddingLeft}${hasIcon ? ' + ' + menu.icon.width + ' + ' + menu.icon.gap : ' + ' + fontSize}`;
    return [
        css`
            &.${k}-menu {
                position: relative;
                width: auto;
                background: ${menu.bgColor};
                border: none;
                .${k}-menu-body {
                    padding: 0;
                    max-height: 100%;
                    .${k}-menu-item-title {
                        padding-left: calc(${paddingLeft});
                    }
                    .${k}-menu-item-title, .${k}-menu-item-arrow {
                        color: ${menu.item.subTitleColor};
                    }
                }
            }
        `,
        paddingLeft,
    ]
});
