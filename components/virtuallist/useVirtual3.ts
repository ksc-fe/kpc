import { useInstance, onMounted, onUnmounted, createRef, Children, VNode, directClone } from 'intact';
import { useState } from '../../hooks/useState';
import type { VirtualList } from './index';

export function useVirtual<T = HTMLElement>(config?: { bufferSize?: number }) {
    const instance = useInstance() as VirtualList;
    const children: Children = instance.get('children');
    if (!Array.isArray(children)) return {};

    const bufferSize = config?.bufferSize ?? 6;  // 默认 bufferSize 为 6
    const containerRef = createRef<T>();
    const contentRef = createRef<T>();
    const startIndex = useState(0);
    const endIndex = useState(0);
    const itemHeights = useState(new Map<number, number>());
    const estimatedHeight = 30;  // 初始估计高度
    const containerHeightState = useState(200);
    const virtualChildren = useState<(VNode | string | number)[]>([]);
    const translateY = useState(0);  // 记录偏移量
    const totalHeight = useState(1000); // 设置初始总高度为一个很大的值
    let ticking = false;

    const calculateHeights = () => {
        if (contentRef.value) {
            debugger;
            const nodes = contentRef.value.children as HTMLCollection;
            console.log('----',children,nodes);
            const heightsMap = new Map<number, number>();
            let totalHeightValue = 0;
            for (let i = 0; i < nodes.length; i++) {
                const height = (nodes[i] as HTMLElement).offsetHeight;  // 自动计算高度
                heightsMap.set(i + startIndex.value, height);  // 注意要加上 startIndex
                totalHeightValue += height;
            }
            itemHeights.set(heightsMap);

            // 更新总高度
            let accumulatedTotalHeight = 0;
            for (let i = 0; i < children.length; i++) {
                accumulatedTotalHeight += itemHeights.value.get(i) || estimatedHeight;
            }
            totalHeight.set(accumulatedTotalHeight);
        }
    };

    const handleScroll = () => {
        if (!ticking && containerRef.value) {
            ticking = true;
            requestAnimationFrame(() => {
                const scrollTop = containerRef.value!.scrollTop;
                let accumulatedHeight = 0;
                let start = 0;
                for (let i = 0; i < children.length; i++) {
                    accumulatedHeight += itemHeights.value.get(i) || estimatedHeight;
                    if (accumulatedHeight >= scrollTop) {
                        start = i;
                        break;
                    }
                }
                let end = start;
                accumulatedHeight = 0;
                for (let i = start; i < children.length; i++) {
                    accumulatedHeight += itemHeights.value.get(i) || estimatedHeight;
                    if (accumulatedHeight >= containerHeightState.value) {
                        end = i;
                        break;
                    }
                }
                startIndex.set(start);
                endIndex.set(end);

                // 计算 translateY 偏移量
                let translateYValue = 0;
                for (let i = 0; i < start; i++) {
                    translateYValue += itemHeights.value.get(i) || estimatedHeight;
                }
                translateY.set(translateYValue);

                setVisibleItems(start, end);
                ticking = false;
            });
        }
    };

    const setVisibleItems = (start: number, end: number) => {
        const visibleItems = [];
        const startWithBuffer = Math.max(0, start - bufferSize);
        const endWithBuffer = Math.min(children.length - 1, end + bufferSize);
        for (let i = startWithBuffer; i <= endWithBuffer; i++) {
            visibleItems.push(directClone(children[i] as VNode));
        }
        virtualChildren.set(visibleItems);

        // 更新内容高度
        calculateHeights();
    };

    onMounted(() => {
        if (containerRef.value) {
            calculateHeights();  // 初始计算高度

            containerRef.value.addEventListener('scroll', handleScroll);
            handleScroll();  // 初始化渲染可见项
        }
    });

    onUnmounted(() => {
        if (containerRef.value) {
            containerRef.value.removeEventListener('scroll', handleScroll);
        }
    });

    return {
        containerRef,
        contentRef,
        virtualChildren,
        translateY,
        totalHeight, // 新增总高度返回值
    };
}
