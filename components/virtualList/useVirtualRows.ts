import { createContext } from '../context';
import { useState, watchState, State } from '../../hooks/useState';
import { useInstance, nextTick, VNode, onMounted, onUnmounted, Key, findDomFromVNode } from 'intact';
import { VirtualListContainer } from './container';

type ContextValue = {
    notifyRows: (rows: State<VNode[]>) => void;
    startIndex: number;
    endIndex: number;
}

export const context = createContext<ContextValue>();

const MIN_LENGTH = 10;
const BUFFER_SIZE = 3;

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
        length.set(Math.max(Math.ceil(containerHeight / rowAvgHeight) + BUFFER_SIZE * 2, MIN_LENGTH));

        containerDom.addEventListener('scroll', handleScroll);

    });

    onUnmounted(() => {
        containerDom.removeEventListener('scroll', handleScroll); 
    });

    function getTotalHeight() {
        return calculatedHeight + rowAvgHeight * (rows.value.length - rowsHeightMap.size);
    }

    const translateY = useState(0);
    function handleScroll() {
        const scrollTop = containerDom.scrollTop;

        let accumulatedHeight = 0;
        let start = 0;

        while (start < rows.value.length) {
            accumulatedHeight += getRowHeightByIndex(start);
            if (accumulatedHeight > scrollTop) {
                break;
            }

            start++;
        }

        startIndex.set(Math.max(start - BUFFER_SIZE, 0));

        // translateY should substract the buffer size rows height
        for (let i = start; i >= startIndex.value; i--) {
            accumulatedHeight -= getRowHeightByIndex(i); 
        }

        translateY.set(accumulatedHeight);
    }

    function getRowHeightByIndex(index: number) {
        const key = rows.value[index].key!;
        return rowsHeightMap.get(key) || rowAvgHeight;
    }

    return { notifyRows, startIndex, length, getTotalHeight, translateY };
}
