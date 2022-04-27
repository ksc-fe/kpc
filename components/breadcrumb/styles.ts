import {css, cx} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import '../../styles/global';

const defaults = {
    fontSize: '14px',
    get color() { return theme.color.lightBlack },
    get hoverColor() {return theme.color.primary },
    gap: '6px',
    activeFontWeight: 'normal',
    activeColor: `#262626`,
};

let breadcrumb: typeof defaults;
setDefault(() => {
    breadcrumb = deepDefaults(theme, {breadcrumb: defaults}).breadcrumb;
});

export default function makeStyles() {
    return css`
        font-size: ${breadcrumb.fontSize};
        display: flex;
        align-items: center;
        .k-breadcrumb-item {
            &:last-of-type .k-breadcrumb-link {
                font-weight: ${breadcrumb.activeFontWeight};
                color: ${breadcrumb.activeColor};
            }
        }
        .k-breadcrumb-link,
        .k-breadcrumb-link a {
            color: ${breadcrumb.color};
        }
        a.k-breadcrumb-link,
        .k-breadcrumb-link a {
            cursor: pointer;
            &:hover {
                color: ${breadcrumb.hoverColor};
            }
        }
        .k-breadcrumb-separator {
            margin: 0 ${breadcrumb.gap};
        }
    `
}
