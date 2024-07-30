import { useInstance, onMounted, onUnmounted, createRef, Children, VNode, directClone } from 'intact';
import { useState } from '../../hooks/useState';
import type { VirtualList } from './index';
import { isComponentVNode } from '../utils';
// import { Option } from './option';

export function useVirtual() {
    const instance = useInstance() as VirtualList;
    const children: Children = instance.get('children');
    if (!Array.isArray(children)) return {};
    const bufferSize = 6;
    const containerRef = createRef<HTMLDivElement>();
    const contentRef = createRef<HTMLDivElement>();
    const startIndex = useState(0);
    const endIndex = useState(0);
    const itemHeights = useState(new Map());
    const estimatedHeight = 50;
    const containerHeightState = useState(200);
    const virtualChildren = useState<(VNode | string | number)[]>([]);
    let ticking = false;

    const calculateHeights = () => {
        if (contentRef.value) {
            const nodes = contentRef.value.children as any;
            const heightsMap = new Map();
            debugger;
            for (let i = 0; i < nodes.length; i++) {
                heightsMap.set(i, nodes[i].offsetHeight);
            }
            itemHeights.set(heightsMap);
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
            visibleItems.push(children[i] as VNode);
        }
        virtualChildren.set(visibleItems);
    };

    onMounted(() => {
        if (containerRef.value) {
            calculateHeights();
            containerRef.value.addEventListener('scroll', handleScroll);
            handleScroll();
        }
    });

    onUnmounted(() => {
        if (containerRef.value) {
            containerRef.value.removeEventListener('scroll', handleScroll);
        }
    });

    const paddingTop = (): number => {
        let height = 0;
        for (let i = 0; i < Math.max(0, startIndex.value - bufferSize); i++) {
            height += itemHeights.value.get(i) || estimatedHeight;
        }
        return height;
    };

    const paddingBottom = (): number => {
        let height = 0;
        for (let i = Math.min(children.length, endIndex.value + bufferSize + 1); i < children.length; i++) {
            height += itemHeights.value.get(i) || estimatedHeight;
        }
        return height;
    };


    return {
        containerRef,
        contentRef,
        virtualChildren,
        paddingTop,
        paddingBottom,
    };
}
