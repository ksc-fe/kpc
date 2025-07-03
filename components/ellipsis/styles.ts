import {css} from '@emotion/css';
import {setDefault} from '../../styles/theme';
import '../../styles/global';
import { cache } from '../utils';

setDefault(() => {
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string, maxLines: number) {
    return css`
        width: 100%;
        &.${k}-multiline {
            .k-ellipsis-wrapper {
                white-space: normal;
                display: -webkit-box;
                -webkit-line-clamp: ${maxLines};
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                line-clamp: ${maxLines};
                box-orient: vertical;
            }
        }
    `;
});
