import {css, keyframes} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    width: `40px`,
    get color() { return theme.color.primary },
    strokeWidth: 6,

    largeWidth: `48px`,
    smallWidth: `32px`,
    miniWidth: `24px`,
};

let spin: typeof defaults;
setDefault(() => {
    spin = deepDefaults(theme, {spin: defaults}).spin;
});

export function makeStyles() {
    const width = spin.strokeWidth;
    const r = 120 - 60 - (width / 2);
    const c = Math.round(2 * 3.14 * r);
    const spinDash = keyframes`
        0% {
            stroke-dasharray: 1, ${c};
            stroke-dashoffset: 0
        }

        50% {
            stroke-dasharray: ${Math.round(c * 0.75)}, ${c};
            stroke-dashoffset: ${-c * 0.25};
        }

        to {
            stroke-dasharray: ${Math.round(c * 0.75)}, ${c};
            stroke-dashoffset: ${-c};
        }
    `;

    return css`
        display: inline-block;
        .k-spin-canvas {
            width: ${spin.width};
            height: ${spin.width};
            animation: k-rotate 2s linear infinite;
        }
        .k-spin-circle {
            stroke-dasharray: ${Math.round(c * 0.75)}, ${c};
            stroke-dashoffset: 0;
            fill: none;
            stroke-width: ${width};
            stroke: ${spin.color};
            r: ${r};
            animation: ${spinDash} 1.5s ease-in-out infinite;
        }

        // size
        ${sizes.map(size => {
            if (size === 'default') return;
            const width = spin[`${size}Width` as const];
            return css`
                &.k-${size} {
                    .k-spin-canvas {
                        width: ${width};
                        height: ${width};
                    }
                }
            `;
        })}

        &.k-center,
        &.k-overlay .k-spin-wrapper {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &.k-overlay {
            position: absolute;
            z-index: ${theme.midZIndex};
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, .5);
        }
    `;
}


