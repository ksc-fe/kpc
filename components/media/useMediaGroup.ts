import {useInstance} from 'intact';
import type {MediaGroup} from './group';
import type {Media} from './media';
import type {MediaGroupContextValue, MediaGroupItemApi} from './types';

export function useMediaGroup() {
    const instance = useInstance() as MediaGroup;
    const items: Array<{media: Media, api: MediaGroupItemApi}> = [];

    // 分组导航只包含当前真正可预览的媒体项。
    function getPreviewableItems() {
        return items.filter(item => item.api.canPreview());
    }

    function getActiveIndex() {
        return (instance as any).get('$activeIndex') || 0;
    }

    function setActiveIndex(activeIndex: number) {
        (instance as any).set('$activeIndex', activeIndex);
    }

    function isPreviewVisible() {
        return !!(instance as any).get('$previewVisible');
    }

    function setPreviewVisible(value: boolean) {
        (instance as any).set('$previewVisible', value);
    }

    function isPreviewRendered() {
        return !!(instance as any).get('$previewRendered');
    }

    function setPreviewRendered(value: boolean) {
        (instance as any).set('$previewRendered', value);
    }

    // 子 Media 挂载时注册，顺序跟随组件挂载顺序。
    function register(media: Media, api: MediaGroupItemApi) {
        if (!items.some(item => item.media === media)) {
            items.push({media, api});
        }
    }

    // 子项卸载后修正当前下标，避免预览指向空项。
    function unregister(media: Media) {
        const index = items.findIndex(item => item.media === media);
        if (index < 0) return;

        items.splice(index, 1);

        const previewableItems = getPreviewableItems();
        if (!previewableItems.length) {
            setPreviewVisible(false);
            setActiveIndex(0);
            return;
        }

        if (getActiveIndex() >= previewableItems.length) {
            setActiveIndex(previewableItems.length - 1);
        }
    }

    // 打开被点击的媒体，并把 Viewer 维持在分组层。
    function open(media: Media) {
        const previewableItems = getPreviewableItems();
        const index = previewableItems.findIndex(item => item.media === media);

        if (index < 0) return;

        setActiveIndex(index);
        setPreviewRendered(true);
        setPreviewVisible(true);
    }

    function close() {
        setPreviewVisible(false);
    }

    // 等关闭动画完成后再卸载 Viewer。
    function afterClose() {
        setPreviewRendered(false);
    }

    function prev() {
        const current = getActiveIndex();
        if (current <= 0) return;

        setActiveIndex(current - 1);
    }

    function next() {
        const previewableItems = getPreviewableItems();
        const current = getActiveIndex();

        if (current >= previewableItems.length - 1) return;

        setActiveIndex(current + 1);
    }

    function getActiveItem() {
        return getPreviewableItems()[getActiveIndex()] || null;
    }

    // Viewer 只需要媒体快照，不直接依赖子组件实例。
    function getActiveViewerItem() {
        const item = getActiveItem();

        return item ? item.api.getViewerItem() : null;
    }

    function hasPrev() {
        return getActiveIndex() > 0;
    }

    function hasNext() {
        const previewableItems = getPreviewableItems();

        return getActiveIndex() < previewableItems.length - 1;
    }

    function getPreviewCount() {
        return getPreviewableItems().length;
    }

    // 通过 Context 向子 Media 暴露分组预览能力。
    function getContextValue(): MediaGroupContextValue {
        return {
            register,
            unregister,
            open,
        };
    }

    (instance as any).set({
        $previewRendered: false,
        $previewVisible: false,
        $activeIndex: 0,
    }, {silent: true});

    return {
        getContextValue,
        isPreviewRendered,
        isPreviewVisible,
        getActiveViewerItem,
        getActiveIndex,
        getPreviewCount,
        hasPrev,
        hasNext,
        close,
        afterClose,
        prev,
        next,
    };
}
