import {theme, setDefault} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';
import {deepDefaults}  from '../../styles/utils';

const defaults = {
    title: {
        fontSize: '14px',
        gap: '8px',
        fontWeight: '500'
    },
    get color() { return theme.color.text },
    get padding() { return `6px ${theme.default.padding}` },
};

let tip: typeof defaults;
setDefault(() => {
    tip = deepDefaults(theme, {tip: defaults}).tip;
});

export function makeStyles() {
    return css`
        // Tip extends Tag, so we add k-tip to increase the priority of class
        &.k-tip {
            display: flex;
            height: auto;
            padding: 0;
            color: ${tip.color} !important;
            align-items: flex-start;
        }
        .k-tip-wrapper {
            flex: 1;
            padding: ${tip.padding};
        }

        .k-tip-title {
            font-size: ${tip.title.fontSize};
            margin-bottom: ${tip.title.gap};
            font-weight: ${tip.title.fontWeight}
        }

        &.k-fade-leave-active {
            position: relative;
        }

        .k-tip-close:hover {
            background: none;
        }
    `;
}
