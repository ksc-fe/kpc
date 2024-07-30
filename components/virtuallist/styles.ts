import {css} from '@emotion/css';
import '../../styles/global';
import { cache } from '../utils';

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        cursor: pointer;
        vertical-align: middle;
    `
});
