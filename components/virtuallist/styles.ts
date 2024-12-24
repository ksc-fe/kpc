import {css} from '@emotion/css';
import '../../styles/global';
import { cache } from '../utils';

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        &.${k}-virtual {
            &.${k}-virtual-container {
                position: relative;
                height: 100%;
            }

            .${k}-virtual-wrapper {
                width: 100%;
                will-change: transform;
            }

            .${k}-virtual-phantom {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                z-index: -1;
                pointer-events: none;
            }
        }
    `
});
