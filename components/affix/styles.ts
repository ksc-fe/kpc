import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    zIndex: 9
};

let affix: any;
setDefault(() => {
    affix = deepDefaults(theme, {affix: defaults}).affix;
});

export function makeStyles() {
    return css`
        position: relative;
        z-index: ${affix.zIndex};
    `;
}
