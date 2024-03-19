import {css} from '@emotion/css';
import {setDefault} from '../../styles/theme';
import '../../styles/global';
import { cache } from '../utils';

setDefault(() => {
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string, maxLines: number) {
    return css`
        &.${k}-multiline {
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: ${maxLines};
            -webkit-box-orient: vertical;
        }
    `;
});
