import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';

const defaults = {
    width: '240px',
    padding: '8px 16px',
    gap: '8px',
    title: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
    }
};

let popover: typeof defaults;
setDefault(() => {
    popover = deepDefaults(theme, {popover: defaults}).popover;
});


export default function makeStyles() {
    return css`
        // increase priority
        &.k-tooltip-content.k-popover {
            width: ${popover.width};
            padding: ${popover.padding};
            .k-popover-title {
                display: flex;
                align-items: center;
                font-size: ${popover.title.fontSize};
                line-height: ${popover.title.lineHeight};
                font-weight: ${popover.title.fontWeight};
            }
            .k-popover-icon {
                margin-right: ${popover.gap};
            }
            .k-popover-content {
                margin-top: ${popover.gap};
            }
            .k-tooltip-footer {
                text-align: right;
            }
    `;
}
