import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';

const defaults = {
    iconGap: '0 0 0 8px',
    lineHeight: '30px',

    // invalid
    invalid: {
        get border() { return `1px solid ${theme.color.danger}`}, 
    }
};

let editable: typeof defaults;
setDefault(() => {
    editable = deepDefaults(theme, {editable: defaults}).editable;
});

export {editable};

export function makeStyles(k: string) {
    return css`
        display: inline-block;
        line-height: ${editable.lineHeight};
        .${k}-editable-icon {
            float: right;
            cursor: pointer;
            margin: ${editable.iconGap};
            line-height: unset;
        }

        // invalid
        &.${k}-invalid {
            .${k}-input-inner {
                border: ${editable.invalid.border} !important;
            }
        }
    `;
}
