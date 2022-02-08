import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

type ValueOf<T extends readonly any[]> = T[number]

export type Placement = ValueOf<typeof placements>

export const placements = ['top', 'right', 'bottom', 'left'] as const;

const defaults = {
    get transition() { return theme.transition },
    get boxShadow() { return theme.boxShadow }
};

let drawer: any;
setDefault(() => {
    drawer = deepDefaults(theme, {drawer: defaults}).drawer;
});

export function makeStyles(overlay: boolean) {
    return css`
        box-shadow: none;
        border-radius: 0;
        position: fixed !important;
        background: transparent !important;
        box-shadow: none !important;

        &.transition-enter-active,
        &.transition-leave-active,
        &.transition-appear-active {
            transition: opacity ${drawer.transition} !important;
            overflow: hidden;
            .k-drawer-content {
                transition: transform ${drawer.transition};
            }
        }

        .k-drawer-content {
            height: 100%;
            display: flex;
            background: #fff;
            flex-direction: column;
            transform: translateX(0);
            box-shadow: ${drawer.boxShadow};
            .k-dialog-body {
                flex-grow: 1;
            }
        }
        
        ${placements.map((placement) => {
            let positionValue: string = '';
            let transformValue: string = '';
            placements.forEach((p) => {
                // Set top to `0 !important` when overlay is false and placement is right or left
                // Because dialog without overlay don't have positional parent element
                positionValue += p !== placement 
                    ? ((placement === 'right' || placement === 'left') && !overlay && p === 'top')
                        ? `${p}: 0;`
                        : `${p}: auto;`
                    : `${p}: 0;`;
            });

            if(placement === 'left' || placement === 'right') {
                positionValue += 'height: 100% !important;';
                transformValue = placement === 'left'
                    ? 'translateX(-100%)'
                    : 'translateX(100%)';
            } else {
                positionValue += 'width: 100% !important;';
                transformValue = placement === 'top'
                    ? 'translateY(-100%)'
                    : 'translateY(100%)';	
            }

            return `
                &.k-${placement} {
                    ${positionValue}
                    &.transition-enter-from,
                    &.transition-leave-to,
                    &.transition-appear-from {
                        transform: none !important;
                        .k-drawer-content {
                            transform: ${transformValue};
                        }
                    }
                }
            `
        })}
    `;
}
