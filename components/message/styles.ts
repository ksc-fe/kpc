import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    top: `10px`,
    left: `0px`,
    transform: `translateY(-10px)`,
    get bgColor() { return theme.color.bg },
    get borderRadius() { return theme.borderRadius },
    gap: `10px`,
    boxShadow: 'none',
    padding: `7px 33px 8px 8px`,
    fontSize: '12px',
    get color() { return theme.color.text },
    minWidth: '400px',
    maxWidth: '700px',
    minHeight: '32px',
    textAlign: 'left',
    get border() { return `1px solid ${theme.color.border}` },

    icon: {
        // color: `inherit`,
        fontSize: `18px`,
        left: `16px`,
        top: `7px`,
    },
};

let message: typeof defaults;
setDefault(() => {
    message = deepDefaults(theme, {message: defaults}).message;
});

export function makeMessagesStyles(k: string) {
    return css`
        position: fixed;
        top: ${message.top};
        left: ${message.left};
        width: 100%;
        pointer-events: none;
        z-index: ${theme.maxZIndex + 1};
    `;
}

export function makeMessageStyles(k: string) {
    return css`
        text-align: center;
        width: 100%;
        font-size: ${message.fontSize};
        color: ${message.color};
        .${k}-message-container {
            display: inline-block;
            box-shadow: ${message.boxShadow};
            border-radius: ${message.borderRadius};
            margin-bottom: ${message.gap};
            pointer-events: all;
            min-width: ${message.minWidth};
            max-width: ${message.maxWidth};
            position: relative;
            text-align: ${message.textAlign};
            min-height: ${message.minHeight};
        }
        .${k}-message-wrapper {
            position: relative;
            display: inline-block;
            &.${k}-with-icon {
                padding-left: calc(${message.icon.left} + 14px);
            }
        }
        .${k}-message-content {
            display: inline-block;
            padding: ${message.padding};
            vertical-align: middle;
            word-break: bre.${k}-word;
            word-wrap: bre.${k}-word;
        }
        .${k}-message-close {
            vertical-align: middle;
            position: absolute;
            right: 0;
            top: 0;
            &:hover {
                background: none;
            }
        }
        .${k}-message-icon {
            position: absolute;
            left: ${message.icon.left};
            top: ${message.icon.top};
            font-size: ${message.icon.fontSize};
        }

        ${(['info', 'error', 'success', 'warning'] as const).map(type => {
            const color = theme.color[type === 'error' ? 'danger' : type];
            return css`
                &.${k}-${type} {
                    .${k}-message-container {
                        background: ${palette(color, -4)};
                    }
                    .${k}-message-icon {
                        color: ${color};
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

