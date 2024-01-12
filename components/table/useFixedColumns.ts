import {
    useInstance,
    VNodeComponentClass,
    Props,
    Key,
    findDomFromVNode,
    nextTick,
} from 'intact';
import {TableColumn, TableColumnProps} from './column';
import {useState} from '../../hooks/useState';
import {cx} from '@emotion/css';
import type {TableProps, TableRowKey, Table} from './table';
import {State, watchState} from '../../hooks/useState';
import {createContext} from '../context';
import type {useScroll} from './useScroll';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { isEqualObject } from '../utils';

type ScrollPosition = 'left' | 'middle' | 'right';
type FixedInfo = {
    hasFixedLeft: boolean
    hasFixedRight: boolean
};

export const context = createContext();

export function useFixedColumns(
    getColumns: () => VNodeComponentClass<TableColumn>[][],
    {scrollRef, callbacks}: ReturnType<typeof useScroll>,
    widthMap: State<Record<TableRowKey, number>>, 
) {
    const instance = useInstance() as Table;
    const scrollPosition = useState<ScrollPosition | null>(null);
    const hasFixed = useState<boolean>(false);
    const offsetMap = useState<Record<Key, number>>({}, isEqualObject);
    let hasFixedLeft = false;
    let hasFixedRight = false;

    callbacks.push(setScrollPosition);

    instance.watch('children', handleFixedColumnsAndUpdate, { presented: true });
    watchState(widthMap, () => nextTick(handleFixedColumnsAndUpdate));
    useResizeObserver(scrollRef, handleFixedColumnsAndUpdate, true);

    function handleFixedColumnsAndUpdate() {
        handleFixedColumns();
        updateScrollPositionOnResize();
    }

    function handleFixedColumns() {
        const columns = getColumns();

        let _offsetMap: Record<Key, number> = {};
        hasFixedLeft = false;
        hasFixedRight = false;

        columns.forEach((columns, row) => {
            columns.forEach((vNode, col) => {
                const props = vNode.props as Props<TableColumnProps>;
                const key = props.key;

                const fixed = props.fixed;
                if (fixed === 'left') {
                    let value = 0;
                    let prevVNode = props.prevVNode;
                    while (prevVNode) {
                        const props = prevVNode.props!;
                        if (props.fixed === 'left') {
                            value += getWidth(prevVNode);
                        }
                        prevVNode = props.prevVNode;
                    }
                    _offsetMap[key] = value;
                    hasFixedLeft = true;
                } else if (fixed === 'right') {
                    let value = 0;
                    let nextVNode = props.nextVNode;
                    while (nextVNode) {
                        const props = nextVNode.props!; 
                        if (props.fixed === 'right') {
                            value += getWidth(nextVNode);
                        }
                        nextVNode = props.nextVNode;
                    }
                    _offsetMap[key] = value;
                    hasFixedRight = true;
                }
            });
        });

        offsetMap.set(_offsetMap);
        hasFixed.set(hasFixedLeft || hasFixedRight);
    }

    function setScrollPosition(scrollLeft: number) {
        if (!hasFixed.value) return;

        const scrollDom = scrollRef.value!;
        const maxScroll = scrollDom.scrollWidth - scrollDom.offsetWidth;
        scrollPosition.set(
            scrollLeft === 0 ? 'left' :
                scrollLeft >= maxScroll ?
                    'right' :
                    'middle'
        );
    }

    function updateScrollPositionOnResize() {
        const scrollDom = scrollRef.value!;     
        if (!hasFixed.value || scrollDom.scrollWidth - scrollDom.offsetWidth <= 0) {
            scrollPosition.set(null);
        } else {
            setScrollPosition(scrollRef.value!.scrollLeft);
        }
    }

    return {
        scrollPosition,
        setScrollPosition,
        hasFixed,
        offsetMap,
        getHasFixedLeft: () => hasFixedLeft,
    };
}

export function getClassAndStyleForFixed(
    {className, fixed, align}: Props<TableColumnProps>,
    offset: number,
    k: string,
    checkType?: TableProps['checkType'],
) {
    const extraOffset = checkType && checkType !== 'none' && fixed === 'left' ? 40 : 0;
    return {
        className: cx({
            [className as string]: !!className,
            [`${k}-fixed-${fixed}`]: !!fixed,
            [`${k}-align-${align}`]: !!align,
        }),
        style: fixed ? {[fixed]: `${offset + extraOffset}px`} : null,
    };
}

function getWidth(vNode: VNodeComponentClass) {
    const dom = findDomFromVNode(vNode, true) as HTMLElement;
    return dom.offsetWidth;
}
