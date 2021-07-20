import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {affix} = deepDefaults(theme, {
    affix: {
        zIndex: 9
    }
});

export function makeStyles() {
    return css`
        position: relative;
        z-index: ${affix.zIndex};
    `;
}
