import {css} from '@emotion/css';
import '../../styles/global';
import { cache } from '../utils';

export const makeContainerStyles = cache(() => {
    return css`
        overflow: auto;
        position: relative;
        height: 100%;
    `;
});

export const makePhantomStyles = cache(() => {
    return css`
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: -1;
        pointer-events: none;
    `;
});

export const makeWrapperStyles = cache(() => {
    return css`
        width: 100%;
        will-change: transform;
    `;
});
