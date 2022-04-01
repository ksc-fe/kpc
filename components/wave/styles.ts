import {css, keyframes} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    inset: '-4px',
};

let wave: typeof defaults;
setDefault(() => {
    wave = deepDefaults(theme, {wave: defaults}).wave;
});

export function makeStyles(color: string, inset: string) {
    const waveEffect = keyframes`
        100% {
            inset: calc(${inset} + ${wave.inset});
            opacity: 0.05;
        }
    `;

    return css`
        position: relative;
        &::after {
            display: block;
            content: '';
            position: absolute;
            inset: ${inset};
            opacity: 0.6;
            border-radius: 4px;
            z-index: 2;
            animation: ${waveEffect} .15s ease-in;
            animation-fill-mode: forwards;
            border: 2px solid ${color};
        }
        &.k-circle,
        &.k-radio-wrapper {
            &:after {
                border-radius: calc(${theme.large.height} / 2);
            }
        }
    `;
}