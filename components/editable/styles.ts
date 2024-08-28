import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    iconGap: '0 0 0 8px',
    get smallPadding() { return theme.small.padding },
    // invalid
    invalid: {
        get border() { return `1px solid ${theme.color.danger}`}, 
    }
};

let editable: typeof defaults;
setDefault(() => {
    editable = deepDefaults(theme, {editable: defaults}).editable;
    makeStyles?.clearCache();
});

export {editable};

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: inline-flex;
        align-items: center;
        .${k}-editable-icon {
            margin: ${editable.iconGap};
        }

        // invalid
        &.${k}-invalid {
            .${k}-input-wrapper {
                border: ${editable.invalid.border} !important;
            }
        }
    `;
});
