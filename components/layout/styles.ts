import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, getLeft, setAlpha} from '../../styles/utils';
import '../../styles/global';
import {menu} from '../menu/styles';
import { isNullOrUndefined } from 'intact-shared';
import { getStyle } from './helpers';
import { cache } from '../utils';

const sizes = ['small', 'large'] as const;
export const themes = ['light', 'dark', 'white'] as const;

const defaults = {
    get transition() { return theme.transition.large },
    get color() { return menu.item.color },
    get bgColor() { return menu.bgColor },
    light: {
        get color() { return menu.light.item.color },
        get bgColor() { return menu.light.bgColor },
        get border() { return menu.light.border },
    },
    white: {
        get color() { return menu.white.item.color },
        get bgColor() { return menu.white.bgColor },
        get border() { return menu.white.border },
    },

    get collapsedWidth() { return `calc(${getLeft(menu.item.padding)} * 2 + ${menu.icon.width})` },
    footerPadding: '24px 50px',
    // bodyMargin: '0 20px',
};

let layout: typeof defaults;
setDefault(() => {
    layout = deepDefaults(theme, {layout: defaults}).layout;
    makeLayoutStyles?.clearCache();
    makeHeaderStyles?.clearCache();
    makeAsideStyles?.clearCache();
    makeBodyStyles?.clearCache();
});

export function getCollapseWidth(collapsedWidth?: string | number) {
    return isNullOrUndefined(collapsedWidth) ? layout.collapsedWidth : getStyle(collapsedWidth);
}

export const makeLayoutStyles = cache(function makeLayoutStyles(k: string) {
    return css`
        display: flex;
        flex-direction: column;
        flex: 1;
        transition: padding-left ${layout.transition};
        &.${k}-has-aside {
            flex-direction: row;
        }
        .${k}-layout-footer {
            padding: ${layout.footerPadding};
        }
        .${k}-layout-body {
            flex: 1;
        }
    `
});

export const makeHeaderStyles = cache(function makeHeaderStyles(k: string) {
    return css`
        display: flex;
        align-items: center;
        color: ${layout.color};
        background: ${layout.bgColor};
        left: 0;
        transition: left ${layout.transition};
        &.${k}-fixed {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: ${theme.midZIndex + 1};
        }
        > .${k}-menu {
            background: transparent !important;
        }

        &.${k}-blur {
            backdrop-filter: blur(20px);
            background: ${setAlpha(layout.bgColor, 0.1)};
        }
        &.${k}-box-shadow {
            border-bottom: none !important;
            box-shadow: ${theme.boxShadow};
        }

        ${themes.map(theme => {
            if (theme === 'dark') return;
            const styles = layout[theme];
            return css`
                &.${k}-${theme} {
                    background: ${styles.bgColor};
                    color: ${styles.color};
                    border-bottom: ${styles.border};
                    &.${k}-blur {
                        background: ${setAlpha(styles.bgColor, 0.1)};
                    }
                }
            `
        })}
    `;
});

export const makeAsideStyles = cache(function makeAsideStyles(k: string) {
    return css`
        transition: width ${layout.transition};
        display: flex;
        flex-direction: column;
        background: ${layout.bgColor};
        color: ${layout.color};
        ${themes.map(theme => {
            if (theme === 'dark') return;
            const styles = layout[theme];
            return css`
                &.${k}-${theme} {
                    background: ${styles.bgColor};
                    color: ${styles.color};
                    border-right: ${styles.border};
                }
            `
        })}
        &.${k}-fixed {
            position: fixed;
            overflow: auto;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: ${theme.midZIndex};
        }
        .${k}-menu {
            width: auto !important;
        }
    `
});

export const makeBodyStyles = cache(function makeBodyStyles(k: string) {
    return css`
        transition: padding-left ${layout.transition};
    `
});
