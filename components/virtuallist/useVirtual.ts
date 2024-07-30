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
    const startIndex = useState(0);
    const endIndex = useState(0);
    const itemHeightState = useState(32);
    const containerHeightState = useState(200);
    const virtualChildren = useState<(VNode | string | number)[]>([]);
    let ticking = false;

    const handleScroll = () => {
        if (!ticking && containerRef.value) {
            ticking = true;
            requestAnimationFrame(() => {
                const scrollTop = containerRef.value!.scrollTop;
                const itemHeight = itemHeightState.value;
                const containerHeight = containerHeightState.value;
                const start = Math.floor(scrollTop / itemHeight);
                const end = Math.min(children.length - 1, Math.ceil((scrollTop + containerHeight) / itemHeight));
                console.log('handleScroll', scrollTop, itemHeight, start, end, children.length);
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
            containerRef.value.addEventListener('scroll', handleScroll);
            handleScroll();
        }
    });

    onUnmounted(() => {
        if (containerRef.value) {
            containerRef.value.removeEventListener('scroll', handleScroll);
        }
    });

    return {
        containerRef,
        virtualChildren,
        paddingTop: () => Math.max(0, startIndex.value - bufferSize) * itemHeightState.value,
        paddingBottom: () => Math.max(0, (children.length - endIndex.value - 1 - bufferSize)) * itemHeightState.value,
    };
}
