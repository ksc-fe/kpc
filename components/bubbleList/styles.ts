import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, setAlpha} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

const defaults = {
    gap: '12px',
    scrollbarGap: '6px',
    scrollToBottomBg: '#fff',
    scrollToBottomColor: '#97A3B6',
    scrollToBottomBorder: `1px solid ${setAlpha(theme.color.border, 0.72)}`,
    scrollToBottomShadow: `0 10px 28px ${setAlpha('#000', 0.12)}`,
    scrollToBottomHoverBg: '#fff',
    scrollToBottomHoverColor: theme.color.primary,
    scrollToBottomHoverBorder: `1px solid ${setAlpha(theme.color.primary, 0.22)}`,
    scrollToBottomSize: '32px',
    scrollToBottomIconSize: '20px',
    scrollbarTrack: 'transparent',
    scrollThumb: 'rgba(90, 108, 129, 0.34)',
    scrollThumbHover: 'rgba(90, 108, 129, 0.5)',
    auxiliaryColor: theme.color.placeholder,
    auxiliaryBg: 'transparent',
};

let bubbleList: typeof defaults;
setDefault(() => {
    bubbleList = deepDefaults(theme, {bubbleList: defaults}).bubbleList;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        position: relative;
        display: flex;
        flex-direction: column;
        gap: ${bubbleList.gap};
        width: 100%;
        min-height: 0;

        .${k}-bubble-list-scroll {
            position: relative;
            flex: 1 1 auto;
            min-height: 0;
            overflow-y: auto;
            overflow-x: hidden;
            width: 100%;
            box-sizing: border-box;
            scrollbar-width: thin;
            scrollbar-color: ${bubbleList.scrollThumb} ${bubbleList.scrollbarTrack};
        }

        .${k}-bubble-list-scroll-has-scrollbar {
            padding-inline-end: ${bubbleList.scrollbarGap};
        }

        .${k}-bubble-list-scroll::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        .${k}-bubble-list-scroll::-webkit-scrollbar-track {
            background: ${bubbleList.scrollbarTrack};
        }

        .${k}-bubble-list-scroll::-webkit-scrollbar-thumb {
            background: ${bubbleList.scrollThumb};
            border-radius: 999px;
            border: 2px solid transparent;
            background-clip: content-box;
            transition: background ${theme.transition.small};
        }

        .${k}-bubble-list-scroll::-webkit-scrollbar-thumb:hover {
            background: ${bubbleList.scrollThumbHover};
            background-clip: content-box;
        }

        .${k}-bubble-list-scroll-content {
            min-height: 100%;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            padding-inline: 0;
        }

        .${k}-bubble-list-history {
            display: flex;
            justify-content: center;
            color: ${bubbleList.auxiliaryColor};
            font-size: 12px;
            line-height: 1.5;
            padding: 4px 0 8px;
            flex: 0 0 auto;
        }

        .${k}-bubble-list-items {
            display: flex;
            flex-direction: column;
            gap: ${bubbleList.gap};
            width: 100%;
        }

        .${k}-bubble-list-item {
            width: 100%;
            min-width: 0;
        }

        .${k}-bubble-list-empty {
            min-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${bubbleList.auxiliaryColor};
            padding: 24px 16px;
            text-align: center;
            box-sizing: border-box;
        }

        .${k}-bubble-list-scroll-to-bottom {
            position: absolute;
            right: 16px;
            bottom: 16px;
            z-index: 6;
        }

        .${k}-bubble-list-scroll-to-bottom-button {
            border: ${bubbleList.scrollToBottomBorder};
            background: ${bubbleList.scrollToBottomBg};
            color: ${bubbleList.scrollToBottomColor};
            border-radius: 999px;
            box-shadow: ${bubbleList.scrollToBottomShadow};
            width: ${bubbleList.scrollToBottomSize};
            height: ${bubbleList.scrollToBottomSize};
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
            transition:
                background ${theme.transition.small},
                border-color ${theme.transition.small},
                color ${theme.transition.small},
                transform ${theme.transition.small},
                box-shadow ${theme.transition.small};
        }

        .${k}-bubble-list-scroll-to-bottom-button:hover {
            background: ${bubbleList.scrollToBottomHoverBg};
            color: ${bubbleList.scrollToBottomHoverColor};
            border: ${bubbleList.scrollToBottomHoverBorder};
            transform: translateY(-1px);
            box-shadow: 0 14px 30px ${setAlpha('#000', 0.16)};
        }

        .${k}-bubble-list-scroll-to-bottom-button:focus-visible {
            outline: 0;
            color: ${bubbleList.scrollToBottomHoverColor};
            border: ${bubbleList.scrollToBottomHoverBorder};
            box-shadow:
                0 0 0 4px ${setAlpha(theme.color.primary, 0.14)},
                0 10px 28px ${setAlpha('#000', 0.12)};
        }

        .${k}-bubble-list-scroll-to-bottom-icon {
            pointer-events: none;
            font-size: ${bubbleList.scrollToBottomIconSize};
        }
    `;
});
