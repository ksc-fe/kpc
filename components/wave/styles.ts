import {css, keyframes} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    inset: '-3px',
};

let wave: typeof defaults;
setDefault(() => {
    wave = deepDefaults(theme, {wave: defaults}).wave;
});

export function makeStyles(color: string, inset: string, k: string) {
    const waveEffect = keyframes`
        100% {
            top: calc(${inset} + ${wave.inset});
            bottom: calc(${inset} + ${wave.inset});
            left: calc(${inset} + ${wave.inset});
            right: calc(${inset} + ${wave.inset});
            opacity: 0.05;
        }
    `;

    return css`
        position: relative;
        &::after {
            display: block;
            content: '';
            position: absolute;
            top: ${inset};
            bottom: ${inset};
            left: ${inset};
            right: ${inset};
            opacity: 0.4;
            border-radius: 4px;
            z-index: 2;
            animation: ${waveEffect} .2s ease-in;
            animation-fill-mode: forwards;
            border: 2px solid ${color};
            pointer-events: none;
        }
        &.${k}-circle,
        &.${k}-radio-wrapper {
            &:after {
                border-radius: calc(${theme.large.height} / 2 + 4px);
            }
        }
    `;
}
