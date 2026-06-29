import {css, keyframes} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, setAlpha} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

const flowCanvasLoading = keyframes`
    0%, 100% {
        background-position: 10% 12%, 90% 10%, 15% 90%, 82% 18%, 30% 12%, 0 0;
        filter: saturate(1.08) contrast(1.03) hue-rotate(0deg);
    }
    20% {
        background-position: 68% 22%, 34% 86%, 82% 42%, 28% 64%, 76% 32%, 0 0;
        filter: saturate(1.15) contrast(1.06) hue-rotate(2deg);
    }
    40% {
        background-position: 76% 70%, 12% 76%, 78% 18%, 18% 78%, 38% 82%, 0 0;
        filter: saturate(1.2) contrast(1.07) hue-rotate(-3deg);
    }
    60% {
        background-position: 38% 82%, 76% 36%, 24% 28%, 70% 82%, 18% 46%, 0 0;
        filter: saturate(1.16) contrast(1.06) hue-rotate(3deg);
    }
    80% {
        background-position: 20% 48%, 62% 16%, 46% 76%, 88% 44%, 54% 24%, 0 0;
        filter: saturate(1.12) contrast(1.05) hue-rotate(-2deg);
    }
`;

const flowDriftA = keyframes`
    0%, 100% { transform: translate3d(-16%, -9%, 0) scale(1.04, 1.12) rotate(-6deg); opacity: .9; }
    20% { transform: translate3d(5%, -15%, 0) scale(1.16, 1.01) rotate(2deg); opacity: .98; }
    40% { transform: translate3d(16%, 2%, 0) scale(1.1, 1.15) rotate(7deg); opacity: .9; }
    60% { transform: translate3d(7%, 15%, 0) scale(1.17, 1.06) rotate(4deg); opacity: .96; }
    80% { transform: translate3d(-12%, 10%, 0) scale(1.08, 1.17) rotate(-4deg); opacity: .92; }
`;

const flowDriftB = keyframes`
    0%, 100% { transform: translate3d(16%, 12%, 0) scale(1.14, 1.03) rotate(5deg); opacity: .7; }
    20% { transform: translate3d(1%, 17%, 0) scale(1.04, 1.17) rotate(-1deg); opacity: .62; }
    40% { transform: translate3d(-16%, 5%, 0) scale(1, 1.14) rotate(-7deg); opacity: .72; }
    60% { transform: translate3d(-12%, -13%, 0) scale(1.11, 1.04) rotate(-5deg); opacity: .66; }
    80% { transform: translate3d(8%, -14%, 0) scale(1.18, 1.02) rotate(3deg); opacity: .7; }
`;

const defaults = {
    radius: '4px',
    mediaRadius: '6px',
    border: '1px solid #E5E8EE',
    titleColor: '#3F3F51',
    descriptionColor: '#868A9C',
    progressBg: '#f0f2f4',
    file: {
        mini: {
            width: '160px',
            minHeight: '40px',
            iconSize: '24px',
            padding: '8px',
            gap: '8px',
        },
        small: {
            width: '160px',
            minHeight: '48px',
            iconSize: '32px',
            padding: '8px',
            gap: '8px',
        },
        default: {
            width: '160px',
            minHeight: '54px',
            iconSize: '32px',
            padding: '8px',
            gap: '8px',
        },
        large: {
            width: '192px',
            minHeight: '64px',
            iconSize: '40px',
            padding: '8px',
            gap: '8px',
        },
    },
    fileIcon: {
        defaultColor: '#596079',
        pdfColor: '#D14343',
        docColor: '#2D6AE3',
        sheetColor: '#228B52',
        slideColor: '#D97706',
        archiveColor: '#6F52D9',
        imageColor: '#0B84C6',
        videoColor: '#D83A74',
        audioColor: '#AF7C00',
    },
    maskBg: 'linear-gradient(180deg, rgba(21, 27, 30, 0.04), rgba(21, 27, 30, 0.62))',
    /** 与 Upload 画廊 `overlap` 一致，用于图片默认预览遮罩 */
    imagePreview: {
        bgColor: 'rgba(21, 27, 30, .5)',
        color: '#fff',
        iconGap: '16px',
    },
    errorMaskBg: 'rgba(21, 27, 30, 0.46)',
    loadingOverlayBg: 'rgba(15, 23, 42, 0.42)',
    errorTextColor: theme.color.danger,
    actionBg: 'rgba(255, 255, 255, 0.18)',
    actionColor: '#FFFFFF',
    actionHoverBg: 'rgba(255, 255, 255, 0.26)',
    deleteBg: 'rgba(63, 68, 81, 0.72)',
    deleteColor: '#FFFFFF',
    deleteHoverBg: 'rgba(63, 68, 81, 0.82)',
    deleteHoverColor: '#FFFFFF',
    deleteShadow: '0 2px 8px rgba(15, 23, 42, 0.16)',
    listGap: '8px',
    scrollbarThumb: 'rgba(63, 68, 81, 0.26)',
    scrollbarThumbHover: 'rgba(63, 68, 81, 0.42)',
};

let fileCard: typeof defaults;
setDefault(() => {
    fileCard = deepDefaults(theme, {fileCard: defaults}).fileCard;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        &.${k}-file-card {
            position: relative;
            display: inline-flex;
            flex: 0 0 auto;
            align-self: flex-start;
            vertical-align: top;
            width: auto;
            max-width: 100%;
            min-width: 0;
            border: ${fileCard.border};
            border-radius: ${fileCard.radius};
            background: #FFFFFF;
            box-sizing: border-box;
            overflow: visible;
        }

        &.${k}-file-card.${k}-file-card-file {
            width: ${fileCard.file.small.width};
            min-height: ${fileCard.file.small.minHeight};
            border: ${fileCard.border};
            border-radius: ${fileCard.radius};
        }

        &.${k}-file-card.${k}-file-card-file.${k}-file-card-mini {
            width: ${fileCard.file.mini.width};
            min-height: ${fileCard.file.mini.minHeight};
        }

        &.${k}-file-card.${k}-file-card-file.${k}-file-card-small {
            width: ${fileCard.file.small.width};
            min-height: ${fileCard.file.small.minHeight};
        }

        &.${k}-file-card.${k}-file-card-file.${k}-file-card-default {
            width: ${fileCard.file.default.width};
            min-height: ${fileCard.file.default.minHeight};
        }

        &.${k}-file-card.${k}-file-card-file.${k}-file-card-large {
            width: ${fileCard.file.large.width};
            min-height: ${fileCard.file.large.minHeight};
        }

        &.${k}-file-card.${k}-file-card-media.${k}-file-card-type-image {
            border: none;
            background: transparent;
        }

        &.${k}-file-card.${k}-file-card-media.${k}-file-card-type-video {
            border: none;
            background: transparent;
        }

        &.${k}-file-card.${k}-file-card-media.${k}-file-card-type-audio {
            border: none;
            background: transparent;
        }

        .${k}-file-card-media-shell {
            position: relative;
            min-width: 0;
            border-radius: ${fileCard.mediaRadius};
            box-sizing: border-box;
            overflow: hidden;
        }

        .${k}-file-card-media-view {
            display: inline-flex;
        }

        .${k}-file-card-media-status-layer {
            position: absolute;
            inset: 0;
            z-index: 4;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
        }

        .${k}-file-card-media-loading-overlay {
            position: absolute;
            inset: 0;
            z-index: 2;
            border-radius: inherit;
            background: ${fileCard.loadingOverlayBg};
            pointer-events: none;
        }

        .${k}-file-card-media-status-layer > * {
            pointer-events: auto;
        }

        .${k}-file-card-media-error-artwork-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            min-width: 0;
            gap: 4px;
            padding: 0 4px;
            border-radius: inherit;
            background: #F3F5F6;
            box-sizing: border-box;
        }

        .${k}-file-card-media-error-artwork-icon {
            display: block;
            width: 32px;
            height: 32px;
            flex: 0 0 auto;
        }

        .${k}-file-card-file-shell {
            position: relative;
            width: 100%;
            min-width: 0;
            border-radius: inherit;
            overflow: hidden;
            background: linear-gradient(
                90deg,
                ${fileCard.progressBg} 0 var(--file-card-progress-percent, 0%),
                #FFFFFF var(--file-card-progress-percent, 0%) 100%
            );
        }

        .${k}-file-card-file-main {
            display: flex;
            align-items: center;
            width: 100%;
            min-width: 0;
            gap: ${fileCard.file.small.gap};
            padding: ${fileCard.file.small.padding};
            box-sizing: border-box;
        }

        &.${k}-file-card.${k}-file-card-mini .${k}-file-card-file-main {
            gap: ${fileCard.file.mini.gap};
            padding: ${fileCard.file.mini.padding};
        }

        &.${k}-file-card.${k}-file-card-large .${k}-file-card-file-main {
            gap: ${fileCard.file.large.gap};
            padding: ${fileCard.file.large.padding};
        }

        &.${k}-file-card.${k}-file-card-default .${k}-file-card-file-main {
            gap: ${fileCard.file.default.gap};
            padding: ${fileCard.file.default.padding};
        }

        .${k}-file-card-file-icon,
        .${k}-file-card-file-media-view {
            width: ${fileCard.file.small.iconSize};
            height: ${fileCard.file.small.iconSize};
            flex: 0 0 auto;
            border-radius: 4px;
            overflow: hidden;
        }

        .${k}-file-card-file-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: ${fileCard.fileIcon.defaultColor};
        }

        .${k}-file-card-file-icon .${k}-icon {
            font-size: 16px;
            line-height: 1;
        }

        &.${k}-file-card.${k}-file-card-mini .${k}-file-card-file-icon,
        &.${k}-file-card.${k}-file-card-mini .${k}-file-card-file-media-view {
            width: ${fileCard.file.mini.iconSize};
            height: ${fileCard.file.mini.iconSize};
        }

        &.${k}-file-card.${k}-file-card-mini .${k}-file-card-file-icon {
            font-size: 10px;
        }

        &.${k}-file-card.${k}-file-card-default .${k}-file-card-file-icon,
        &.${k}-file-card.${k}-file-card-default .${k}-file-card-file-media-view {
            width: ${fileCard.file.default.iconSize};
            height: ${fileCard.file.default.iconSize};
        }

        &.${k}-file-card.${k}-file-card-large .${k}-file-card-file-icon,
        &.${k}-file-card.${k}-file-card-large .${k}-file-card-file-media-view {
            width: ${fileCard.file.large.iconSize};
            height: ${fileCard.file.large.iconSize};
        }

        .${k}-file-card-file-icon-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .${k}-file-card-file-icon-pdf {
            color: ${fileCard.fileIcon.pdfColor};
        }

        .${k}-file-card-file-icon-doc {
            color: ${fileCard.fileIcon.docColor};
        }

        .${k}-file-card-file-icon-sheet {
            color: ${fileCard.fileIcon.sheetColor};
        }

        .${k}-file-card-file-icon-slide {
            color: ${fileCard.fileIcon.slideColor};
        }

        .${k}-file-card-file-icon-archive {
            color: ${fileCard.fileIcon.archiveColor};
        }

        .${k}-file-card-file-icon-image {
            color: ${fileCard.fileIcon.imageColor};
        }

        .${k}-file-card-file-icon-video {
            color: ${fileCard.fileIcon.videoColor};
        }

        .${k}-file-card-file-icon-audio {
            color: ${fileCard.fileIcon.audioColor};
        }

        .${k}-file-card-file-content {
            flex: 1;
            min-width: 0;
        }

        .${k}-file-card-title {
            display: flex;
            align-items: baseline;
            min-width: 0;
            color: ${fileCard.titleColor};
            font-weight: 400;
        }

        &.${k}-file-card.${k}-file-card-mini .${k}-file-card-title {
            font-size: 13px;
            line-height: 18px;
        }

        &.${k}-file-card.${k}-file-card-large .${k}-file-card-title {
            font-size: 15px;
            line-height: 22px;
        }

        .${k}-file-card-title-prefix {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .${k}-file-card-title-suffix {
            flex: 0 0 auto;
            white-space: nowrap;
        }

        .${k}-file-card-title-status {
            color: ${fileCard.titleColor};
        }

        .${k}-file-card-title-status-error {
            color: ${theme.color.danger};
        }

        .${k}-file-card-description {
            color: ${fileCard.descriptionColor};
            font-size: 12px;
            line-height: 18px;
            margin-top: 2px;
        }

        &.${k}-file-card.${k}-file-card-mini .${k}-file-card-description {
            display: none;
        }

        .${k}-file-card-action {
            color: inherit;
            border-radius: 999px;
            background: transparent;
            transition: background ${theme.transition.small}, color ${theme.transition.small}, opacity ${theme.transition.small};
        }

        .${k}-file-card-mask {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: inherit;
        }

        .${k}-file-card-mask {
            gap: 10px;
            background: ${fileCard.maskBg};
            opacity: 0;
            transition: opacity ${theme.transition.small};
            pointer-events: none;
        }

        .${k}-file-card-error-text {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            min-width: 0;
            color: ${fileCard.errorTextColor};
            font-size: 12px;
            line-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .${k}-file-card-media-error-artwork-text {
            width: auto;
            max-width: 100%;
            box-sizing: border-box;
            color: #FF4433;
            font-size: 12px;
            line-height: 12px;
            text-shadow: none;
        }

        .${k}-file-card-mask > * {
            pointer-events: auto;
        }

        .${k}-file-card-mask .${k}-file-card-action {
            color: ${fileCard.actionColor};
            background: ${fileCard.actionBg};
        }

        .${k}-file-card-mask .${k}-file-card-action:hover {
            background: ${fileCard.actionHoverBg};
        }

        &.${k}-file-card:hover .${k}-file-card-mask {
            opacity: 1;
        }

        &.${k}-file-card.${k}-file-card-type-image .${k}-file-card-mask {
            background: ${fileCard.imagePreview.bgColor};
            gap: ${fileCard.imagePreview.iconGap};
            color: ${fileCard.imagePreview.color};
            transition: opacity ${theme.transition.middle};
        }

        &.${k}-file-card.${k}-file-card-type-image .${k}-file-card-mask .${k}-icon:not(:hover) {
            color: inherit;
        }

        .${k}-file-card-file-mask {
            background: rgba(255, 255, 255, 0.92);
            gap: 8px;
        }

        .${k}-file-card-file-mask .${k}-file-card-action {
            color: #5D6378;
            background: rgba(63, 68, 81, 0.08);
        }

        .${k}-file-card-file-mask .${k}-file-card-action:hover {
            color: ${theme.color.primary};
            background: ${setAlpha(theme.color.primary, 0.12)};
        }

        .${k}-file-card-media-loading-text {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            min-width: 0;
            color: #FFFFFF;
            font-size: 12px;
            line-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);
        }

        .${k}-file-card-media-progress-text {
            position: absolute;
            top: 3px;
            left: 20px;
            z-index: 4;
            color: #FFFFFF;
            font-size: 11px;
            line-height: 14px;
            white-space: nowrap;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-shell {
            isolation: isolate;
            background:
                radial-gradient(ellipse 54% 50% at 4% 38%, #cfdef3 0 9%, #9fbee8 34%, #98aee8 53%, transparent 68%),
                radial-gradient(ellipse 54% 52% at 98% 22%, #8fdfe2 0 9%, #8bc8e5 29%, #9b9fe3 50%, transparent 71%),
                radial-gradient(ellipse 78% 72% at 42% 108%, #5368db 0 19%, #7384dc 37%, #9d99df 56%, transparent 78%),
                radial-gradient(ellipse 80% 72% at 68% 25%, #dfd2f3 0 12%, #b8ace4 31%, #929edc 54%, transparent 80%),
                radial-gradient(ellipse 46% 43% at 34% 18%, #afe4e4 0 10%, #9fc8e1 35%, transparent 67%),
                linear-gradient(135deg, #bad9ee 0%, #86a9e3 25%, #7d89dc 50%, #ad9de3 74%, #91c5e2 100%);
            background-size: 195% 195%, 205% 205%, 175% 175%, 185% 185%, 210% 210%, 100% 100%;
            background-repeat: no-repeat;
            background-color: #889be0;
            box-shadow: none;
            animation: ${flowCanvasLoading} 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-shell::before {
            content: '';
            position: absolute;
            inset: -60%;
            pointer-events: none;
            will-change: transform;
            backface-visibility: hidden;
            background:
                radial-gradient(ellipse 22% 30% at 20% 42%, rgba(213, 224, 247, 0.68) 0 24%, transparent 70%),
                radial-gradient(ellipse 27% 33% at 62% 34%, rgba(89, 211, 217, 0.68) 0 22%, transparent 70%),
                radial-gradient(ellipse 38% 36% at 82% 70%, rgba(178, 156, 236, 0.86) 0 25%, transparent 72%),
                radial-gradient(ellipse 30% 34% at 46% 80%, rgba(104, 141, 224, 0.72) 0 23%, transparent 72%),
                linear-gradient(118deg, transparent 27%, rgba(205, 216, 244, 0.3) 42%, rgba(144, 183, 224, 0.22) 52%, transparent 68%);
            background-size: auto, auto, auto, auto, 130% 130%;
            filter: blur(12px) saturate(1.22) contrast(1.04);
            animation: ${flowDriftA} 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-shell::after {
            content: '';
            position: absolute;
            inset: -60%;
            pointer-events: none;
            will-change: transform;
            backface-visibility: hidden;
            background:
                radial-gradient(ellipse 34% 35% at 28% 75%, rgba(50, 75, 236, 0.88) 0 23%, transparent 70%),
                radial-gradient(ellipse 28% 35% at 74% 22%, rgba(206, 190, 238, 0.76) 0 25%, transparent 72%),
                radial-gradient(ellipse 29% 33% at 90% 76%, rgba(77, 199, 214, 0.62) 0 22%, transparent 71%),
                radial-gradient(ellipse 28% 31% at 52% 52%, rgba(105, 134, 231, 0.68) 0 22%, transparent 70%),
                linear-gradient(52deg, transparent 31%, rgba(98, 109, 238, 0.4) 45%, rgba(222, 205, 250, 0.38) 56%, transparent 70%);
            background-size: auto, auto, auto, auto, 145% 145%;
            filter: blur(14px) saturate(1.24) contrast(1.05);
            mix-blend-mode: screen;
            opacity: 0.68;
            animation: ${flowDriftB} 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-loading-overlay {
            background: linear-gradient(180deg, rgba(20, 27, 52, 0.12), rgba(20, 27, 52, 0.34));
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-loading-indicator {
            width: 16px;
            height: 16px;
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-placeholder,
        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-audio-card {
            background: transparent;
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-placeholder-asset,
        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-placeholder .${k}-icon {
            display: block;
            filter: brightness(0) invert(1);
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-placeholder .${k}-icon {
            color: #FFFFFF;
            font-size: clamp(18px, 32%, 30px);
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-audio-card {
            align-items: center;
            justify-content: center;
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-media-loading-video-icon {
            color: #FFFFFF;
        }

        &.${k}-file-card.${k}-file-card-loading-flow .${k}-file-card-media-status-layer {
            color: #FFFFFF;
        }

        &.${k}-file-card > .${k}-file-card-delete {
            position: absolute;
            top: 2px;
            right: 2px;
            z-index: 5;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            min-width: 16px;
            height: 16px;
            min-height: 16px;
            flex: 0 0 16px;
            margin: 0;
            padding: 0;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            color: ${fileCard.deleteColor};
            background: ${fileCard.deleteBg};
            box-shadow: ${fileCard.deleteShadow};
            box-sizing: border-box;
            line-height: 1;
            outline: none;
            opacity: 0;
            pointer-events: none;
            transition: background ${theme.transition.small}, opacity ${theme.transition.small};
        }

        &.${k}-file-card > .${k}-file-card-delete .${k}-icon {
            margin: 0;
            color: inherit;
            font-size: 10px;
            line-height: 1;
        }

        &.${k}-file-card.${k}-file-card-mini > .${k}-file-card-delete {
            width: 12px;
            min-width: 12px;
            height: 12px;
            min-height: 12px;
            flex-basis: 12px;
        }

        &.${k}-file-card.${k}-file-card-mini > .${k}-file-card-delete .${k}-icon {
            font-size: 8px;
        }

        &.${k}-file-card:hover > .${k}-file-card-delete {
            opacity: 1;
            pointer-events: auto;
        }

        &.${k}-file-card > .${k}-file-card-delete:hover,
        &.${k}-file-card > .${k}-file-card-delete:focus {
            color: ${fileCard.deleteHoverColor};
            background: ${fileCard.deleteHoverBg};
            box-shadow: ${fileCard.deleteShadow};
        }

        &.${k}-file-card.${k}-file-card-error .${k}-file-card-description {
            color: ${theme.color.danger};
        }

        &.${k}-file-card-list {
            display: flex;
            gap: ${fileCard.listGap};
            align-items: flex-start;
        }

        &.${k}-file-card-list-wrap {
            flex-wrap: wrap;
            align-items: flex-start;
        }

        &.${k}-file-card-list-scrollX {
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            box-sizing: border-box;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            scrollbar-width: thin;
            scrollbar-color: transparent transparent;
            scrollbar-gutter: stable;
        }

        &.${k}-file-card-list-scrollY {
            flex-wrap: wrap;
            align-content: flex-start;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
            height: 100%;
            max-height: 108px;
            min-height: 0;
            max-width: 100%;
            padding-right: 6px;
            scrollbar-width: thin;
            scrollbar-color: transparent transparent;
            scrollbar-gutter: stable;
        }

        &.${k}-file-card-list-scrollX::-webkit-scrollbar {
            height: 8px;
        }

        &.${k}-file-card-list-scrollY::-webkit-scrollbar {
            width: 8px;
        }

        &.${k}-file-card-list-scrollX::-webkit-scrollbar-track,
        &.${k}-file-card-list-scrollY::-webkit-scrollbar-track {
            background: transparent;
        }

        &.${k}-file-card-list-scrollX::-webkit-scrollbar-thumb,
        &.${k}-file-card-list-scrollY::-webkit-scrollbar-thumb {
            border-radius: 999px;
            border: 2px solid transparent;
            background: transparent;
            background-clip: content-box;
        }

        &.${k}-file-card-list-scrollX:hover,
        &.${k}-file-card-list-scrollY:hover {
            scrollbar-color: ${fileCard.scrollbarThumb} transparent;
        }

        &.${k}-file-card-list-scrollX:hover::-webkit-scrollbar-thumb,
        &.${k}-file-card-list-scrollY:hover::-webkit-scrollbar-thumb {
            background: ${fileCard.scrollbarThumb};
            background-clip: content-box;
        }

        &.${k}-file-card-list-scrollX:hover::-webkit-scrollbar-thumb:hover,
        &.${k}-file-card-list-scrollY:hover::-webkit-scrollbar-thumb:hover {
            background: ${fileCard.scrollbarThumbHover};
            background-clip: content-box;
        }

        .${k}-file-card-list-prefix,
        .${k}-file-card-list-suffix {
            flex: 0 0 auto;
        }
    `;
});
