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
