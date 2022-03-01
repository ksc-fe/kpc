import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    maxHeight: `400px`,
    padding: `3px 6px`,
};

let treeSelect: any;
setDefault(() => {
    treeSelect = deepDefaults(theme, {treeSelect: defaults}).treeSelect;
});

export function makeStyles() {
    return css`
        min-width: auto;
        max-height: ${treeSelect.maxHeight};
        padding: ${treeSelect.padding};
        overflow: auto;
        &:not([class*="-active"]) {
            transition: left ${treeSelect.transition}, top ${treeSelect.transition};
        }
    `;
}
