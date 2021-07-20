import {useInstance, VNodeComponentClass, Props, directClone} from 'intact';
import {TableColumn, TableColumnProps} from './column';
import {useState} from '../../hooks/useState';
import {cx} from '@emotion/css';

type ScrollPosition = 'left' | 'middle' | 'right';
type FixedInfo = {
    hasFixedLeft: boolean
    hasFixedRight: boolean
};

export function useFixedColumns(getColumns: () => VNodeComponentClass<TableColumn>[]) {
    const instance = useInstance()!;

    const scrollPosition = useState<ScrollPosition>('left');
    const hasFixed = useState<boolean>(false);
    let scrollLeft = 0;

    let offset = 0;
    let lastLeftFixedIndex = -1;
    let firstRightFixedIndex = -1;
    let hasFixedLeft = false;
    let hasFixedRight = false;

    function init() {
        offset = 0;
        lastLeftFixedIndex = -1;
        firstRightFixedIndex = -1;
    }

    function handleFixedColumns() {
        const columns = getColumns();

        init();
        columns.forEach((vNode, index) => {
            const props = vNode.props!;
            const scheme = {
                ...props,
                shadow: false,
                offset: 0,
            };
            vNode.props = scheme;

            const fixed = props.fixed;
            if (fixed === 'left') {
                scheme.offset = offset;
                offset += props.width as number; 
                lastLeftFixedIndex = index;
            } else if (fixed === 'right') {
                scheme.shadow = true;
                firstRightFixedIndex = index;
            }
        });

        hasFixedLeft = lastLeftFixedIndex > -1;
        hasFixedRight = firstRightFixedIndex > -1;

        // mark the last fixed left column as shadow
        if (hasFixedLeft) {
            (columns[lastLeftFixedIndex].props as TableColumnProps).shadow = true;
        }

        // calculate the offset of fixed right columns
        if (hasFixedRight) {
            let offset = 0;
            for (let i = columns.length - 1; i >= firstRightFixedIndex; i--) {
                const scheme = columns[i].props as TableColumnProps;
                if (scheme.fixed === 'right') {
                    scheme.offset = offset;
                    offset += scheme.width as number;
                }
            }
        }

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

    instance.on('$receive:children', handleFixedColumns);

    return {scrollPosition, onScroll, hasFixed};
}

export function getClassAndStyleForFixed({className, fixed, shadow, offset}: Props<TableColumnProps>) {
    return {
        className: cx({
            [className as string]: !!className,
            [`k-fixed-${fixed}`]: !!fixed,
            'k-shadow': shadow,
        }),
        style: fixed ? {[fixed]: `${offset}px`} : null,
    };
}

