import {css} from '@emotion/css';
import '../../styles/global';
import { cache } from '../utils';

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        &.${k}-virtual {
            position: relative;
            overflow: auto;
            height: inherit;
            min-height: inherit;
            max-height: inherit;

            // .${k}-virtual-content {
            //     position: relative;
            //     width: 100%;
            // }

            // .${k}-virtual-list {
            //     position: absolute;
            //     width: 100%;
            //     left: 0;
            //     top: 0;
            // }
        }
    `
});
