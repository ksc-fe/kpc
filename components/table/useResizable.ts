import {useInstance, VNodeComponentClass, RefObject, findDomFromVNode, createRef} from 'intact';
import {createContext} from '../context';
import type {Table, TableRowKey} from './table';
import {useDraggable} from '../../hooks/useDraggable';
import type {TableColumn} from './column';
import {useState} from '../../hooks/useState';

export const context = createContext();

type ColumnVNode = VNodeComponentClass<TableColumn>

export function useResizable(scrollRef: RefObject<HTMLElement>) {
    const instance = useInstance() as Table;
    const tableRef = createRef<HTMLElement>();
    const widthMap = useState<Record<TableRowKey, number>>({}); 
    const tableWidth = useState<number | null>(null);

    let containerWidth: number;
    let x: number;
    let prevVNode: ColumnVNode;
    let prevTh: HTMLElement;
    let currentVNode: ColumnVNode;
    let currentTh: HTMLElement;
    let minWidth: number;

    function onStart(e: MouseEvent) {
        console.log(e);
        containerWidth = scrollRef.value!.clientWidth;
        x = e.clientX;

        // find the previous column but exclude the hidden columns, #467
        prevVNode = currentVNode = (e as MouseEvent & {_vNode: ColumnVNode})._vNode;
        prevTh;
        do {
            prevVNode = prevVNode.props!.prevVNode!;
            prevTh = findDomFromVNode(prevVNode, true) as HTMLElement;
        } while(window.getComputedStyle(prevTh).display === 'none');

        currentTh = findDomFromVNode(currentVNode, true) as HTMLElement;
        minWidth = prevVNode.props!.minWidth || instance.get('minColWidth')!;
    }

    function onMove(e: MouseEvent) {
        const delX = e.clientX - x;
        if (delX === 0) return;

        const newPrevWidth = prevTh.offsetWidth + delX;
        if (newPrevWidth < minWidth && delX < 0) return;

        const newCurrentWidth = currentTh.offsetWidth - delX;
        const newTableWidth = tableRef.value!.offsetWidth + delX;
        const currentKey = currentVNode.props!.key;
        const prevKey = prevVNode.props!.key;

        x = e.clientX;

        const map = {
            [prevKey]:newPrevWidth 
        }

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

    function onEnd() {

    }

    function getWidth(key: TableRowKey) {
        const width = widthMap.value[key];
        // if (width === 'auto') return width;
        if (width) return `${width}px`;
        return null;
    }

    return {
        ...useDraggable({
            onStart,
            onMove,
            onEnd,
        }),
        getWidth,
        tableRef,
        tableWidth,
        widthMap,
    }
}
