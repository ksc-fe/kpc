import { useInstance, onMounted, onBeforeUnmount, RefObject, createRef } from 'intact';
import { useState } from '../../hooks/useState';
import type { Table } from './table';
import type { ScrollCallback } from './useScroll';
import { State } from '../../hooks/useState';
import { createHeightManager } from '../virtualList/helpers';

interface RowRefCache {
    [key: string]: RefObject<HTMLElement>;
}

export function useTableVirtual(
    data: State<any[] | undefined>,
    scrollRef: RefObject<HTMLElement>,
    callbacks: ScrollCallback[],
) {
    const instance = useInstance() as Table;
    const { virtual, rowKey, estimatedRowHeight, bufferSize } = instance.get();
    
    if (!virtual) return null;

    const startIndex = useState(0);
    const endIndex = useState(0);
    const translateY = useState(0);
    const totalHeight = useState(0);
    
    // row refs
    const rowRefs: RowRefCache = {};
    // actual data because data don't loop children
    let actualData: any[] = [];
    // height manager for calculate total height and update item heights
    const { 
        batchUpdate,
        calculateTotalHeight,
        calculateVisibleRange,
    } = createHeightManager({
        defaultHeight: estimatedRowHeight as number,
        onTotalHeightChange: (height) => totalHeight.set(height),
        getItems: () => actualData,
        getKey: (item, index) => getRowKey(item, index)
    });

    const calculateHeights = () => {
        const visibleElements = [];
        for (let i = startIndex.value; i < endIndex.value; i++) {
            if (actualData[i]) {
                const key = getRowKey(actualData[i], i);
                const element = rowRefs[key]?.value;
                if (element) {
                    visibleElements.push({ key, element });
                }
            }
        }
        batchUpdate(visibleElements);
    };

    // reset and start collecting actual rendered data
    const resetActualData = () => {
        actualData = [];
    };

    // add actual rendered data item
    const addActualDataItem = (item: any) => {
        actualData.push(item);
    };
    // get or create row ref
    const getRowRef = (key: string) => {
        if (!rowRefs[key]) {
            rowRefs[key] = createRef<HTMLElement>();
        }
        return rowRefs[key];
    };

    const getRowKey = (item: any, index: number) => {
        return typeof rowKey === 'function' ? 
            rowKey(item, index) : 
            item['key'];
    };
    
    const handleScroll = (_scrollLeft?: number, scrollTop: number = 0) => {
        if (!scrollRef.value || !actualData) return;
    
        const { start, end, translateY: offset } = calculateVisibleRange(
            scrollTop,
            scrollRef.value.clientHeight,
            bufferSize as number
        );

        startIndex.set(start);
        endIndex.set(end);
        translateY.set(offset);
    };

    callbacks.push(handleScroll);

    onMounted(() => {
        if (actualData) {
            calculateTotalHeight();
            handleScroll(0, 0);
        }
        let updateQueued = false;
        const observer = new MutationObserver(() => {
            if (!updateQueued) {
                updateQueued = true;
                requestAnimationFrame(() => {
                    calculateHeights();
                    updateQueued = false;
                });
            }
        });

        if (scrollRef.value) {
            observer.observe(scrollRef.value, {
                childList: true,
                subtree: true,
                attributes: true
            });
        }

        return () => observer.disconnect();
    });

    return {
        startIndex,
        endIndex,
        translateY,
        totalHeight,
        getRowRef,
        resetActualData,
        addActualDataItem,
    };
}