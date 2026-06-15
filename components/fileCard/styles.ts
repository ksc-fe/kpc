import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, setAlpha} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

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
