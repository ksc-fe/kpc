import {useInstance, VNodeComponentClass, RefObject, findDomFromVNode, createRef} from 'intact';
import {createContext} from '../context';
import type {Table, TableRowKey} from './table';
import {useDraggable} from '../../hooks/useDraggable';
import type {TableColumn} from './column';
import {useState, State} from '../../hooks/useState';

export const context = createContext();

type ColumnVNode = VNodeComponentClass<TableColumn>

export function useResizable(
    scrollRef: RefObject<HTMLElement>,
    tableRef: RefObject<HTMLElement>,
    tableWidth: State<number | null>,
    widthMap: State<Record<TableRowKey, number>>,
    storeWidth: () => void,
) {
    const instance = useInstance() as Table;

    let containerWidth: number;
    let x: number;
    let prevVNode: ColumnVNode;
    let prevTh: HTMLElement;
    let prevMinWidth: number;
    let currentVNode: ColumnVNode;
    let currentTh: HTMLElement;
    let currentMinWidth: number;
    let nextVNode: ColumnVNode | null | undefined;

    function onStart(e: MouseEvent) {
        containerWidth = scrollRef.value!.clientWidth;
        x = e.clientX;

        // find the previous column but exclude the hidden columns, #467
        prevVNode = nextVNode = currentVNode = (e as MouseEvent & {_vNode: ColumnVNode})._vNode;
        prevTh;
        do {
            prevVNode = prevVNode.props!.prevVNode!;
            prevTh = findDomFromVNode(prevVNode, true) as HTMLElement;
        } while(window.getComputedStyle(prevTh).display === 'none');

        currentTh = findDomFromVNode(currentVNode, true) as HTMLElement;
        prevMinWidth= prevVNode.props!.minWidth || instance.get('minColWidth')!;
        currentMinWidth = currentVNode.props!.minWidth || instance.get('minColWidth')!;

        while (nextVNode = nextVNode?.props!.nextVNode) {
            const th = findDomFromVNode(nextVNode, true) as HTMLElement;
            if (window.getComputedStyle(th).display === 'none') {
                continue;
            }
            break;
        }
    }

    function onMove(e: MouseEvent) {
        const delX = e.clientX - x;
        if (delX === 0) return;

        let newPrevWidth = prevTh.offsetWidth + delX;
        let newCurrentWidth = currentTh.offsetWidth - delX;
        let newTableWidth = tableRef.value!.offsetWidth + delX;
        const isCurrentFixedRight = currentVNode.props!.fixed === 'right';
        // const isPrevFixedRight = prevVNode.props!.fixed === 'right';

        if ((newPrevWidth < prevMinWidth || isCurrentFixedRight) && delX < 0) {
            // if (nextVNode) return;
            // the last column, we should expand its width
            if (newPrevWidth < prevMinWidth) {
                newPrevWidth -= delX; 
                newTableWidth -= delX;
            }
        }

        const currentKey = currentVNode.props!.key;
        const prevKey = prevVNode.props!.key;
        const map = {
            [prevKey]: newPrevWidth 
        }

        if (!nextVNode || isCurrentFixedRight) {
            newTableWidth -= delX;
            if (newCurrentWidth < currentMinWidth && delX > 0) {
                newCurrentWidth = currentMinWidth;
            }
            map[currentKey] = newCurrentWidth;
        }

        x = e.clientX;

        if (containerWidth > newTableWidth) {
            map[currentKey] = newCurrentWidth;
        } else {
            tableWidth.set(newTableWidth);
        }

        widthMap.set({
            ...widthMap.value,
            ...map,
        });
    }

    return useDraggable({
        onStart,
        onMove,
        onEnd: storeWidth,
    });
}
