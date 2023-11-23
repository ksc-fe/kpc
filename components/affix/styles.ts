import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    zIndex: 9
};

let affix: typeof defaults;
setDefault(() => {
    affix = deepDefaults(theme, {affix: defaults}).affix;
});

export function makeStyles(k: string) {
    return css`
        position: relative;
        z-index: ${affix.zIndex};
    `;
}
