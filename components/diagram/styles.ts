import {css} from '@emotion/css';
import '../../styles/global';
import { cache } from '../utils';

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: inline-block;
        overflow: auto;
        .mxRubberband {
            position: absolute;
            overflow: hidden;
            border-style: solid;
            border-width: 1px;
            border-color: #0000ff;
            background: #0077ff;
        }
        .mxCellEditor {
            background: url("data:image/gif;base64,R0lGODlhMAAwAIAAAP///wAAACH5BAEAAAAALAAAAAAwADAAAAIxhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8egpAAA7");
            border-color: transparent;
            border-style: solid;
            display: inline-block;
            position: absolute;
            overflow: visible;
            word-wrap: normal;
            border-width: 0;
            min-width: 1px;
            resize: none;
            padding: 0;
            margin: 0;
        }
        .mxPlainTextEditor {
            padding: 0;
            margin: 0;
        }
    `;
});
