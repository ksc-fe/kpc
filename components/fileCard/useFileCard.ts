import {useInstance} from 'intact';
import {useConfigContext} from '../config';
import {_$} from '../../i18n';
import type {MediaStatus, MediaType} from '../media';
import type {FileCard, FileCardStatus, FileCardValue} from './fileCard';
import {
    fileBadgeClassName,
    formatBytes,
    getFileCardDisplayName,
    guessFileExtension,
    resolveFileCardType,
    splitFileName,
} from './fileCardUtils';
import type {ResolvedFileCardType} from './fileCardUtils';
import {getBuiltinFileIconByExtension} from './fileCardAssets';
import {
    mediaAudioCardErrorUrl,
    mediaImageCardErrorUrl,
    mediaVideoCardErrorUrl,
} from '../media/mediaAssets';

export function useFileCard() {
    const instance = useInstance() as FileCard;
    const config = useConfigContext();

    function getFileName() {
        return getFileCardDisplayName(instance.get('name'), instance.get('src'));
    }

    // 文件行缩略图按真实资源类型识别，显式 type=file 不阻止媒体缩略图。
    function getResourceType(): ResolvedFileCardType {
        const type = instance.get('type');

        return resolveFileCardType(type === 'file' ? undefined : type, getFileName(), instance.get('src'));
    }

    function getResolvedType(): ResolvedFileCardType {
        return resolveFileCardType(instance.get('type'), getFileName(), instance.get('src'));
    }

    function getDisplayStatus(): FileCardStatus {
        return instance.get('status') || 'default';
    }

    function getGuessExtension() {
        return guessFileExtension(instance.get('type'), getFileName());
    }

    function isSpecifiedText(value: string | null | undefined) {
        return value !== undefined && value !== null && value !== '';
    }

    function getErrorText() {
        const errorText = instance.get('errorText');

        if (errorText === '') return '';
        return isSpecifiedText(errorText) ? errorText! : _$('上传失败');
    }

    function getLoadingText() {
        const loadingText = instance.get('loadingText');

        if (loadingText === '') return '';
        return isSpecifiedText(loadingText) ? loadingText! : _$('上传中');
    }

    function hasSpecifiedMediaLoadingText() {
        return isSpecifiedText(instance.get('loadingText'));
    }

    function hasSpecifiedMediaErrorText() {
        return isSpecifiedText(instance.get('errorText'));
    }

    function hasPercentProp() {
        const p = instance.get('percent');

        return p !== undefined && p !== null && !Number.isNaN(p);
    }

    // 进度只影响展示，统一限制在 0 到 100。
    function getProgressPercent() {
        const percent = instance.get('percent');
        if (percent === undefined || percent === null || Number.isNaN(percent)) return 0;

        return Math.max(0, Math.min(100, percent));
    }

    function getProgressStyle() {
        if (!isLoading() || !hasPercentProp()) return undefined;

        return `--file-card-progress-percent: ${getProgressPercent()}%;`;
    }

    // 文件行状态文案统一带省略号和进度。
    function getInlineStatusText() {
        const status = getDisplayStatus();
        if (status === 'loading') {
            const loadingText = getLoadingText();
            if (!loadingText) return hasPercentProp() ? `${Math.round(getProgressPercent())}%` : '';

            return hasPercentProp() ?
                `${loadingText}... ${Math.round(getProgressPercent())}%` :
                `${loadingText}...`;
        }
        if (status === 'error') return getErrorText();

        return '';
    }

    function getByteText() {
        const byte = instance.get('byte');
        if (byte === undefined || byte === null || byte < 0) return '';

        return formatBytes(byte);
    }

    function getDisplayDescription() {
        if (isError()) return getErrorText();
        if (isLoading()) return getInlineStatusText();

        const description = instance.get('description');
        if (description !== undefined && description !== null && description !== '') return description;

        const byteText = getByteText();
        const statusText = getInlineStatusText();
        if (byteText && statusText) return `${byteText} · ${statusText}`;

        return byteText || statusText;
    }

    // 事件回调统一返回当前卡片的结构化信息。
    function getValue(): FileCardValue {
        return {
            name: getFileName(),
            type: instance.get('type'),
            resolvedType: getResolvedType(),
            status: getDisplayStatus(),
            src: instance.get('src'),
            poster: instance.get('poster'),
            description: getDisplayDescription(),
            errorText: isError() ? getErrorText() : undefined,
            loadingText: instance.get('loadingText'),
            byte: instance.get('byte'),
            percent: hasPercentProp() ? getProgressPercent() : undefined,
            size: instance.get('size') || 'default',
        };
    }

    function isMediaType() {
        const resolvedType = getResolvedType();

        return resolvedType === 'image' || resolvedType === 'video' || resolvedType === 'audio';
    }

    function isResourceMediaType() {
        const resourceType = getResourceType();

        return resourceType === 'image' || resourceType === 'video' || resourceType === 'audio';
    }

    function isLoading() {
        return getDisplayStatus() === 'loading';
    }

    function isError() {
        return getDisplayStatus() === 'error';
    }

    function isDone() {
        return getDisplayStatus() === 'done';
    }

    function isMini() {
        return (instance.get('size') || 'default') === 'mini';
    }

    function hasSource() {
        return !!instance.get('src');
    }

    function shouldShowDeleteButton() {
        return !!instance.get('showDelIcon');
    }

    // mini 文件卡片在 loading/error 时，用状态文案占用标题位置。
    function shouldShowMiniFileStatusTitle() {
        return isMini() && !isMediaType() && (isLoading() || isError()) && !!getInlineStatusText();
    }

    function getFileTitleText() {
        if (shouldShowMiniFileStatusTitle()) return getInlineStatusText();

        return getFileName();
    }

    function getNamePrefix() {
        return splitFileName(getFileName()).prefix;
    }

    function getNameSuffix() {
        return splitFileName(getFileName()).suffix;
    }

    function hasNameSuffix() {
        return !!getNameSuffix();
    }

    function getMediaType(): MediaType {
        return getResolvedType() as MediaType;
    }

    function getFileMediaType(): MediaType {
        return getResourceType() as MediaType;
    }

    function getMediaStatus(): MediaStatus {
        if (!isMediaType()) return 'default';

        return getDisplayStatus() as MediaStatus;
    }

    function getMediaShowPreview() {
        if (isError()) return false;

        return instance.get('showPreview');
    }

    function shouldShowMediaLoadingOverlay() {
        const mediaType = getMediaType();

        return isLoading() && mediaType === 'audio' && (hasSpecifiedMediaLoadingText() || hasPercentProp());
    }

    function getMediaSize() {
        return instance.get('size') || 'default';
    }

    function getFileMediaSize() {
        if (isMini()) return 24;

        return 32;
    }

    function shouldHideMediaStatusTextForSize() {
        const size = getMediaSize();

        return size === 'mini' || size === 'small';
    }

    // 显式媒体卡片只有在指定文案后才展示状态文字，mini/small 不展示。
    function shouldShowMediaStatusLayer() {
        if (!isMediaType()) return false;
        if (shouldHideMediaStatusTextForSize()) return false;
        if (isError()) return hasSpecifiedMediaErrorText();
        if (isLoading()) return hasSpecifiedMediaLoadingText();

        return false;
    }

    function getMediaLoadingText() {
        if (!isLoading() || !hasSpecifiedMediaLoadingText()) return '';

        return instance.get('loadingText') || '';
    }

    function getMediaErrorText() {
        if (isError() && hasSpecifiedMediaErrorText()) return instance.get('errorText') || '';

        return '';
    }

    function getMediaErrorArtworkIconSrc() {
        const mediaType = getMediaType();
        if (mediaType === 'audio') return mediaAudioCardErrorUrl;
        if (mediaType === 'video') return mediaVideoCardErrorUrl;

        return mediaImageCardErrorUrl;
    }

    function shouldRenderMediaErrorArtwork() {
        return isMediaType() && isError() && !shouldHideMediaStatusTextForSize() && hasSpecifiedMediaErrorText();
    }

    function shouldUseMediaErrorArtworkLayout() {
        return shouldRenderMediaErrorArtwork();
    }

    // 媒体卡片在 loading 且传入 percent 时都展示进度文本（不限制尺寸）。
    function shouldShowVisualMediaProgressText() {
        const mediaType = getMediaType();

        return isLoading() && hasPercentProp() && (mediaType === 'image' || mediaType === 'video' || mediaType === 'audio');
    }

    function getMediaProgressText() {
        return `${Math.round(getProgressPercent())}%`;
    }

    function getFileBadgeText() {
        if (getResourceType() === 'image') return 'IMG';
        if (getResourceType() === 'video') return 'VID';
        if (getResourceType() === 'audio') return 'AUD';
        const ext = getGuessExtension();
        if (!ext) return 'FILE';

        return ext.slice(0, 4).toUpperCase();
    }

    function getFileBadgeClassName() {
        return fileBadgeClassName(getGuessExtension(), getResourceType());
    }

    function hasCustomIcon() {
        return !isResourceMediaType() && !!instance.get('icon');
    }

    function getIconSource() {
        return instance.get('icon') || '';
    }

    function getBuiltinIconSource() {
        return getBuiltinFileIconByExtension(getGuessExtension(), getResourceType());
    }

    function hasBuiltinIcon() {
        return !!getBuiltinIconSource();
    }

    function shouldShowFileMedia() {
        if (isMediaType()) return false;
        if (!isResourceMediaType() || !hasSource()) return false;

        return instance.get('showPreview') !== false;
    }

    // 根节点类名集中描述类型、尺寸与状态，样式层只消费类名。
    function getRootClassNameObj() {
        const {k} = config;
        const size = instance.get('size') || 'default';
        const resolvedType = getResolvedType();

        return {
            [`${k}-file-card-file`]: !isMediaType(),
            [`${k}-file-card-media`]: isMediaType(),
            [`${k}-file-card-file-media`]: shouldShowFileMedia(),
            [`${k}-file-card-type-${resolvedType}`]: true,
            [`${k}-file-card-${size}`]: true,
            [`${k}-file-card-loading`]: isLoading(),
            [`${k}-file-card-error`]: isError(),
            [`${k}-file-card-done`]: isDone(),
            [`${k}-file-card-media-error-artwork`]: shouldUseMediaErrorArtworkLayout(),
            [`${k}-file-card-progressing`]: isLoading() && hasPercentProp(),
            [`${k}-file-card-deletable`]: shouldShowDeleteButton(),
        };
    }

    function onClick(e: MouseEvent) {
        instance.trigger('click', getValue(), e);
    }

    function onPreview(media: any, e: MouseEvent) {
        e.stopPropagation();
        instance.trigger('preview', getValue(), e);
    }

    function onDelete(e: MouseEvent) {
        e.stopPropagation();
        instance.trigger('delete', getValue(), e);
    }

    return {
        getRootClassNameObj,
        getProgressStyle,
        onClick,
        isMediaType,
        shouldShowDeleteButton,
        onDelete,
        getValue,
        onPreview,
        isLoading,
        isError,
        getMediaLoadingText,
        getMediaErrorText,
        getMediaErrorArtworkIconSrc,
        shouldShowMediaStatusLayer,
        shouldRenderMediaErrorArtwork,
        shouldUseMediaErrorArtworkLayout,
        shouldShowVisualMediaProgressText,
        getMediaProgressText,
        getFileBadgeClassName,
        getFileBadgeText,
        hasCustomIcon,
        getIconSource,
        hasBuiltinIcon,
        getBuiltinIconSource,
        getFileName,
        getFileTitleText,
        getNamePrefix,
        hasNameSuffix,
        getNameSuffix,
        shouldShowMiniFileStatusTitle,
        getDisplayDescription,
        getMediaType,
        getFileMediaType,
        getMediaStatus,
        getMediaShowPreview,
        shouldShowMediaLoadingOverlay,
        getMediaSize,
        getFileMediaSize,
        shouldShowFileMedia,
    };
}
