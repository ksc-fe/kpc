import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight, getLeft} from '../../styles/utils';
import '../../styles/global';

type SizeStyles = {
    padding?: string,
    height: string,
    fontSize: string,
    multipleGap: string,
    multipleMargin: string,
}

const defaults = {
    get transition() { return theme.transition.middle },
    height: `125px`,
    item: {
        height: `30px`,
        get color() { return theme.color.text },
        get activeColor() { return theme.color.primary },
        get hoverBgColor() { return theme.color.bg },
        activeFontSize: `1.1em`,
        get disabledColor() { return theme.color.disabled },
        border: `1px solid #e5e5e5`,
    }
};

let scrollSelect: typeof defaults;
setDefault(() => {
    scrollSelect = deepDefaults(theme, {scrollSelect: defaults}).scrollSelect;
});

export {scrollSelect};

export function makeStyles() {
    return css`
        text-align: center;
        overflow: hidden;
        max-height: 100%;
        height: ${scrollSelect.height};
        user-select: none;
        position: relative;
        .k-scroll-select-wrapper {
            transition: transform ${scrollSelect.transition};
        }
        &.k-dragging {
            .k-scroll-select-wrapper {
                transition: none;
            }
        }

        &.k-disabled {
            .k-scroll-select-item {
                cursor: not-allowed;
                color: ${scrollSelect.item.disabledColor};
            }
        }

        .k-scroll-select-item {
            line-height: ${scrollSelect.item.height};
            color: ${scrollSelect.item.color};
            cursor: pointer;
            white-space: nowrap;
            &:hover {
                background: ${scrollSelect.item.hoverBgColor };
            }
            &.k-active {
                color: ${scrollSelect.item.activeColor};
                font-size: ${scrollSelect.item.activeFontSize};
            }
            &.k-disabled {
                color: ${scrollSelect.item.disabledColor};
            }
        }

        .k-scroll-select-append {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        }

        .k-scroll-select-border {
            position: absolute;
            width: 100%;
            top: 50%;
            margin-top: calc(-${scrollSelect.item.height} / 2);
            height: ${scrollSelect.item.height};
            border-top: ${scrollSelect.item.border};
            border-bottom: ${scrollSelect.item.border};
            pointer-events: none;
        }
    `;
}
