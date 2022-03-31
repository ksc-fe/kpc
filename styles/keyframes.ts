import {css, keyframes} from '@emotion/css';

export const rotate = keyframes`
    0% {
        transform-origin: 50% 50%;
        transform: rotate(0);
    }
    100% {
        transform-origin: 50% 50%;
        transform: rotate(360deg);
    }
`;

export const waveEffect = keyframes`
    90% {
        opacity: 0.4;
    }
    100% {
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
        opacity: 0.05;
    }
`;
