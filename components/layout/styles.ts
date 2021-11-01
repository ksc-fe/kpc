import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, getLeft} from '../../styles/utils';
import '../../styles/global';
import {menu} from '../menu/styles';

const sizes = ['small', 'large'] as const;
export const themes = ['light', 'dark', 'white'] as const;

const {layout} = deepDefaults(theme, {
    layout: {
        get color() { return menu.item.color },
        get bgColor() { return menu.bgColor },
        light: {
            get color() { return menu.light.bgColor },
            get bgColor() { return menu.light.bgColor },
            get border() { return menu.light.border },
        },
        white: {
            get color() { return menu.white.bgColor },
            get bgColor() { return menu.white.bgColor },
            get border() { return menu.white.border },
        },

        get collapsedWidth() { return `calc(${getLeft(menu.item.padding)} * 2 + ${menu.icon.width})` },
        footerPadding: '24px 50px',
        bodyMargin: '0 20px',
    },
});

export function getCollapseWidth() {
    return layout.collapsedWidth;
}

export function makeLayoutStyles() {
    return css`
        display: flex;
        flex-direction: column;
        flex: 1;
        transition: padding-left ${theme.transition};
        &.k-has-aside {
            flex-direction: row;
        }
        .k-layout-footer {
            padding: ${layout.footerPadding};
        }
        .k-layout-body {
            flex: 1;
            margin: ${layout.bodyMargin};
        }
    `
}

export function makeHeaderStyles() {
    return css`
        display: flex;
        align-items: center;
        color: ${layout.color};
        background: ${layout.bgColor};
        left: 0;
        transition: left ${theme.transition};
        &.k-fixed {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: ${theme.midZIndex};
        }
        ${themes.map(theme => {
            if (theme === 'dark') return;
            const styles = layout[theme];
            return css`
                &.k-${theme} {
                    background: ${styles.bgColor};
                    color: ${styles.color};
                    border-bottom: ${styles.border};
                }
            `
        })}
    `;
}

export function makeAsideStyles() {
    return css`
        transition: width ${theme.transition};
        display: flex;
        flex-direction: column;
        background: ${layout.bgColor};
        color: ${layout.color};
        ${themes.map(theme => {
            if (theme === 'dark') return;
            const styles = layout[theme];
            return css`
                &.k-${theme} {
                    background: ${styles.bgColor};
                    color: ${styles.color};
                    border-right: ${styles.border};
                }
            `
        })}
        &.k-fixed {
            position: fixed;
            overflow: auto;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: ${theme.midZIndex};
        }
        .k-menu {
            width: auto !important;
        }
    `
}

