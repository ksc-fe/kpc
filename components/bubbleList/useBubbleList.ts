import {createRef, nextTick, onBeforeUnmount, onMounted, useInstance} from 'intact';
import ResizeObserver from 'resize-observer-polyfill';
import type {BubbleProps} from '../bubble';
import type {
    BubbleList,
    BubbleListItem,
    BubbleListKey,
    BubbleListRoleConfig,
    BubbleListSlotParams,
} from './bubbleList';

const BUBBLE_PROP_KEYS: Array<keyof BubbleProps> = [
    'content',
    'placement',
    'avatar',
    'roleName',
    'loading',
    'streaming',
    'variant',
    'shape',
    'maxWidthString',
    'typing',
];

type AnchorSnapshot = {
    key: BubbleListKey;
    top: number;
};

type InternalStateKey = '$isAtBottom' | '$autoScrollActive' | '$hasScrollbar';

function toItemArray(items?: BubbleListItem[]) {
    return Array.isArray(items) ? items : [];
}

// 管理列表数据到 DOM 滚动的协作：key、角色合并、贴底、历史前插和滚动方法都依赖同一组状态。
export function useBubbleList() {
    const instance = useInstance() as BubbleList;

    const scrollBoxRef = createRef<HTMLDivElement>();
    const scrollContentRef = createRef<HTMLDivElement>();
    const itemElements = new Map<BubbleListKey, HTMLDivElement>();
    const internalItemKeys = new WeakMap<object, BubbleListKey>();

    let resizeObserver: ResizeObserver | null = null;
    let resizeFrame = 0;
    let historyRequestLocked = false;
    let anchorSnapshot: AnchorSnapshot | null = null;
    let internalItemKeySeed = 0;
    let warnedMissingItemKey = false;

    function getItems() {
        return toItemArray(instance.get('items'));
    }

    function warnMissingItemKey() {
        if (process.env.NODE_ENV === 'production' || warnedMissingItemKey) return;

        warnedMissingItemKey = true;
        console.warn(
            'BubbleList: each item should provide a stable `key`, or configure `itemKey`. ' +
            'The component is falling back to an internal temporary key, which is only suitable ' +
            'for basic rendering and may be unstable across recreated item objects.'
        );
    }

    function getInternalItemKey(item: BubbleListItem): BubbleListKey {
        warnMissingItemKey();

        if (item && typeof item === 'object') {
            const cachedKey = internalItemKeys.get(item);
            if (cachedKey !== undefined) return cachedKey;

            internalItemKeySeed += 1;
            const internalKey = `__bubble_list_internal_${internalItemKeySeed}`;
            internalItemKeys.set(item, internalKey);

            return internalKey;
        }

        internalItemKeySeed += 1;
        return `__bubble_list_internal_${internalItemKeySeed}`;
    }

    // 优先使用业务稳定 key；内部 key 只保证同一对象引用下的基础渲染稳定。
    function getItemKey(item: BubbleListItem, index: number): BubbleListKey {
        const itemKey = instance.get('itemKey');

        if (typeof itemKey === 'function') {
            return itemKey(item, index);
        }

        if (typeof itemKey === 'string' && itemKey) {
            const fromField = item[itemKey];
            if (fromField !== undefined && fromField !== null) return fromField as BubbleListKey;
        }

        if (item.key !== undefined && item.key !== null) return item.key;

        return getInternalItemKey(item);
    }

    function getAutoScrollThreshold() {
        return Math.max(instance.get('autoScrollThreshold') || 0, 0);
    }

    function getHistoryTriggerOffset() {
        return Math.max(instance.get('historyTriggerOffset') || 0, 0);
    }

    function isAutoScrollEnabled() {
        return !!instance.get('autoScroll');
    }

    function getScrollBehavior() {
        return instance.get('scrollBehavior') || 'auto';
    }

    function getScrollBox() {
        return scrollBoxRef.value || null;
    }

    function getScrollContent() {
        return scrollContentRef.value || null;
    }

    function setInternalState(key: InternalStateKey, value: boolean) {
        if ((instance as any).get(key) === value) return;
        (instance as any).set(key, value);
    }

    function syncScrollbarState() {
        const scrollBox = getScrollBox();
        const hasScrollbar = !!scrollBox && scrollBox.scrollHeight - scrollBox.clientHeight > 1;
        setInternalState('$hasScrollbar', hasScrollbar);
    }

    function setIsAtBottom(value: boolean) {
        if ((instance as any).get('$isAtBottom') === value) return;
        setInternalState('$isAtBottom', value);
        instance.trigger('scrollBottomChange', value);
    }

    function setAutoScrollActive(value: boolean) {
        const nextValue = isAutoScrollEnabled() ? value : false;
        if ((instance as any).get('$autoScrollActive') === nextValue) return;
        setInternalState('$autoScrollActive', nextValue);
        instance.trigger('autoScrollChange', nextValue);
    }

    function isAtBottom() {
        const scrollBox = getScrollBox();
        if (!scrollBox) return true;

        return scrollBox.scrollHeight - scrollBox.scrollTop - scrollBox.clientHeight <= getAutoScrollThreshold();
    }

    function isAutoScrollActive() {
        return !!instance.get<boolean>('$autoScrollActive');
    }

    function shouldStickToBottom() {
        return isAutoScrollEnabled() && isAutoScrollActive();
    }

    function getRoleConfig(item: BubbleListItem, index: number): BubbleListRoleConfig | undefined {
        const roles = instance.get('roles');
        const role = item.role;
        if (!roles || !role) return;

        const roleConfig = roles[role];
        if (!roleConfig) return;

        return typeof roleConfig === 'function' ? roleConfig(item, index) : roleConfig;
    }

    // 单条消息配置覆盖角色默认配置，保持 role 只负责默认值。
    function getMergedItem(item: BubbleListItem, index: number): BubbleListItem {
        const roleConfig = getRoleConfig(item, index);
        if (!roleConfig) return item;

        return {
            ...roleConfig,
            ...item,
        };
    }

    function getBubbleProps(item: BubbleListItem, index: number) {
        const mergedItem = getMergedItem(item, index);
        const bubbleProps: Partial<BubbleProps> & {className?: string; style?: any} = {};

        BUBBLE_PROP_KEYS.forEach((key) => {
            if (mergedItem[key] !== undefined) {
                bubbleProps[key] = mergedItem[key] as any;
            }
        });

        if (mergedItem.className !== undefined) {
            bubbleProps.className = mergedItem.className;
        }

        if (mergedItem.style !== undefined) {
            bubbleProps.style = mergedItem.style;
        }

        return bubbleProps;
    }

    function getSlotParams(item: BubbleListItem, index: number): BubbleListSlotParams {
        const key = getItemKey(item, index);
        const mergedItem = getMergedItem(item, index);
        return {
            item,
            mergedItem,
            index,
            key,
            isFirst: index === 0,
            isLast: index === getItems().length - 1,
            isAtBottom: isAtBottom(),
        };
    }

    function setItemElement(key: BubbleListKey, element: HTMLDivElement | null) {
        if (!element) {
            itemElements.delete(key);
            return;
        }

        itemElements.set(key, element);
    }

    function getItemRef(item: BubbleListItem, index: number) {
        const key = getItemKey(item, index);
        return (element: HTMLDivElement | null) => {
            setItemElement(key, element);
        };
    }

    function getContentTop() {
        const scrollBox = getScrollBox();
        const scrollContent = getScrollContent();
        if (!scrollBox || !scrollContent) return 0;

        const scrollBoxRect = scrollBox.getBoundingClientRect();
        const scrollContentRect = scrollContent.getBoundingClientRect();
        return scrollContentRect.top - scrollBoxRect.top;
    }

    // 记录当前视口顶部的首个可见项，用于历史消息前插后恢复阅读位置。
    function updateAnchorSnapshot() {
        const scrollBox = getScrollBox();
        if (!scrollBox) {
            anchorSnapshot = null;
            return;
        }

        const scrollBoxRect = scrollBox.getBoundingClientRect();
        const topBoundary = scrollBoxRect.top + getContentTop();
        const items = getItems();

        for (let i = 0; i < items.length; i++) {
            const key = getItemKey(items[i], i);
            const element = itemElements.get(key);
            if (!element) continue;

            const rect = element.getBoundingClientRect();
            if (rect.bottom > topBoundary) {
                anchorSnapshot = {
                    key,
                    top: rect.top - scrollBoxRect.top,
                };
                return;
            }
        }

        anchorSnapshot = null;
    }

    // prepend 或内容高度变化后，把锚点项拉回原来的视口位置。
    function restoreAnchorSnapshot() {
        if (!anchorSnapshot) return;

        const scrollBox = getScrollBox();
        if (!scrollBox) return;

        const element = itemElements.get(anchorSnapshot.key);
        if (!element) return;

        const scrollBoxRect = scrollBox.getBoundingClientRect();
        const currentTop = element.getBoundingClientRect().top - scrollBoxRect.top;
        const delta = currentTop - anchorSnapshot.top;

        if (Math.abs(delta) < 1) return;

        scrollBox.scrollTop += delta;
    }

    function syncScrollState() {
        syncScrollbarState();

        const atBottom = isAtBottom();
        setIsAtBottom(atBottom);
        setAutoScrollActive(atBottom);

        if (atBottom) {
            anchorSnapshot = null;
        } else {
            updateAnchorSnapshot();
        }
    }

    // 顶部触发历史加载时先锁住，等待 loadingHistory 结束或 items 更新后释放。
    function triggerLoadHistory() {
        if (!instance.get('hasMoreHistory')) return;
        if (instance.get('loadingHistory')) return;
        if (historyRequestLocked) return;

        historyRequestLocked = true;
        updateAnchorSnapshot();
        instance.trigger('loadHistory');
    }

    function handleScroll(e: Event) {
        syncScrollState();

        const scrollBox = getScrollBox();
        if (scrollBox && scrollBox.scrollTop <= getHistoryTriggerOffset()) {
            triggerLoadHistory();
        }

        instance.trigger('scroll', e);
    }

    function scrollTo(top: number, behavior: ScrollBehavior = getScrollBehavior()) {
        const scrollBox = getScrollBox();
        if (!scrollBox) return;

        // 兼容不支持 ScrollToOptions 的旧浏览器，smooth 会自动降级为即时滚动。
        if (typeof scrollBox.scrollTo === 'function') {
            try {
                scrollBox.scrollTo({
                    top,
                    behavior,
                });
                return;
            } catch (e) {
                scrollBox.scrollTo(0, top);
                return;
            }
        }

        scrollBox.scrollTop = top;
    }

    function scrollToTop(behavior: ScrollBehavior = getScrollBehavior()) {
        setAutoScrollActive(false);
        scrollTo(0, behavior);
        nextTick(syncScrollState);
    }

    function scrollToBottom(behavior: ScrollBehavior = getScrollBehavior()) {
        const scrollBox = getScrollBox();
        if (!scrollBox) return;

        setAutoScrollActive(true);
        scrollTo(scrollBox.scrollHeight, behavior);
        nextTick(syncScrollState);
    }

    function scrollToKey(key: BubbleListKey, behavior: ScrollBehavior = getScrollBehavior()) {
        const scrollBox = getScrollBox();
        const element = itemElements.get(key);
        if (!scrollBox || !element) return;

        const scrollBoxRect = scrollBox.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const currentTop = scrollBox.scrollTop + (elementRect.top - scrollBoxRect.top);
        const targetTop = currentTop;

        if (Math.abs(targetTop - (scrollBox.scrollHeight - scrollBox.clientHeight)) <= getAutoScrollThreshold()) {
            setAutoScrollActive(true);
        } else {
            setAutoScrollActive(false);
        }

        scrollTo(Math.max(targetTop, 0), behavior);
        nextTick(syncScrollState);
    }

    function shouldShowScrollToBottom() {
        return !!instance.get('showScrollToBottom') && !instance.get<boolean>('$isAtBottom') && getItems().length > 0;
    }

    function shouldShowEmpty() {
        return getItems().length === 0;
    }

    function shouldShowHistoryLoading() {
        const {$blocks: blocks} = instance.get() as {$blocks?: Record<string, unknown>};
        // 自定义 historyLoading 时需在「没有更多」且非加载时仍保留区域，否则 slot 无法展示收尾文案
        if (blocks && blocks.historyLoading && getItems().length > 0) {
            return true;
        }
        return !!instance.get('loadingHistory');
    }

    function onBubbleTyping(item: BubbleListItem, index: number, renderedContent: string, currentContent: string) {
        const mergedItem = getMergedItem(item, index);
        mergedItem.onTyping?.(renderedContent, currentContent, item, index);
        instance.trigger('typing', item, renderedContent, currentContent, index);
    }

    function onBubbleTypingComplete(item: BubbleListItem, index: number, content: string) {
        const mergedItem = getMergedItem(item, index);
        mergedItem.onTypingComplete?.(content, item, index);
        instance.trigger('typingComplete', item, content, index);
    }

    function getBubbleTypingHandler(item: BubbleListItem, index: number) {
        return (renderedContent: string, currentContent: string) => {
            onBubbleTyping(item, index, renderedContent, currentContent);
        };
    }

    function getBubbleTypingCompleteHandler(item: BubbleListItem, index: number) {
        return (content: string) => {
            onBubbleTypingComplete(item, index, content);
        };
    }

    function getDefaultHistoryLoadingText() {
        return '加载历史中...';
    }

    function onScrollToBottomClick() {
        scrollToBottom('smooth');
    }

    function watchItems() {
        instance.watch('items', () => {
            const shouldKeepBottom = shouldStickToBottom();

            if (!shouldKeepBottom) {
                updateAnchorSnapshot();
            }

            historyRequestLocked = false;

            nextTick(() => {
                if (instance.$unmounted) return;

                // 新消息增长时贴底；用户离开底部时优先恢复锚点，避免阅读位置跳动。
                if (shouldKeepBottom) {
                    scrollToBottom('auto');
                } else {
                    restoreAnchorSnapshot();
                    syncScrollState();
                }
            });
        }, {inited: true});
    }

    function watchLoadingHistory() {
        instance.watch('loadingHistory', (value?: boolean, oldValue?: boolean) => {
            if (!value && oldValue) {
                historyRequestLocked = false;
                nextTick(() => {
                    restoreAnchorSnapshot();
                    syncScrollState();
                });
            }
        }, {inited: true});
    }

    function watchAutoScroll() {
        instance.watch('autoScroll', (value?: boolean) => {
            if (!value) {
                setAutoScrollActive(false);
                syncScrollState();
                return;
            }

            nextTick(() => {
                setAutoScrollActive(isAtBottom());
                if (isAtBottom()) {
                    scrollToBottom('auto');
                } else {
                    syncScrollState();
                }
            });
        }, {inited: true});
    }

    function mountResizeObserver() {
        const scrollContent = getScrollContent();
        if (!scrollContent) return;

        resizeObserver = new ResizeObserver(() => {
            if (resizeFrame) {
                cancelAnimationFrame(resizeFrame);
            }

            resizeFrame = requestAnimationFrame(() => {
                resizeFrame = 0;
                if (instance.$unmounted) return;

                // 图片、Markdown、typing 等高度变化也要参与贴底或锚点恢复。
                if (shouldStickToBottom()) {
                    scrollToBottom('auto');
                    return;
                }

                restoreAnchorSnapshot();
                syncScrollState();
            });
        });

        resizeObserver.observe(scrollContent);
    }

    function onMountedCallback() {
        nextTick(() => {
            mountResizeObserver();
            syncScrollbarState();
            if (isAutoScrollEnabled()) {
                scrollToBottom('auto');
                requestAnimationFrame(() => {
                    if (instance.$unmounted) return;
                    scrollToBottom('auto');
                });
                return;
            }
            syncScrollState();
        });
    }

    function onBeforeUnmountCallback() {
        if (resizeFrame) {
            cancelAnimationFrame(resizeFrame);
            resizeFrame = 0;
        }

        if (resizeObserver) {
            resizeObserver.disconnect();
            resizeObserver = null;
        }
    }

    watchItems();
    watchLoadingHistory();
    watchAutoScroll();

    onMounted(onMountedCallback);
    onBeforeUnmount(onBeforeUnmountCallback);

    return {
        scrollBoxRef,
        scrollContentRef,
        getItems,
        getItemKey,
        getBubbleProps,
        getSlotParams,
        getItemRef,
        handleScroll,
        shouldShowEmpty,
        shouldShowHistoryLoading,
        shouldShowScrollToBottom,
        getDefaultHistoryLoadingText,
        onScrollToBottomClick,
        onBubbleTyping,
        onBubbleTypingComplete,
        getBubbleTypingHandler,
        getBubbleTypingCompleteHandler,
        scrollToTop,
        scrollToBottom,
        scrollToKey,
        isAtBottom,
    };
}
