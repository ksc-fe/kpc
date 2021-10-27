import {css, keyframes} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import {menu} from '../menu/menuStyles';
import {menuItem} from '../menu/itemStyles';

const sizes = ['small', 'large'] as const;

const layoutStyles = {
    headerInAsideBorderBottomColor: theme.color.border,
    header: {
        height: '64px',
        get background() { return menu.bgColor },
        fixed: {
            asideTopGap: '64px',
        }
    },
    aside: {
        get background() { return menu.bgColor },
        get transition() { return theme.transition },
        width: menu.width,
        fixed: {
            wrapperRightGap: '-20px',
            get layoutHeaderLeftGap() { return menu.width },
            get collapsedHeaderLeftGap() { return `calc(${menuItem.icon.left} * 2 + ${menuItem.icon.width})` }
        },
        layoutAsideWidth: {
            get small() { return menu.small.width },
            get large() { return menu.large.width }
        },
        get collapsedWidth() { return `calc(${menuItem.icon.left} * 2 + ${menuItem.icon.width})` },
    },
    footer: {
        padding: '24px 50px'
    },
    body: {
        margin: '0 20px'
    }
};

const {layout} = deepDefaults(theme, {
    layout: layoutStyles
});

export default function makeStyles() {
    return css`
        display: flex;
        flex-direction: column;
        flex: 1;
        &.k-has-aside {
            flex-direction: row;
            .k-layout {
                > .k-layout-header {
                    background: #fff;
                    border-bottom: 1px solid ${layout.headerInAsideBorderBottomColor};
                }
            }
        }
        > .k-layout-header {
            height: ${layout.header.height};
            line-height: ${layout.header.height};
            background: ${layout.header.background};
            .k-menu {
                .k-menu-item {
                    vertical-align: top;
                    > .k-menu-title {
                        height: auto;
                        line-height: inherit;
                    }
                }
            }
            &.k-layout-fixed {
                position: fixed;
                width: 100%;
                z-index: ${theme.midZIndex - 1};
                left: 0;
                & + .k-layout,
                & + .k-layout-body,
                & + .k-layout > .k-layout-aside.k-layout-fixed {
                    padding-top: ${layout.header.fixed.asideTopGap};
                }
                & + .k-layout > .k-layout-aside.k-layout-fixed {
                    z-index: ${theme.midZIndex - 2};
                }
            }
        }
        > .k-layout-aside {
            background: ${layout.aside.background};
            transition: width ${layout.aside.transition};
            width: ${layout.aside.width};
            display: flex;
            z-index: ${theme.midZIndex};
            flex-direction: column;
            &.k-layout-fixed {
                position: fixed;
                height: 100vh;
                overflow: hidden;
                top: 0;
                > .k-layout-wrapper {
                    height: 100%;
                    overflow: auto;
                    margin-right: -20px;
                    > .k-menu {
                        min-height: 100%;
                    }
                }
                & + .k-layout,
                & + .k-layout-body,
                & + .k-layout > .k-layout-header.k-layout-fixed {
                    padding-left: ${layout.aside.width};
                    transition: padding-left ${layout.aside.transition};
                }
                // collapse
                &.k-layout-collapsed {
                    & + .k-layout,
                    & + .k-layout-body,
                    & + .k-layout > .k-layout-header.k-layout-fixed {
                        padding-left: ${layout.aside.fixed.collapsedHeaderLeftGap} !important
                    }
                }                    
            }
            ${sizes.map(size => {
                return css`
                    &.k-${size} {
                        width: ${layout.aside.layoutAsideWidth[size]};
                        &.k-layout-fixed {
                            & + .k-layout,
                            & + .k-layout-body,
                            & + .k-layout > .k-layout-header.k-layout-fixed {
                                padding-left: ${layout.aside.layoutAsideWidth[size]};
                            }
                        }
                    }
                `
            })}
            &.k-layout-collapsed {
                width: ${layout.aside.collapsedWidth};
            }
        }
        > .k-layout-footer {
            padding: ${layout.footer.padding};
        }
        > .k-layout-body {
            flex: 1;
            margin: ${layout.body.margin};
        }
    `
}
