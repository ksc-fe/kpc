import {css, keyframes} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    width: `40px`,
    get color() { return theme.color.primary },

    largeWidth: `48px`,
    smallWidth: `32px`,
    miniWidth: `24px`,
};

let spin: typeof defaults;
setDefault(() => {
    spin = deepDefaults(theme, {spin: defaults}).spin;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: inline-block;
        .${k}-spin-canvas {
            width: ${spin.width};
            height: ${spin.width};
            animation:.${k}-rotate 2s linear infinite;
        }
        .${k}-spin-circle {
            stroke-dasharray: 1, var(--c);
            stroke-dashoffset: 0;
            fill: none;
            stroke: var(--stroke, ${spin.color});
        }

        // size
        ${sizes.map(size => {
            if (size === 'default') return;
            const width = spin[`${size}Width` as const];
            return css`
                &.${k}-${size} {
                    .${k}-spin-canvas {
                        width: ${width};
                        height: ${width};
                    }
                }
            `;
        })}

        &.${k}-center,
        &.${k}-overlay .${k}-spin-wrapper {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &.${k}-overlay {
            position: absolute;
            z-index: ${theme.midZIndex};
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, .5);
        }
    `;
});

export const makeDashAnimation = cache(function makeDashAnimation(
    c: number, d75: number, o25: number, nc: number
) {
    const name = keyframes`
        0% {
            stroke-dasharray: 1, ${c};
            stroke-dashoffset: 0
        }

        50% {
            stroke-dasharray: ${d75}, ${c};
            stroke-dashoffset: ${o25};
        }

        to {
            stroke-dasharray: ${d75}, ${c};
            stroke-dashoffset: ${nc};
        }
    `;
    return `${name} 1.5s ease-in-out infinite`;
});
