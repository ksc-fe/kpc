import {createRef, nextTick, onMounted, onUnmounted, useInstance} from 'intact';
import {useConfigContext} from '../config';
import {MediaGroupContext} from './context';
import type {Media} from './media';
import type {MediaMaskValue, MediaNativeProps, MediaStatus, MediaViewerItem, MediaValue} from './types';
import {
    getMediaDisplayName,
    isNamedMediaSize,
    normalizeMediaLength,
    parseMediaPixelLength,
    resolveMediaType,
} from './mediaUtils';
import {
    mediaAudioCardErrorUrl,
    mediaAudioCardUrl,
    mediaImageCardErrorUrl,
    mediaImagePlaceholderUrl,
    mediaVideoCardErrorUrl,
    mediaVideoPlaceholderUrl,
} from './mediaAssets';

export function useMedia() {
    const instance = useInstance() as Media;
    const config = useConfigContext();
    const group = MediaGroupContext.useContext();
    const imageRef = createRef<HTMLImageElement>();
    const videoRef = createRef<HTMLVideoElement>();
    const audioRef = createRef<HTMLAudioElement>();
    let syncTimer: number | undefined;

    onMounted(() => {
        group.value?.register(instance, {
            canPreview,
            getViewerItem,
        });
        nextTick(scheduleNativeStatusSync);
    });

    onUnmounted(() => {
        group.value?.unregister(instance);
        clearNativeStatusSync();
    });

    // 根据显式类型或文件名推断媒体类型，兜底为图片。
    function getResolvedType() {
        const {name, type, src} = instance.get();

        return resolveMediaType(type, name, src);
    }

    // 统一得到展示名称，优先使用 name，其次从 src 中提取。
    function getFileName() {
        const {name, src} = instance.get();

        return getMediaDisplayName(name, src);
    }

    function hasSource() {
        return !!instance.get('src');
    }

    function getInternalStatus(): MediaStatus {
        const status = (instance as any).get('$status') as MediaStatus | undefined;

        if (status) return status;
        return hasSource() ? 'loading' : 'default';
    }

    // status 属性非 default 时视为外部受控状态。
    function getDisplayStatus(): MediaStatus {
        const status = instance.get('status');

        if (status && status !== 'default') return status;
        return getInternalStatus();
    }

    // 更新内部状态，并在离开 loading 后停止原生状态同步。
    function setInternalStatus(status: MediaStatus) {
        (instance as any).set('$status', status);
        if (status !== 'loading') clearNativeStatusSync();
    }

    // 资源身份变化后重新进入初始加载状态。
    function resetInternalStatus() {
        setInternalStatus(hasSource() ? 'loading' : 'default');
        nextTick(scheduleNativeStatusSync);
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

    function isMediaReady() {
        return getInternalStatus() === 'done' || isDone();
    }

    // 自定义遮罩层仅在 default/done 展示，避免与 loading/error 状态层冲突。
    function shouldShowMaskLayer() {
        const status = getDisplayStatus();

        return status === 'default' || status === 'done';
    }

    function canPreview() {
        return !!instance.get('showPreview') && hasSource() && isDone();
    }

    function shouldShowVideoPlayTrigger() {
        return !!instance.get('showPreview') && shouldShowVideo() && isDone();
    }

    // 事件和插槽使用的公共媒体信息。
    function getValue(): MediaValue {
        return {
            name: instance.get('name'),
            type: instance.get('type'),
            resolvedType: getResolvedType(),
            status: getDisplayStatus(),
            src: instance.get('src'),
            poster: instance.get('poster'),
            size: instance.get('size') || 'default',
        };
    }

    // 预览层使用展示名称，避免无 name 时标题为空。
    function getViewerItem(): MediaViewerItem {
        return {
            ...getValue(),
            name: getFileName(),
        };
    }

    // mask 插槽可通过 preview(event) 主动触发预览。
    function getMaskValue(): MediaMaskValue {
        return {
            ...getViewerItem(),
            canPreview: canPreview(),
            preview: onPreview,
        };
    }

    // 根节点类名集中由状态、类型、尺寸和预览能力决定。
    function getRootClassNameObj() {
        const {k} = config;
        const size = instance.get('size');
        const resolvedType = getResolvedType();

        return {
            [`${k}-media`]: true,
            [`${k}-media-${resolvedType}`]: true,
            [`${k}-media-${size}`]: isNamedMediaSize(size),
            [`${k}-media-${getDisplayStatus()}`]: true,
            [`${k}-media-previewable`]: canPreview(),
            [`${k}-media-video-play-visible`]: shouldShowVideoPlayTrigger(),
        };
    }

    // 只传单边宽高时镜像另一边，保持默认正方形语义。
    function getRootStyle() {
        const size = instance.get('size');
        const width = instance.get('width');
        const height = instance.get('height');

        const style: Record<string, string | undefined> = {};
        const normalizedWidth = normalizeMediaLength(width);
        const normalizedHeight = normalizeMediaLength(height);

        if (normalizedWidth || normalizedHeight) {
            style.width = normalizedWidth || normalizedHeight;
            style.height = normalizedHeight || normalizedWidth;
            return style;
        }

        if (typeof size === 'number') {
            style.width = `${size}px`;
            style.height = `${size}px`;
            return style;
        }

        if (typeof size === 'string' && !isNamedMediaSize(size)) {
            style.width = size;
            style.height = size;
        }

        return style;
    }

    function shouldShowImage() {
        return getResolvedType() === 'image' && hasSource() && !isError();
    }

    function shouldShowVideo() {
        return getResolvedType() === 'video' && hasSource() && !isError();
    }

    function shouldShowVisualMediaContent() {
        return isMediaReady();
    }

    function shouldShowAudioLoader() {
        return getResolvedType() === 'audio' && hasSource() && !isError();
    }

    function shouldShowAudioCard() {
        return getResolvedType() === 'audio';
    }

    function shouldShowErrorCard() {
        return isError();
    }

    function shouldShowPlaceholder() {
        return (!shouldShowImage() || !shouldShowVisualMediaContent()) &&
            (!shouldShowVideo() || !shouldShowVisualMediaContent()) &&
            !shouldShowErrorCard();
    }

    // poster 是组件级视频封面，不从 videoProps 中读取。
    function getPosterSource() {
        const poster = instance.get('poster');
        if (poster) return poster;

        return '';
    }

    function hasVideoPoster() {
        return !!getPosterSource();
    }

    function getAudioCardAssetSrc() {
        return mediaAudioCardUrl;
    }

    function getErrorCardAssetSrc() {
        const type = getResolvedType();

        if (type === 'video') return mediaVideoCardErrorUrl;
        if (type === 'audio') return mediaAudioCardErrorUrl;

        return mediaImageCardErrorUrl;
    }

    function getMediaCardIconStyle() {
        const {size, width, height} = instance.get();
        const widthPx = parseMediaPixelLength(width);
        const heightPx = parseMediaPixelLength(height);
        let shortest: number | undefined;

        if (widthPx !== undefined || heightPx !== undefined) {
            const resolvedWidth = widthPx === undefined ? heightPx : widthPx;
            const resolvedHeight = heightPx === undefined ? widthPx : heightPx;

            shortest = Math.min(resolvedWidth!, resolvedHeight!);
        } else if (size !== 'mini' && size !== 'small' && size !== 'default' && size !== 'large') {
            shortest = parseMediaPixelLength(size);
        }

        if (shortest !== undefined && shortest > 0 && shortest < 32) {
            return {
                width: `${shortest}px`,
                height: `${shortest}px`,
            };
        }

        return undefined;
    }

    function shouldShowLoadingIndicator() {
        return isLoading();
    }

    function shouldShowLoadingOverlay() {
        const type = getResolvedType();

        return isLoading() && hasSource() && shouldShowVisualMediaContent() && (type === 'image' || type === 'video');
    }

    function shouldShowLoadingVideoIcon() {
        return isLoading() && getResolvedType() === 'video' && hasSource() && shouldShowVisualMediaContent();
    }

    // 去掉已被组件接管的事件键，避免作为普通 attribute 透传到 DOM。
    function omitNativeHandlers(props: MediaNativeProps, keys: string[]) {
        const nextProps = {...props};

        keys.forEach(key => delete nextProps[key]);

        return nextProps;
    }

    // 内部状态先于用户回调更新，保证事件触发时状态已同步。
    function getMergedNativeHandler(
        props: MediaNativeProps,
        key: string,
        internalHandler: (e: Event) => void
    ) {
        const handler = props[key];
        if (typeof handler !== 'function') return internalHandler;

        return (e: Event) => {
            internalHandler(e);
            handler(e);
        };
    }

    // src 是组件级资源属性，imageProps 只补充原生属性。
    function getImageProps() {
        const imageProps = instance.get('imageProps') || {};
        const loadKey = 'onload';
        const errorKey = 'onerror';

        return {
            ...omitNativeHandlers(imageProps, [loadKey, errorKey]),
            alt: getFileName(),
            src: instance.get('src') || '',
            draggable: false,
            'ev-load': getMergedNativeHandler(imageProps, loadKey, onImageLoad),
            'ev-error': getMergedNativeHandler(imageProps, errorKey, onImageError),
        };
    }

    // src/poster 是组件级资源属性，videoProps 只补充原生行为。
    function getVideoProps() {
        const videoProps = instance.get('videoProps') || {};
        const loadedmetadataKey = 'onloadedmetadata';
        const loadeddataKey = 'onloadeddata';
        const canplayKey = 'oncanplay';
        const errorKey = 'onerror';

        return {
            preload: hasVideoPoster() ? 'metadata' : 'auto',
            muted: true,
            playsinline: true,
            controls: false,
            tabindex: -1,
            ...omitNativeHandlers(videoProps, [loadedmetadataKey, loadeddataKey, canplayKey, errorKey]),
            src: instance.get('src') || '',
            poster: getPosterSource() || undefined,
            'ev-loadedmetadata': getMergedNativeHandler(
                videoProps,
                loadedmetadataKey,
                onVideoMetadataLoad
            ),
            'ev-loadeddata': getMergedNativeHandler(
                videoProps,
                loadeddataKey,
                onVideoDataLoad
            ),
            'ev-canplay': getMergedNativeHandler(
                videoProps,
                canplayKey,
                onVideoDataLoad
            ),
            'ev-error': getMergedNativeHandler(videoProps, errorKey, onVideoError),
        };
    }

    // src/poster 改变时重建 video，避免浏览器保留旧封面或首帧。
    function getVideoKey() {
        return [
            instance.get('src') || '',
            getPosterSource() || '',
        ].join('|');
    }

    // 音频 loader 只负责 metadata 加载，展示由音频卡片承接。
    function getAudioLoaderProps() {
        const audioProps = instance.get('audioProps') || {};
        const loadedmetadataKey = 'onloadedmetadata';
        const errorKey = 'onerror';

        return {
            preload: 'metadata',
            ...omitNativeHandlers(audioProps, [loadedmetadataKey, errorKey]),
            src: instance.get('src') || '',
            'ev-loadedmetadata': getMergedNativeHandler(
                audioProps,
                loadedmetadataKey,
                onAudioLoad
            ),
            'ev-error': getMergedNativeHandler(audioProps, errorKey, onAudioError),
        };
    }

    function getPreviewIconClassName() {
        return getResolvedType() === 'image' ? 'k-icon-visible' : 'ion-ios-play';
    }

    function getPlaceholderIconClassName() {
        const resolvedType = getResolvedType();
        if (resolvedType === 'audio') return 'ion-ios-musical-note';

        return '';
    }

    function getPlaceholderAssetSrc() {
        const resolvedType = getResolvedType();
        if (resolvedType === 'video') return mediaVideoPlaceholderUrl;
        if (resolvedType === 'image') return mediaImagePlaceholderUrl;

        return '';
    }

    function getPreviewTitle() {
        const resolvedType = getResolvedType();
        if (resolvedType === 'video') return '播放视频';
        if (resolvedType === 'audio') return '播放音频';

        return '查看图片';
    }

    // 单项预览在自身维护显隐，分组内则交给 MediaGroup 管理。
    function isStandalonePreviewVisible() {
        return !group.value && !!(instance as any).get('$previewVisible');
    }

    // 关闭动画结束前保留预览节点，避免过早卸载。
    function isStandalonePreviewRendered() {
        return !group.value && !!(instance as any).get('$previewRendered');
    }

    function showStandalonePreview() {
        (instance as any).set({
            $previewRendered: true,
            $previewVisible: true,
        });
    }

    function closeStandalonePreview() {
        (instance as any).set('$previewVisible', false);
    }

    function afterStandalonePreviewClose() {
        (instance as any).set('$previewRendered', false);
    }

    function onClick(e: MouseEvent) {
        instance.trigger('click', getValue(), e);
    }

    // 兼容 Intact 原生事件与 React 合成事件，统一触发预览。
    function onPreview(e: any) {
        if (e && typeof e.stopPropagation === 'function') {
            e.stopPropagation();
        }
        if (!canPreview()) return;

        // 分组预览统一交给 Group，保证导航停留在同一个 Viewer。
        if (group.value) {
            group.value.open(instance);
        } else {
            showStandalonePreview();
        }

        const nativeEvent = (e && (e.nativeEvent || e)) as MouseEvent;
        instance.trigger('preview', getViewerItem(), nativeEvent);
    }

    function setDone(e: Event) {
        const isFirstDone = getInternalStatus() !== 'done';

        setInternalStatus('done');
        if (isFirstDone) instance.trigger('load', getValue(), e);
    }

    function setError(e: Event) {
        const isFirstError = getInternalStatus() !== 'error';

        setInternalStatus('error');
        if (isFirstError) instance.trigger('loadError', getValue(), e);
    }

    function onImageLoad(e: Event) {
        setDone(e);
    }

    function onImageError(e: Event) {
        setError(e);
    }

    // 有封面时 metadata 足够展示；无封面时等首帧数据。
    function onVideoMetadataLoad(e: Event) {
        if (hasVideoPoster()) {
            setDone(e);
        } else {
            scheduleNativeStatusSync();
        }
    }

    function onVideoDataLoad(e: Event) {
        setDone(e);
    }

    function onVideoError(e: Event) {
        setError(e);
    }

    function onAudioLoad(e: Event) {
        setDone(e);
    }

    function onAudioError(e: Event) {
        setError(e);
    }

    function clearNativeStatusSync() {
        if (syncTimer === undefined) return;

        clearTimeout(syncTimer);
        syncTimer = undefined;
    }

    // 缓存媒体可能错过原生事件，loading 期间读取 DOM ready 状态兜底。
    function scheduleNativeStatusSync() {
        clearNativeStatusSync();
        syncNativeStatus();
        if (!hasSource() || getInternalStatus() !== 'loading') return;

        syncTimer = window.setTimeout(scheduleNativeStatusSync, 120);
    }

    // 将自动状态同步到原生媒体元素的当前 ready/error 状态。
    function syncNativeStatus() {
        if (!hasSource() || getInternalStatus() !== 'loading') return;

        const resolvedType = getResolvedType();

        if (resolvedType === 'image') {
            const image = imageRef.value;
            if (!image || !image.complete) return;

            if (image.naturalWidth || image.naturalHeight) {
                setDone(new Event('load'));
            } else {
                setError(new Event('error'));
            }
            return;
        }

        if (resolvedType === 'video') {
            const video = videoRef.value;
            if (!video) return;

            if (video.error) {
                setError(new Event('error'));
            } else if (video.readyState >= (hasVideoPoster() ? 1 : 2)) {
                setDone(new Event('load'));
            }
            return;
        }

        if (resolvedType === 'audio') {
            const audio = audioRef.value;
            if (!audio) return;

            if (audio.error) {
                setError(new Event('error'));
            } else if (audio.readyState >= 1) {
                setDone(new Event('load'));
            }
        }
    }

    // 资源身份变化重启加载；纯展示类属性变化不重置状态。
    function bootstrap() {
        (instance as any).set({
            $previewRendered: false,
            $previewVisible: false,
            $status: hasSource() ? 'loading' : 'default',
        }, {silent: true});

        instance.watch('src', resetInternalStatus, {inited: true});
        instance.watch('type', resetInternalStatus, {inited: true});
        instance.watch('poster', resetInternalStatus, {inited: true});
    }

    bootstrap();

    return {
        getRootClassNameObj,
        getRootStyle,
        getFileName,
        getValue,
        getViewerItem,
        getMaskValue,
        getDisplayStatus,
        isLoading,
        isError,
        isDone,
        shouldShowVisualMediaContent,
        shouldShowLoadingIndicator,
        shouldShowImage,
        shouldShowVideo,
        shouldShowPlaceholder,
        shouldShowAudioLoader,
        shouldShowAudioCard,
        shouldShowErrorCard,
        imageRef,
        videoRef,
        audioRef,
        getImageProps,
        getVideoProps,
        getVideoKey,
        getAudioLoaderProps,
        getAudioCardAssetSrc,
        getErrorCardAssetSrc,
        getMediaCardIconStyle,
        shouldShowLoadingOverlay,
        shouldShowLoadingVideoIcon,
        getPreviewIconClassName,
        getPlaceholderIconClassName,
        getPlaceholderAssetSrc,
        getPreviewTitle,
        onClick,
        onPreview,
        canPreview,
        shouldShowVideoPlayTrigger,
        shouldShowMaskLayer,
        isStandalonePreviewRendered,
        isStandalonePreviewVisible,
        closeStandalonePreview,
        afterStandalonePreviewClose,
    };
}
