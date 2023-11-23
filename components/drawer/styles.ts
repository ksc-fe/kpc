import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

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
});

export function makeStyles(overlay: boolean, k: string) {
    return css`
        position: fixed !important;
        background: transparent !important;
        box-shadow: none !important;

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
            display: flex;
            background: #fff;
            flex-direction: column;
            transform: translateX(0);
            box-shadow: ${drawer.boxShadow};
            .${k}-dialog-body {
                flex-grow: 1;
                overflow: auto;
            }
        }
        
        ${placements.map((placement) => {
            let positionValue: string = '';
            let transformValue: string = '';
            let borderRadius: string = '';
            placements.forEach((p) => {
                // Set top to `0 !important` when overlay is false and placement is right or left
                // Because dialog without overlay don't have positional parent element
                positionValue += p !== placement 
                    ? ((placement === 'right' || placement === 'left') && !overlay && p === 'top')
                        ? `${p}: 0;`
                        : `${p}: auto;`
                    : `${p}: 0;`;
            });

            if (placement === 'left' || placement === 'right') {
                positionValue += 'height: 100% !important;';
                if (placement === 'left') {
                    borderRadius = `0 ${theme.largeBorderRadius} ${theme.largeBorderRadius} 0`;
                    transformValue = 'translateX(-100%)';
                } else {
                    borderRadius = `${theme.largeBorderRadius} 0 0 ${theme.largeBorderRadius}`;
                    transformValue = 'translateX(100%)';
                }
            } else {
                positionValue += 'width: 100% !important;';
                if (placement === 'top') {
                    borderRadius = `0 0 ${theme.largeBorderRadius} ${theme.largeBorderRadius}`;
                    transformValue = 'translateY(-100%)';
                } else {
                    borderRadius = `${theme.largeBorderRadius} ${theme.largeBorderRadius} 0 0`;
                    transformValue = 'translateY(100%)';
                }
            }

            return css`
                &.${k}-${placement} {
                    ${positionValue}
                    &.transition-enter-from,
                    &.transition-leave-to,
                    &.transition-appear-from {
                        transform: none !important;
                        .${k}-drawer-content {
                            transform: ${transformValue};
                        }
                    }
                    .${k}-drawer-content {
                        border-radius: ${borderRadius};
                    }
                }
            `
        })}
    `;
}
