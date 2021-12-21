import {
    useInstance,
    VNodeComponentClass,
    Props,
    directClone,
    onMounted,
    onUnmounted,
    RefObject,
    Key,
} from 'intact';
import {TableColumn, TableColumnProps} from './column';
import {useState} from '../../hooks/useState';
import {cx} from '@emotion/css';
import type {TableProps, TableRowKey} from './table';
import {isNullOrUndefined, isString, error} from 'intact-shared';
import {throttle} from '../utils';
import {State, watchState} from '../../hooks/useState';
import {createContext} from '../context';
import type {useScroll} from './useScroll';

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
    const instance = useInstance()!;
    const scrollPosition = useState<ScrollPosition | null>(null);
    const hasFixed = useState<boolean>(false);
    let hasFixedLeft = false;
    let hasFixedRight = false;
    let offsetMap: Record<Key, number> = {};

    callbacks.push(setScrollPosition);

    instance.on('$receive:children', handleFixedColumns);
    watchState(widthMap, handleFixedColumns);
    
    const throttleUpdate = throttle(() => {
        if (instance.$unmounted) return;
        updateScrollPositionOnResize();
    }, 100);

    onMounted(() => {
        updateScrollPositionOnResize();
        window.addEventListener('resize', throttleUpdate);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', throttleUpdate);
    });

    function handleFixedColumns() {
        const columns = getColumns();

        hasFixedLeft = false;
        hasFixedRight = false;
        offsetMap = {};

        columns.forEach((columns, row) => {
            let offset = 0;
            columns.forEach((vNode, col) => {
                const props = vNode.props as Props<TableColumnProps>;
                const key = props.key;
                offsetMap[key] = 0;

                const fixed = props.fixed;
                if (fixed === 'left') {
                    let value = 0;
                    let prevVNode = props.prevVNode;
                    while (prevVNode) {
                        const props = prevVNode.props!;
                        if (props.fixed === 'left') {
                            if (process.env.NODE_ENV !== 'production') {
                                validateWidth(props);
                            }
                            value += widthMap.value[props.key] || parseInt(props.width as string, 10) || 0;
                        }
                        prevVNode = props.prevVNode;
                    }
                    offsetMap[key] = value;
                    hasFixedLeft = true;
                } else if (fixed === 'right') {
                    let value = 0;
                    let lastVNode = columns[columns.length - 1];
                    while (vNode !== lastVNode) {
                        const props = lastVNode.props!; 
                        if (props.fixed === 'right') {
                            if (process.env.NODE_ENV !== 'production') {
                                validateWidth(props);
                            }
                            value += widthMap.value[props.key] || parseInt(props.width as string, 10) || 0;
                        }
                        lastVNode = props.prevVNode!;
                    }
                    offsetMap[key] = value;
                    hasFixedRight = true;
                }
            });
        });

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
        if (scrollDom.scrollWidth - scrollDom.offsetWidth <= 0) {
            scrollPosition.set(null);
        } else {
            scrollPosition.set('left');
        }
    }

    return {
        scrollPosition,
        setScrollPosition,
        hasFixed,
        getHasFixedLeft: () => hasFixedLeft,
        getOffsetMap: () => offsetMap,
    };
}

export function getClassAndStyleForFixed(
    {className, fixed}: Props<TableColumnProps>,
    offset: number,
    checkType?: TableProps['checkType'],
) {
    const extraOffset = checkType && checkType !== 'none' && fixed === 'left' ? 40 : 0;
    return {
        className: cx({
            [className as string]: !!className,
            [`k-fixed-${fixed}`]: !!fixed,
        }),
        style: fixed ? {[fixed]: `${offset + extraOffset}px`} : null,
    };
}


function validateWidth({width, key}: TableColumnProps) {
    if (isNullOrUndefined(width) || isString(width) && !/\d+(px)?/.test(width)) {
        error(`The width must be specified with 'px' when the column has fixed. <TableColumn key="${key}" />`);
    }
}
