import { createContext } from '../context';
import { useState, State } from '../../hooks/useState';
import { useInstance, VNode, Key, onMounted, onUpdated, findDomFromVNode, createRef, normalizeChildren, createFragment, createVNode, ChildrenTypes, createVoidVNode } from 'intact';
import { VirtualListContainer } from './container';

export function useScroll(rows: State<VNode[]>, startIndex: State<number>, length: State<number>) {
    const instance = useInstance() as VirtualListContainer;
    const rowsHeightMap = new Map<Key, number>();

    let calculatedHeight = 0;
    function calculateRowsHeight() {
        for (let i = startIndex.value; i < startIndex.value + length.value; i++) {
            const row = rows.value[i];
            const key = row.key!;
            if (!rowsHeightMap.has(key)) {
                const rowDom = findDomFromVNode(row, true) as HTMLElement;
                const height = rowDom.offsetHeight;
                rowsHeightMap.set(key, height); 
                calculatedHeight += height;
            }
        }
    }

    function getTotalHeight() {
        const calculatedSize = rowsHeightMap.size;
        return calculatedHeight + calculatedHeight / calculatedSize * (rows.value.length - calculatedSize);
    }

    let containerDom: HTMLElement;
    onMounted(() => {
        containerDom = findDomFromVNode(instance.$lastInput!, true) as HTMLElement;
    });
}
