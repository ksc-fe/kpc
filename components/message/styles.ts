import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {message} = deepDefaults(theme, {
    message: {
        top: `10px`,
        transform: `translateY(-10px)`,
        bgColor: '#fff',
        get borderRadius() { return theme.borderRadius },
        gap: `10px`,
        get boxShadow() { return theme.boxShadow },
        padding: `10px`,
        closeFontSize: `24px`,

        icon: {
            get color() { return theme.color.primary },
            fontSize: `18px`,
            left: `10px`,
            top: `8px`,
        },
    }
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
        .k-message-container {
            display: inline-block;
            box-shadow: ${message.boxShadow};
            background: ${message.bgColor};
            border-radius: ${message.borderRadius};
            margin-bottom: ${message.gap};
            pointer-events: all;
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
        ${(['danger', 'success', 'warning'] as const).map(type => {
            return css`
                &.k-${type} .k-message-icon {
                    color: ${theme.color[type]}
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
            transition: transform ${theme.transition}, opacity ${theme.transition};
        }
        &.transition-move {
            transition: transform ${theme.transition};
        }
    `;
}

