import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    top: `10px`,
    transform: `translateY(-10px)`,
    get bgColor() { return theme.color.bg },
    get borderRadius() { return theme.borderRadius },
    gap: `10px`,
    boxShadow: 'none',
    padding: `7px 33px 8px 8px`,
    closeFontSize: `26px`,
    fontSize: '12px',
    get color() { return theme.color.ghost },
    minWidth: '400px',
    maxWidth: '700px',
    minHeight: '32px',
    textAlign: 'left',
    get border() { return `1px solid ${theme.color.border}` },

    icon: {
        color: `inherit`,
        fontSize: `14px`,
        left: `16px`,
        top: `8px`,
    },
};

let message: typeof defaults;
setDefault(() => {
    message = deepDefaults(theme, {message: defaults}).message;
});

export function makeMessagesStyles() {
    return css`
        position: fixed;
        top: ${message.top};
        width: 100%;
        pointer-events: none;
        z-index: ${theme.maxZIndex + 1};
    `;
}

export function makeMessageStyles() {
    return css`
        text-align: center;
        width: 100%;
        font-size: ${message.fontSize};
        color: ${message.color};
        .k-message-container {
            display: inline-block;
            box-shadow: ${message.boxShadow};
            background: ${message.bgColor};
            border-radius: ${message.borderRadius};
            margin-bottom: ${message.gap};
            pointer-events: all;
            min-width: ${message.minWidth};
            max-width: ${message.maxWidth};
            position: relative;
            text-align: ${message.textAlign};
            border: ${message.border};
            min-height: ${message.minHeight};
        }
        .k-message-wrapper {
            position: relative;
            display: inline-block;
            &.k-with-icon {
                padding-left: calc(${message.icon.left} + 14px);
            }
        }
        .k-message-content {
            display: inline-block;
            padding: ${message.padding};
            vertical-align: middle;
            word-break: break-word;
            word-wrap: break-word;
        }
        .k-message-close {
            vertical-align: middle;
            position: absolute;
            right: 0;
            top: 0;
            &:hover {
                background: none;
            }
            .k-icon {
                font-size: ${message.closeFontSize};
            }
        }
        .k-message-icon {
            position: absolute;
            left: ${message.icon.left};
            top: ${message.icon.top};
            color: ${message.icon.color};
            font-size: ${message.icon.fontSize};
        }
        ${(['error', 'success', 'warning'] as const).map(type => {
            const color = theme.color[type === 'error' ? 'danger' : type];
            return css`
                &.k-${type} {
                    .k-message-container {
                        color: ${color};
                        border-color: ${color};
                        background: ${palette(color, -4)};
                    }
                    .k-message-close {
                        color: ${color};
                        &:hover {
                            color: ${palette(color, 1)}
                        }
                    }
                }
            `
        })}

        // transition
        &.transition-enter-from,
        &.transition-leave-to {
            opacity: 0;
            transform: ${message.transform};
        }
        &.transition-enter-active,
        &.transition-leave-active {
            transition: transform ${message.transition}, opacity ${message.transition};
        }
        &.transition-move {
            transition: transform ${message.transition};
        }
    `;
}

