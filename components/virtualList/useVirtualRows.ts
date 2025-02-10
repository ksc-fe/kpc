import { createContext } from '../context';
import { useState, watchState, State } from '../../hooks/useState';
import { useInstance, nextTick, VNode, onMounted, onUnmounted, Key, findDomFromVNode } from 'intact';
import { VirtualListContainer } from './container';
import { isNullOrUndefined } from 'intact-shared';

type ContextValue = {
    notifyRows: (rows: State<VNode[]>) => void;
    startIndex: number;
    endIndex: number;
}

export const context = createContext<ContextValue>();

const MIN_LENGTH = 10;
const BUFFER_SIZE = 3;

export function useVirtualRows() {
    const instance = useInstance() as unknown as VirtualListContainer;
    const rowsHeightMap = new Map<Key, number>();
    const startIndex = useState(0);
    const length = useState(MIN_LENGTH);

    let calculatedHeight = 0;
    let rowAvgHeight = 30;
    let rows: VNode[] = [];
    function notifyRows(_rows: VNode[]) { 
        if (_rows === rows) return;

        const oldRows = rows;
        const oldLength = rows.length;
        rows = _rows;

        // diff oldRows, newRows
        if (!_rows.length) {
            calculatedHeight = 0;
            rowsHeightMap.clear();
        } else {
            const newKeys = new Set(_rows.map(row => row.key));

            for (let i = 0; i < oldLength; i++) {
                const oldKey = oldRows[i].key!;
                if (!newKeys.has(oldKey)) {
                    const height = rowsHeightMap.get(oldKey);
                    if (!isNullOrUndefined(height)) {
                        calculatedHeight -= height;
                        rowsHeightMap.delete(oldKey);
                    }
                }
            }
        }
    
        if (_rows.length < oldLength) {
            const maxStartIndex = Math.max(0, _rows.length - length.value);
            if (startIndex.value > maxStartIndex) {
                startIndex.set(maxStartIndex);
                nextTick(() => {
                    handleScroll();
                });
            }
        }

        instance.forceUpdate(() => {
            calculateRowsHeight();
        });
    }

    function calculateRowsHeight() {
        if (!rows.length) return;
        for (
            let i = startIndex.value;
            i < startIndex.value + length.value && i < rows.length;
            i++
        ) {
            const row = rows[i];
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

        const containerHeight = containerDom.offsetHeight;
        // calculate the length of rows we should render
        length.set(Math.max(Math.ceil(containerHeight / rowAvgHeight) + BUFFER_SIZE * 2, MIN_LENGTH));
    }

    watchState(startIndex, () => {
        nextTick(calculateRowsHeight);
    });

    let containerDom: HTMLElement;
    onMounted(() => {
        // get contains height
        containerDom = findDomFromVNode(instance.$lastInput!, true) as HTMLElement;

        calculateRowsHeight();
        containerDom.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        containerDom.removeEventListener('scroll', handleScroll); 
    });

    function getTotalHeight() {
        return calculatedHeight + rowAvgHeight * (rows.length - rowsHeightMap.size);
    }

    const translateY = useState(0);
    function handleScroll() {
        const { disabled } = instance.get();
        if (disabled) return;
        
        const scrollTop = containerDom.scrollTop;

        let accumulatedHeight = 0;
        let start = 0;

        while (start < rows.length) {
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
        const key = rows[index].key!;
        return rowsHeightMap.get(key) || rowAvgHeight;
    }

    return { notifyRows, startIndex, length, getTotalHeight, translateY };
}
