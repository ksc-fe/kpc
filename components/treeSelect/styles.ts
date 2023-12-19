import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    get transition() { return theme.transition.middle },
    maxHeight: `400px`,
    padding: `3px 6px`,
};

let treeSelect: typeof defaults;
setDefault(() => {
    treeSelect = deepDefaults(theme, {treeSelect: defaults}).treeSelect;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        min-width: auto;
        max-height: ${treeSelect.maxHeight};
        padding: ${treeSelect.padding};
        overflow: auto;
        &:not([class*="-active"]) {
            transition: left ${treeSelect.transition}, top ${treeSelect.transition};
        }
    `;
});
