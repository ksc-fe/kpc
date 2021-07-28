import {useInstance, VNodeComponentClass, Props, directClone, onMounted, onUnmounted, RefObject} from 'intact';
import {TableColumn, TableColumnProps} from './column';
import {useState} from '../../hooks/useState';
import {cx} from '@emotion/css';
import type {TableProps} from './table';
import {isNullOrUndefined, isString, error} from 'intact-shared';
import {throttle} from '../utils';

type ScrollPosition = 'left' | 'middle' | 'right';
type FixedInfo = {
    hasFixedLeft: boolean
    hasFixedRight: boolean
};

export function useFixedColumns(
    getColumns: () => VNodeComponentClass<TableColumn>[][],
    scrollRef: RefObject<HTMLElement>,
) {
    const instance = useInstance()!;

    const scrollPosition = useState<ScrollPosition | null>(null);
    const hasFixed = useState<boolean>(false);
    let scrollLeft = 0;

    let hasFixedLeft = false;
    let hasFixedRight = false;

    function handleFixedColumns() {
        const columns = getColumns();

        hasFixedLeft = false;
        hasFixedRight = false;

        columns.forEach((columns, row) => {
            let offset = 0;
            columns.forEach((vNode, col) => {
                const props = vNode.props as Props<TableColumnProps>;
                props.offset = 0;

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
                            value += parseInt(props.width as string, 10) || 0;
                        }
                        prevVNode = props.prevVNode;
                    }
                    props.offset = value;
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
                            value += parseInt(props.width as string, 10) || 0;
                        }
                        lastVNode = props.prevVNode!;
                    }
                    props.offset = value;
                    hasFixedRight = true;
                }
            });
        });

        hasFixed.set(hasFixedLeft || hasFixedRight);
    }

    function onScroll(e: Event) {
        if (!hasFixed.value) return;

        const scrollDom = e.target as HTMLElement;
        const newScrollLeft = scrollDom.scrollLeft;
        if (scrollLeft !== newScrollLeft) {
            scrollLeft = newScrollLeft;

            const maxScroll = scrollDom.scrollWidth - scrollDom.offsetWidth;
            scrollPosition.set(
                scrollLeft === 0 ? 'left' :
                    scrollLeft >= maxScroll ?
                        'right' :
                        'middle'
            );
        }
    }

    function updateScrollPositionOnResize() {
        const scrollDom = scrollRef.value!;     
        if (scrollDom.scrollWidth - scrollDom.offsetWidth <= 0) {
            scrollPosition.set(null);
        } else {
            scrollPosition.set('left');
        }
    }

    instance.on('$receive:children', handleFixedColumns);

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

    return {scrollPosition, onScroll, hasFixed, getHasFixedLeft: () => hasFixedLeft};
}

export function getClassAndStyleForFixed(
    {className, fixed, offset}: Props<TableColumnProps>,
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
