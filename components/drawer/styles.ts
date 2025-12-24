import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

type ValueOf<T extends readonly any[]> = T[number]

export type Placement = ValueOf<typeof placements>

export const placements = ['top', 'right', 'bottom', 'left'] as const;

const defaults = {
    get transition() { return theme.transition.large },
    get boxShadow() { return theme.largeBoxShadow },
};

let drawer: typeof defaults;
setDefault(() => {
    drawer = deepDefaults(theme, {drawer: defaults}).drawer;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(overlay: boolean, k: string) {
    const borderRadius = theme.largeBorderRadius;
    return css`
        &.k-drawer {
            position: fixed;
            background: transparent;
            box-shadow: none;
            border-radius: 0;
            max-height: 100vh;
        }

        &.transition-enter-active,
        &.transition-leave-active,
        &.transition-appear-active {
            transition: opacity ${drawer.transition} !important;
            overflow: hidden;
            .${k}-drawer-content {
                transition: transform ${drawer.transition};
            }
        }

        .${k}-drawer-content {
            height: 100%;
            max-height: 100vh;
            display: flex;
            background: #fff;
            flex-direction: column;
            transform: translateX(0);
            box-shadow: ${drawer.boxShadow};
            position: relative;
            .${k}-dialog-body {
                flex-grow: 1;
                overflow: auto;
            }
            &.${k}-drawer-resizing {
                transition: none !important;
            }
        }

        .${k}-drawer-resize {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 5px;
            cursor: col-resize;
            z-index: 10;
            user-select: none;
            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
            &.${k}-drawer-resize-right {
                right: 0;
            }
            &.${k}-drawer-resize-left {
                left: 0;
            }
        }

        .${k}-drawer-resize-horizontal {
            position: absolute;
            left: 0;
            right: 0;
            height: 5px;
            cursor: row-resize;
            z-index: 10;
            user-select: none;
            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
            &.${k}-drawer-resize-top {
                top: 0;
            }
            &.${k}-drawer-resize-bottom {
                bottom: 0;
            }
        }
        
        ${makePlacementStyles(k, 'right', `right: 0; height: 100%;`, `translateX(100%)`, `${borderRadius} 0 0 ${borderRadius}`)}
        ${makePlacementStyles(k, 'left', 'left: 0; height: 100%;', `translateX(-100%)`, `0 ${borderRadius} ${borderRadius} 0`)}
        ${makePlacementStyles(k, 'top', 'left: 50%; top: 0; transform: translateX(-50%);', `translateY(-100%)`, `0 0 ${borderRadius} ${borderRadius}`)}
        ${makePlacementStyles(k, 'bottom', 'left: 50%; bottom: 0; transform: translateX(-50%);', `translateY(100%)`, `0 ${borderRadius} ${borderRadius} 0`)}
        &.${k}-top,
        &.${k}-bottom {
            width: 100%;
        }
    `;
});

function makePlacementStyles(k: string, placement: string, styles: string, transform: string, borderRadius: string) {
    return css`
        &.${k}-drawer.${k}-${placement} {
            ${styles}
            &.transition-enter-from,
            &.transition-leave-to,
            &.transition-appear-from {
                .${k}-drawer-content {
                    transform: ${transform};
                }
            }
            .${k}-drawer-content {
                border-radius: ${borderRadius};
            }
        }
    `
}
