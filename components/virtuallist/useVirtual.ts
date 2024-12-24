import { 
    useInstance, 
    onMounted, 
    onUnmounted, 
    createRef, 
    VNode, 
    directClone,
    nextTick,
    RefObject,
    Children
} from 'intact';
import { useState } from '../../hooks/useState';
import { createHeightManager } from './helpers';
import type { VirtualListContainer } from './container';
import { State } from '../../hooks/useState';

export interface VirtualState {
    containerRef: RefObject<HTMLElement>;
    contentRef: RefObject<HTMLElement>;
    virtualChildren: State<VNode[]>;
    translateY: State<number>;
    totalHeight: State<number>;
    startIndex: State<number>;
    endIndex: State<number>;
    getItemTop: (index: number) => number;
    scrollToIndex: (index: number, behavior?: ScrollBehavior) => void;
    onChildrenChange: () => void;
    setGetChildrenFn: (fn: () => VNode[]) => void;
}

export function useVirtual(): VirtualState {
    const instance = useInstance() as VirtualListContainer;
    const aaa = instance.get();
    console.log('aaaa', aaa);
    const { estimatedItemHeight = 30, bufferSize = 6 } = instance.get();
    // TODO containerRef 暂不支持响应式
    const containerRef = createRef<HTMLElement>();
    const contentRef = createRef<HTMLElement>();

    const startIndex = useState(0);
    const endIndex = useState(0);
    const translateY = useState(0);
    const totalHeight = useState(0);
    const virtualChildren = useState<VNode[]>([]);
    let getChildrenFn: (() => (VNode | Children)[]) | null = null;
    let ticking = false;
    let lastScrollTop = 0;
    let isUpdating = false;

    const setGetChildrenFn = (fn: () => (VNode | Children)[]) => {
        getChildrenFn = fn;
        // 初始化计算
        calculateTotalHeight();
        handleScroll();
    };

    const getChildren = () => {
        const children = getChildrenFn ? getChildrenFn() : [];
        return children;// 添加日志

    };

    // 处理 children 变化的方法
    const onChildrenChange = () => {
        if (!isUpdating) {
            clear();
            calculateTotalHeight();
            nextTick(handleScroll);
        }
    };
    // const getChildren = () => {
    //     const children = instance.get('children');
    //     return Array.isArray(children) ? children : [];
    // };
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

    const scrollToIndex = (index: number, behavior: ScrollBehavior = 'auto') => {
        if (containerRef.value) {
            const top = getItemTop(index);
            containerRef.value.scrollTo({
                top,
                behavior,
            });
        }
    };

    const handleScroll = () => {
        if (!ticking && containerRef.value && !isUpdating) {
            ticking = true;
            requestAnimationFrame(() => {
                const { scrollTop, clientHeight } = containerRef.value!;
                
                // // 避免小幅度滚动触发更新
                // if (Math.abs(lastScrollTop - scrollTop) < 1) {
                //     return;
                // }
                // lastScrollTop = scrollTop;

                const { start, end, translateY: offset } = calculateVisibleRange(
                    scrollTop,
                    clientHeight,
                    bufferSize
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
        console.log('Component mounted'); // 添加日志
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

    return {
        containerRef,
        contentRef,
        virtualChildren,
        translateY,
        totalHeight,
        startIndex,
        endIndex,
        getItemTop,
        scrollToIndex,
        setGetChildrenFn,
        onChildrenChange,
    };
}