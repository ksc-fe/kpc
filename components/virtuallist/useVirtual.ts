// 支持定高、不定高、动态元素
import { useInstance, onMounted, onUnmounted, createRef, Children, VNode, directClone, watch, nextTick } from 'intact';
import { useState } from '../../hooks/useState';
import type { VirtualList } from './index';

export function useVirtual() {
    const instance = useInstance() as VirtualList;
    const children: Children = instance.get('children');
    if (!Array.isArray(children)) return {};

    const bufferSize = instance.get('bufferSize');
    // 预估元素高度
    const estimatedItemHeight = instance.get('estimatedItemHeight');
    // const asyncLoading = instance.get('asyncLoading');

    const containerRef = createRef<HTMLElement>();
    const contentRef = createRef<HTMLElement>();
    const startIndex = useState(0);
    const endIndex = useState(0);
    const itemHeights = useState(new Map<number, number>());
    const virtualChildren = useState<(VNode | string | number)[]>([]);
    const translateY = useState(0);
    const totalHeight = useState(0);
    let ticking = false;

    // const mutationObserver = new MutationObserver(() => {
    //     calculateHeights();
    //     handleScroll();
    // });

    // const resizeObserver = new ResizeObserver(() => {
    //     calculateHeights();
    //     handleScroll();
    // });

    const calculateHeights = () => {
        if (contentRef.value) {
            const nodes = contentRef.value.children as HTMLCollection;
            for (let i = 0; i < nodes.length; i++) {
                const index = startIndex.value + i;
                const height = (nodes[i] as HTMLElement).offsetHeight;
                itemHeights.value.set(index, height);
            }
            updateTotalHeight();
        }
    };

    const updateTotalHeight = () => {
        let height = 0;
        for (let i = 0; i < children.length; i++) {
            height += itemHeights.value.get(i) || (estimatedItemHeight as number);
        }
        totalHeight.set(height);
    };

    const getItemTop = (index: number) => {
        let top = 0;
        for (let i = 0; i < index; i++) {
            top += itemHeights.value.get(i) || (estimatedItemHeight as number);
        }
        return top;
    };

    const handleScroll = () => {
        if (!ticking && containerRef.value) {
            ticking = true;
            requestAnimationFrame(() => {
                const { scrollTop, clientHeight } = containerRef.value as HTMLElement;
                let start = 0;
                let end = 0;
                let accumulatedHeight = 0;

                // Find start index
                while (start < children.length) {
                    const height = itemHeights.value.get(start) || (estimatedItemHeight as number);
                    if (accumulatedHeight + height > scrollTop - (bufferSize as number) * (estimatedItemHeight as number)) {
                        break;
                    }
                    accumulatedHeight += height;
                    start++;
                }

                start = Math.max(0, start);

                // Find end index
                end = start;
                while (end < children.length && accumulatedHeight < scrollTop + clientHeight + (bufferSize as number) * (estimatedItemHeight as number)) {
                    accumulatedHeight += itemHeights.value.get(end) || (estimatedItemHeight as number);
                    end++;
                }

                end = Math.min(children.length, end);

                startIndex.set(start);
                endIndex.set(end);
                translateY.set(getItemTop(start));

                setVisibleItems(start, end);
                ticking = false;
            });
        }
    };

    const setVisibleItems = (start: number, end: number) => {
        const visibleItems = children.slice(start, end).map(directClone);
        virtualChildren.set(visibleItems);
        nextTick(() => {
            calculateHeights();
        });
    };

    // const observeItems = () => {
    //     if (contentRef.value) {
    //         mutationObserver.observe(contentRef.value, { childList: true, subtree: true });
    //         resizeObserver.observe(contentRef.value);
    //     }
    // };

    // const unobserveItems = () => {
    //     mutationObserver.disconnect();
    //     resizeObserver.disconnect();
    // };

    onMounted(() => {
        if (containerRef.value) {
            containerRef.value.addEventListener('scroll', handleScroll);
            updateTotalHeight();
            handleScroll();
            // if (asyncLoading) {
            //     observeItems();
            // }
        }
    });

    onUnmounted(() => {
        if (containerRef.value) {
            containerRef.value.removeEventListener('scroll', handleScroll);
        }
        // unobserveItems();
    });

    // watch(() => instance.get('children'), () => {
    //     itemHeights.set(new Map());
    //     updateTotalHeight();
    //     handleScroll();
    // });

    // watch(() => instance.get('asyncLoading'), (newValue) => {
    //     if (newValue) {
    //         observeItems();
    //     } else {
    //         unobserveItems();
    //     }
    // });

    return {
        containerRef,
        contentRef,
        virtualChildren,
        translateY,
        totalHeight,
    };
}