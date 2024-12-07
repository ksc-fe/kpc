import { useInstance, onMounted, onUnmounted, createRef, Children, VNode, directClone, watch, nextTick, RefObject } from 'intact';
import { useState } from '../../hooks/useState';
import type { VirtualList } from './index';
import { createHeightManager } from './helpers';
export interface VirtualProps {
    containerRef: RefObject<HTMLElement>;
    contentRef: RefObject<HTMLElement>;
    children: Children;
    estimatedItemHeight: number | undefined;
    bufferSize: number | undefined;
}
export function useVirtual(props?: VirtualProps) {
    const instance = useInstance() as VirtualList;
    const {estimatedItemHeight, bufferSize} = instance.get();
    
    // 如果没有传入 props，则使用组件自身的配置
    const getChildren = () => {
        const children = instance.get('children');
        return Array.isArray(children) ? children : [];
    };
    if (!Array.isArray(getChildren())) return {};

    const containerRef = createRef<HTMLElement>();
    const contentRef = createRef<HTMLElement>();

    const startIndex = useState(0);
    const endIndex = useState(0);
    const translateY = useState(0);
    const totalHeight = useState(0);

    const virtualChildren = useState<(VNode | string | number)[]>([]);
    
    let ticking = false;
    // height manager for calculate total height and update item heights
    const { 
        batchUpdate,
        getItemHeight,
        clear,
        calculateTotalHeight,
        calculateVisibleRange,
    } = createHeightManager({
        defaultHeight: estimatedItemHeight as number,
        onTotalHeightChange: (height) => totalHeight.set(height),
        getItems: () => getChildren()
    });

    const calculateHeights = () => {
        if (contentRef.value) {
            const visibleElements = Array.from(contentRef.value.children).map((node, i) => ({
                key: startIndex.value + i,
                element: node as HTMLElement,
            }));
            
            batchUpdate(visibleElements);
        }
    };

    const getItemTop = (index: number) => {
        let top = 0;
        for (let i = 0; i < index; i++) {
            top += getItemHeight(i);
        }
        return top;
    };

    const handleScroll = () => {
        if (!ticking && containerRef.value) {
            ticking = true;
            requestAnimationFrame(() => {
                const { scrollTop, clientHeight } = containerRef.value as HTMLElement;
                const { start, end, translateY: offset } = calculateVisibleRange(
                    scrollTop,
                    clientHeight,
                    bufferSize as number
                );

                startIndex.set(start);
                endIndex.set(end);
                translateY.set(offset);
                setVisibleItems(start, end);
                ticking = false;
            });
        }
    };

    const setVisibleItems = (start: number, end: number) => {
        const children = getChildren();
        const visibleItems = children.slice(start, end).map(vNode => directClone(vNode as VNode));
        virtualChildren.set(visibleItems);
        nextTick(() => {
            calculateHeights();
        });
    };

    onMounted(() => {
        if (containerRef.value) {
            containerRef.value.addEventListener('scroll', handleScroll);
            calculateTotalHeight();
            handleScroll();
        }
    });

    onUnmounted(() => {
        if (containerRef.value) {
            containerRef.value.removeEventListener('scroll', handleScroll);
        }
    });

    instance.on('$receive:children', () => {
        clear();
        calculateTotalHeight();
        nextTick(() => {
            handleScroll();
        });
    });

    return {
        containerRef,
        contentRef,
        virtualChildren,
        translateY,
        totalHeight,
        getItemTop,
    };
}