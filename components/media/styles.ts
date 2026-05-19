import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, setAlpha} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

const defaults = {
    radius: '6px',
    sizes: {
        mini: '24px',
        small: '32px',
        default: '64px',
        large: '96px',
    },
    placeholderBg: 'linear-gradient(180deg, #F5F7FA 0%, #ECEFF4 100%)',
    placeholderColor: '#98A0AF',
    audioCardBg: '#F3F4F6',
    audioCardTextColor: '#3A3D52',
    overlayBg: 'rgba(15, 23, 42, 0.42)',
    errorTextColor: theme.color.danger,
    loadingSpinnerColor: theme.color.primary,
    loadingSkeletonBase: '#EEF1F5',
    loadingSkeletonTo: '#F7F9FC',
    groupGap: '12px',
    viewerBg: 'rgba(0, 0, 0, 0.5)',
    viewerHeaderColor: '#FFFFFF',
    viewerSubColor: 'rgba(255, 255, 255, 0.72)',
    viewerActionBg: 'rgba(255, 255, 255, 0.12)',
    viewerActionHoverBg: 'rgba(255, 255, 255, 0.18)',
    viewerActionDisabledBg: 'rgba(255, 255, 255, 0.06)',
    viewerActionColor: '#FFFFFF',
    viewerAudioBg: '#FFFFFF',
    viewerAudioTitleColor: '#1F2937',
    viewerAudioShadow: '0 18px 40px rgba(15, 23, 42, 0.22)',
};

let media: typeof defaults;
setDefault(() => {
    media = deepDefaults(theme, {media: defaults}).media;
    makeMediaStyles?.clearCache();
    makeMediaGroupStyles?.clearCache();
    makeMediaViewerStyles?.clearCache();
});

export const makeMediaStyles = cache(function makeMediaStyles(k: string) {
    return css`
        &.${k}-media {
            position: relative;
            display: inline-flex;
            flex: 0 0 auto;
            width: ${media.sizes.default};
            height: ${media.sizes.default};
            vertical-align: top;
            box-sizing: border-box;
        }

        &.${k}-media.${k}-media-mini {
            width: ${media.sizes.mini};
            height: ${media.sizes.mini};
        }

        &.${k}-media.${k}-media-small {
            width: ${media.sizes.small};
            height: ${media.sizes.small};
        }

        &.${k}-media.${k}-media-large {
            width: ${media.sizes.large};
            height: ${media.sizes.large};
        }

        .${k}-media-shell {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: ${media.radius};
            background: ${media.placeholderBg};
            box-shadow: inset 0 0 0 1px ${setAlpha('#111827', 0.08)};
        }

        &.${k}-media-loading .${k}-media-shell {
            background: linear-gradient(
                90deg,
                ${media.loadingSkeletonBase} 25%,
                ${media.loadingSkeletonTo} 37%,
                ${media.loadingSkeletonBase} 63%
            );
            background-size: 400% 100%;
            animation: ${k}-media-loading-wave 1.4s ease infinite;
            box-shadow: none;
        }

        &.${k}-media-error .${k}-media-shell,
        &.${k}-media-custom-error .${k}-media-shell {
            box-shadow: none;
        }

        &.${k}-media-loading .${k}-media-shell::before {
            content: none;
        }

        @keyframes ${k}-media-loading-wave {
            0% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0 50%;
            }
        }

        .${k}-media-image,
        .${k}-media-video {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: #DCE1E9;
        }

        &.${k}-media-loading .${k}-media-image,
        &.${k}-media-loading .${k}-media-video {
            background: transparent;
        }

        .${k}-media-audio-loader {
            display: none;
        }

        .${k}-media-audio-card,
        .${k}-media-error-card {
            position: absolute;
            inset: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${media.audioCardBg};
            box-sizing: border-box;
        }

        .${k}-media-card-icon {
            display: block;
            width: 32px;
            height: 32px;
            flex: 0 0 auto;
        }

        .${k}-media-name-tooltip-content {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .${k}-media-name-tooltip-trigger {
            position: absolute;
            inset: 0;
            z-index: 2;
            outline: none;
        }

        &.${k}-media.${k}-media-mini .${k}-media-card-icon {
            width: 24px;
            height: 24px;
        }

        &.${k}-media-loading .${k}-media-audio-card,
        .${k}-media-error-card {
            background: transparent;
        }

        .${k}-media-placeholder {
            position: absolute;
            inset: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${media.placeholderBg};
            color: ${media.placeholderColor};
        }

        .${k}-media-placeholder .${k}-icon {
            font-size: 20px;
        }

        &.${k}-media-loading .${k}-media-placeholder {
            background: transparent;
        }

        &.${k}-media-mini .${k}-media-placeholder .${k}-icon,
        &.${k}-media-small .${k}-media-placeholder .${k}-icon {
            font-size: 16px;
        }

        .${k}-media-overlay {
            position: absolute;
            inset: 0;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${media.overlayBg};
            opacity: 0;
            pointer-events: none;
            transition: opacity ${theme.transition.middle};
        }

        .${k}-media-preview-trigger,
        &.${k}-media-custom-mask .${k}-media-overlay {
            pointer-events: auto;
        }

        .${k}-media-video-preview-trigger {
            position: absolute;
            inset: 0;
            z-index: 4;
            width: 24px;
            height: 24px;
            margin: auto;
            pointer-events: auto;
        }

        .${k}-media-loading-indicator {
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 14px;
            height: 14px;
            pointer-events: none;
        }

        .${k}-media-loading-spinner {
            width: 12px;
            height: 12px;
            border: 1.5px solid ${setAlpha(media.loadingSpinnerColor, 0.22)};
            border-top-color: ${media.loadingSpinnerColor};
            border-radius: 50%;
            box-sizing: border-box;
            animation: ${k}-media-loading-spinner 0.8s linear infinite;
        }

        @keyframes ${k}-media-loading-spinner {
            100% {
                transform: rotate(360deg);
            }
        }

        .${k}-media-state-layer {
            position: absolute;
            inset: 0;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }

        .${k}-media-preview-trigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: auto;
            height: auto;
            padding: 0;
            border: none;
            border-radius: 0;
            background: transparent;
            color: #FFFFFF;
            cursor: pointer;
            transition: opacity ${theme.transition.middle};
        }

        .${k}-media-preview-trigger:focus {
            outline: none;
        }

        .${k}-media-preview-trigger .${k}-icon,
        .${k}-media-preview-trigger.ion {
            font-size: 18px;
        }

        &.${k}-media-mini .${k}-media-preview-trigger .${k}-icon,
        &.${k}-media-small .${k}-media-preview-trigger .${k}-icon,
        &.${k}-media-mini .${k}-media-preview-trigger.ion,
        &.${k}-media-small .${k}-media-preview-trigger.ion {
            font-size: 14px;
        }

        &.${k}-media-mini .${k}-media-video-preview-trigger,
        &.${k}-media-small .${k}-media-video-preview-trigger {
            width: 18px;
            height: 18px;
        }

        .${k}-media-preview-trigger:hover:not(:disabled) {
            background: transparent;
        }

        .${k}-media-preview-trigger:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &.${k}-media-mini .${k}-media-loading-spinner,
        &.${k}-media-small .${k}-media-loading-spinner {
            width: 10px;
            height: 10px;
            border-width: 1px;
        }

        &.${k}-media-mini .${k}-media-loading-indicator,
        &.${k}-media-small .${k}-media-loading-indicator {
            top: 4px;
            left: 4px;
            width: 10px;
            height: 10px;
        }

        &.${k}-media-previewable:hover .${k}-media-overlay {
            opacity: 1;
        }

        &.${k}-media-custom-mask:hover .${k}-media-overlay {
            opacity: 1;
        }

        &.${k}-media-video-play-visible:hover .${k}-media-overlay {
            opacity: 1;
        }

        .${k}-media-preview-icon.${k}-icon,
        .${k}-media-preview-icon.ion {
            color: inherit;
        }
    `;
});

export const makeMediaGroupStyles = cache(function makeMediaGroupStyles(k: string) {
    return css`
        &.${k}-media-group {
            display: inline-flex;
            flex-wrap: wrap;
            gap: ${media.groupGap};
            align-items: flex-start;
            max-width: 100%;
        }
    `;
});

export const makeMediaViewerStyles = cache(function makeMediaViewerStyles(k: string) {
    return css`
        &.${k}-media-viewer {
            position: fixed;
            inset: 0;
            z-index: ${theme.maxZIndex};
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${media.viewerBg};
            backdrop-filter: blur(2px);
        }

        &.${k}-media-viewer.k-fade-enter-active,
        &.${k}-media-viewer.k-fade-leave-active {
            .${k}-media-viewer-header,
            .${k}-media-viewer-prev,
            .${k}-media-viewer-next,
            .${k}-media-viewer-stage {
                transition: transform ${theme.transition.large}, opacity ${theme.transition.large};
            }
        }

        &.${k}-media-viewer.k-fade-enter-from,
        &.${k}-media-viewer.k-fade-leave-to {
            .${k}-media-viewer-header {
                opacity: 0;
                transform: translateY(-8px);
            }

            .${k}-media-viewer-prev {
                opacity: 0;
                transform: translate(-8px, -50%);
            }

            .${k}-media-viewer-next {
                opacity: 0;
                transform: translate(8px, -50%);
            }

            .${k}-media-viewer-stage {
                opacity: 0;
                transform: translateY(12px) scale(0.96);
            }
        }

        &.${k}-media-viewer .${k}-media-viewer-header {
            position: absolute;
            top: 24px;
            left: 24px;
            right: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            z-index: 1;
        }

        &.${k}-media-viewer .${k}-media-viewer-heading {
            min-width: 0;
        }

        &.${k}-media-viewer .${k}-media-viewer-title {
            color: ${media.viewerHeaderColor};
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &.${k}-media-viewer .${k}-media-viewer-counter {
            margin-top: 4px;
            color: ${media.viewerSubColor};
            font-size: 12px;
            line-height: 18px;
        }

        &.${k}-media-viewer .${k}-media-viewer-close,
        &.${k}-media-viewer .${k}-media-viewer-prev,
        &.${k}-media-viewer .${k}-media-viewer-next {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            padding: 0;
            border: none;
            border-radius: 50%;
            background: ${media.viewerActionBg};
            color: ${media.viewerActionColor};
            line-height: 1;
            cursor: pointer;
            transition: background ${theme.transition.middle}, transform ${theme.transition.middle};
        }

        &.${k}-media-viewer .${k}-media-viewer-close:hover,
        &.${k}-media-viewer .${k}-media-viewer-prev:hover:not(:disabled),
        &.${k}-media-viewer .${k}-media-viewer-next:hover:not(:disabled) {
            background: ${media.viewerActionHoverBg};
            transform: scale(1.04);
        }

        &.${k}-media-viewer .${k}-media-viewer-prev:disabled,
        &.${k}-media-viewer .${k}-media-viewer-next:disabled {
            background: ${media.viewerActionDisabledBg};
            opacity: 0.45;
            cursor: not-allowed;
        }

        &.${k}-media-viewer .${k}-media-viewer-prev,
        &.${k}-media-viewer .${k}-media-viewer-next {
            position: absolute;
            top: 50%;
            margin-top: -20px;
            z-index: 1;
        }

        &.${k}-media-viewer .${k}-media-viewer-close .${k}-icon {
            color: #FFFFFF;
            font-size: 20px;
        }

        &.${k}-media-viewer .${k}-media-viewer-prev .${k}-icon,
        &.${k}-media-viewer .${k}-media-viewer-next .${k}-icon {
            color: #FFFFFF;
            font-size: 20px;
            font-weight: 600;
        }

        &.${k}-media-viewer .${k}-media-viewer-prev {
            left: 24px;
        }

        &.${k}-media-viewer .${k}-media-viewer-next {
            right: 24px;
        }

        &.${k}-media-viewer .${k}-media-viewer-stage {
            display: flex;
            align-items: center;
            justify-content: center;
            width: min(88vw, 1120px);
            max-width: 100%;
            max-height: calc(100vh - 120px);
            padding: 72px 80px;
            box-sizing: border-box;
        }

        &.${k}-media-viewer .${k}-media-viewer-image,
        &.${k}-media-viewer .${k}-media-viewer-video {
            display: block;
            max-width: 100%;
            max-height: calc(100vh - 144px);
            object-fit: contain;
        }

        &.${k}-media-viewer .${k}-media-viewer-video {
            background: #000000;
        }

        &.${k}-media-viewer .${k}-media-viewer-audio {
            width: min(480px, 100%);
            padding: 28px;
            border-radius: 20px;
            background: ${media.viewerAudioBg};
            box-shadow: ${media.viewerAudioShadow};
            box-sizing: border-box;
            text-align: center;
        }

        &.${k}-media-viewer .${k}-media-viewer-audio-cover {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 96px;
            height: 96px;
            margin-bottom: 20px;
            border-radius: 50%;
            background: ${theme.color.bg};
            color: ${theme.color.primary};
        }

        &.${k}-media-viewer .${k}-media-viewer-audio-cover-image {
            display: block;
            width: 40px;
            height: 40px;
        }

        &.${k}-media-viewer .${k}-media-viewer-audio-title {
            margin-bottom: 16px;
            color: ${media.viewerAudioTitleColor};
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            word-break: break-word;
        }

        &.${k}-media-viewer .${k}-media-viewer-audio-player {
            width: 100%;
        }

        @media (max-width: 768px) {
            &.${k}-media-viewer .${k}-media-viewer-header {
                top: 16px;
                left: 16px;
                right: 16px;
            }

            &.${k}-media-viewer .${k}-media-viewer-stage {
                width: 100%;
                padding: 72px 16px 24px;
            }

            &.${k}-media-viewer .${k}-media-viewer-prev,
            &.${k}-media-viewer .${k}-media-viewer-next {
                bottom: 24px;
                top: auto;
                margin-top: 0;
            }

            &.${k}-media-viewer .${k}-media-viewer-prev {
                left: 16px;
            }

            &.${k}-media-viewer .${k}-media-viewer-next {
                right: 16px;
            }
        }
    `;
});
