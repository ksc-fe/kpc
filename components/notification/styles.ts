import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    get transition() { return theme.transition.large },
    top: `24px`,
    right: `24px`,
    left: `24px`,
    bottom: `24px`,
    leftTransform: `translateX(-100%)`,
    rightTransform: `translateX(100%)`,
    topTransform: `translateY(-100%)`,
    bottomTransform: `translateY(100%)`,
    bgColor: '#fff',
    get borderRadius() { return theme.borderRadius },
    gap: `8px`,
    boxShadow: '0px 4px 32px 4px #00000014',
    padding: `12px`,
    fontSize: '14px',
    get contentColor() { return theme.color.text },
    get titleColor() { return theme.color.title },
    minWidth: '320px',
    width: '360px',
    maxWidth: '400px',
    titleFontSize: '16px',
    titleFontWeight: '500',
    titleMarginBottom: '8px',
    bodyLineHeight: '1.5',
    
    icon: {
        fontSize: `24px`,
    },
    
    close: {
        right: `12px`,
        top: `12px`,
        width: `24px`,
        height: `24px`,
    },
};

let notification: typeof defaults;
setDefault(() => {
    notification = deepDefaults(theme, {notification: defaults}).notification;
    makeNotificationsStyles?.clearCache();
    makeNotificationStyles?.clearCache();
});


export const makeNotificationsStyles = cache(function makeNotificationsStyles(
    k: string, 
    position: string
) {
    // 位置配置
    const positions = {
        topRight: { top: notification.top, right: notification.right, left: '', bottom: '', transform: '' },
        topLeft: { top: notification.top, left: notification.left, right: '', bottom: '', transform: '' },
        bottomRight: { bottom: notification.top, right: notification.right, left: '', top: '', transform: '' },
        bottomLeft: { bottom: notification.top, left: notification.left, right: '', top: '', transform: '' },
        top: { top: notification.top, left: '50%', right: '', bottom: '', transform: 'translateX(-50%)' },
        bottom: { bottom: notification.top, left: '50%', right: '', top: '', transform: 'translateX(-50%)' },
    };
    const pos = positions[position as keyof typeof positions] || positions.topRight;
    
    return css`
        position: fixed;
        ${pos.top ? `top: ${pos.top};` : ''}
        ${pos.bottom ? `bottom: ${pos.bottom};` : ''}
        ${pos.left ? `left: ${pos.left};` : ''}
        ${pos.right ? `right: ${pos.right};` : ''}
        ${pos.transform ? `transform: ${pos.transform};` : ''}
        width: auto;
        pointer-events: none;
        z-index: ${theme.maxZIndex + 1};
    `;
});

export const makeNotificationStyles = cache(function makeNotificationStyles(k: string) {
    return css`
        .${k}-notification-container {
            display: flex;
            flex-direction: column;
            position: relative;
            box-shadow: ${notification.boxShadow};
            border-radius: ${notification.borderRadius};
            margin-bottom: ${notification.gap};
            pointer-events: all;
            min-width: ${notification.minWidth};
            max-width: ${notification.maxWidth};
            width: ${notification.width};
            background: ${notification.bgColor};
        }
        
        .${k}-notification-wrapper {
            position: relative;
            display: flex;
            gap: ${notification.gap};
            padding: ${notification.padding};
        }
        
        .${k}-notification-icon {
            .${k}-icon {
                font-size: ${notification.icon.fontSize};
            }
        }
        
        .${k}-notification-content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        
        .${k}-notification-title {
            font-size: ${notification.titleFontSize};
            font-weight: ${notification.titleFontWeight};
            color: ${notification.titleColor};
            margin-bottom: ${notification.titleMarginBottom};
            line-height: ${notification.bodyLineHeight};
        }
        
        .${k}-notification-body {
            font-size: ${notification.fontSize};
            color: ${notification.contentColor};
            line-height: ${notification.bodyLineHeight};
            word-break: break-word;
            word-wrap: break-word;
        }
        
        .${k}-notification-close {
            position: absolute;
            right: ${notification.close.right};
            top: ${notification.close.top};
            width: ${notification.close.width};
            height: ${notification.close.height};
        }
        
        // 过渡动画 - 右侧位置（topRight, bottomRight）
        &.${k}-position-topRight.transition-enter-from,
        &.${k}-position-bottomRight.transition-enter-from,
        &.${k}-position-topRight.transition-leave-to,
        &.${k}-position-bottomRight.transition-leave-to {
            opacity: 0;
            transform: ${notification.rightTransform};
        }
        
        // 过渡动画 - 左侧位置（topLeft, bottomLeft）
        &.${k}-position-topLeft.transition-enter-from,
        &.${k}-position-bottomLeft.transition-enter-from,
        &.${k}-position-topLeft.transition-leave-to,
        &.${k}-position-bottomLeft.transition-leave-to {
            opacity: 0;
            transform: ${notification.leftTransform};
        }
        
        // 过渡动画 - 中间位置（top, bottom）
        &.${k}-position-top.transition-enter-from,
        &.${k}-position-top.transition-leave-to {
            opacity: 0;
            transform: ${notification.topTransform};
        }

        &.${k}-position-bottom.transition-enter-from,
        &.${k}-position-bottom.transition-leave-to {
            opacity: 0;
            transform: ${notification.bottomTransform};
        }
        
        &.transition-enter-active,
        &.transition-leave-active {
            transition: transform ${notification.transition}, opacity ${notification.transition};
        }
        &.transition-move {
            transition: transform ${notification.transition};
        }
    `;
});