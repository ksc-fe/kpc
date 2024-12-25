import { createContext } from '../context';
import { useState, watchState, State } from '../../hooks/useState';
import { useInstance, nextTick, VNode, onMounted, onUnmounted, Key, onUpdated, findDomFromVNode, createRef, normalizeChildren, createFragment, createVNode, ChildrenTypes, createVoidVNode } from 'intact';
import { VirtualListContainer } from './container';

type ContextValue = {
    notifyRows: (rows: State<VNode[]>) => void;
    startIndex: number;
    endIndex: number;
}

export const context = createContext<ContextValue>();

const MIN_LENGTH = 10;
const BUFFER_SIZE = 6;

export function useVirtualRows() {
    const instance = useInstance() as VirtualListContainer;
    const rowsHeightMap = new Map<Key, number>();
    const startIndex = useState(0);
    const length = useState(MIN_LENGTH);

    let rows  = useState<VNode[]>([]);
    function notifyRows(_rows: State<VNode[]>) { 
         rows = _rows;
    }

    let calculatedHeight = 0;
    let rowAvgHeight = 0;
    function calculateRowsHeight() {
        for (
            let i = startIndex.value;
            i < startIndex.value + length.value && i < rows.value.length;
            i++
        ) {
            const row = rows.value[i];
            const key = row.key!;
            if (!rowsHeightMap.has(key)) {
                const rowDom = findDomFromVNode(row, true) as HTMLElement;
                const height = rowDom.offsetHeight;
                rowsHeightMap.set(key, height); 
                calculatedHeight += height;
            }
        }

        // use the average height to estimate the row height
        rowAvgHeight = calculatedHeight / rowsHeightMap.size;
    }

    watchState(startIndex, () => {
        nextTick(calculateRowsHeight);
    });

    let containerDom: HTMLElement;
    onMounted(() => {
        // get contains height
        containerDom = findDomFromVNode(instance.$lastInput!, true) as HTMLElement;
        const containerHeight = containerDom.offsetHeight;

        calculateRowsHeight();

        // calculate the length of rows we should render
        length.set(Math.max(Math.ceil(containerHeight / rowAvgHeight) + BUFFER_SIZE, MIN_LENGTH));

        containerDom.addEventListener('scroll', handleScroll);

    });

    onUnmounted(() => {
        containerDom.removeEventListener('scroll', handleScroll); 
    });

    function getTotalHeight() {
        return calculatedHeight + rowAvgHeight * (rows.value.length - rowsHeightMap.size);
    }

    let lastScrollTop = 0;
    function handleScroll() {
        requestAnimationFrame(() => {
            const scrollTop = containerDom.scrollTop;

            let accumulatedHeight = 0;
            let start = 0;

            while (start < rows.value.length) {
                const key = rows.value[start].key!;
                const rowHeight = rowsHeightMap.get(key) || rowAvgHeight;

                accumulatedHeight += rowHeight;
                if (accumulatedHeight > scrollTop) {
                    break;
                }

                start++;
            }

            console.log('newValue', Math.max(start - BUFFER_SIZE / 2, 0), 'oldValue', startIndex.value, 'newScrollTop', scrollTop, 'lastScrollTop', lastScrollTop);
            // if (lastScrollTop > scrollTop) debugger;
            lastScrollTop = scrollTop;
            startIndex.set(Math.max(start - BUFFER_SIZE / 2, 0));
        });
    }

    return { notifyRows, startIndex, length, getTotalHeight };
}
