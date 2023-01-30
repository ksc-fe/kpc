import {createRef, useInstance, onMounted, onBeforeUnmount, RefObject, nextTick} from 'intact';
import {ShouldFixParam} from '../affix';
import {useState, State, watchState} from '../../hooks/useState';
import type {Table} from './';
import {isStringOrNumber, isNull} from 'intact-shared';
import {debounce} from '../utils';
import type {useScroll} from './useScroll';
import {useResizeObserver} from './useResizeObserver';

export function useStickyScrollbar(
    elementRef: RefObject<HTMLElement>,
    {scrollRef, callbacks}: ReturnType<typeof useScroll>,
    tableRef: RefObject<HTMLElement>,
    tableScroll: (scrollLeft: number) => void,
) {
    const instance = useInstance() as Table;
    const stick = useState<number | null>(null);
    const style = useState<Record<string, string> | null>(null);
    const scrollbarRef = createRef<HTMLElement>();
    const tableActualWidth = useState<string | null>(null);

    instance.on('$receive:stickScrollbar', v => {
        stick.set(v === true ? 0 : isStringOrNumber(v) ? +v : null);
    });

    useResizeObserver(scrollRef, setTableActualWidth);

    onMounted(() => {
        setTableActualWidth();
    });

    callbacks.push(onTableScroll);

    let scrollLeft = 0;
    function shouldStickScrollbar({offsetBottom, viewportHeight}: ShouldFixParam) {
        const {top, bottom} = elementRef.value!.getBoundingClientRect();
        const p = viewportHeight! - offsetBottom!;
        if (bottom >= p && top < p) {
            style.set(null); 
            // update scrollLeft, because it can not be updated when it is hidden
            nextTick(() => {
                scrollbarRef.value!.scrollLeft = scrollLeft;
            });
            return true;
        } else {
            style.set({display: 'none'});
            return false;
        }
    }

    let lock = false;
    function onTableScroll(_scrollLeft: number) {
        if (isNull(stick.value) || lock) return;

        scrollbarRef.value!.scrollLeft = scrollLeft = _scrollLeft;
    }

    const unlock = debounce(() => lock = false, 100);
    function onScroll(e: Event) {
        lock = true;
        scrollRef.value!.scrollLeft = scrollLeft = scrollbarRef.value!.scrollLeft; 
        unlock();
        tableScroll(scrollLeft);
    }

    function setTableActualWidth() {
        tableActualWidth.set(tableRef.value!.offsetWidth + 'px');
    }

    return {shouldStickScrollbar, stick, style, scrollbarRef, onScroll, tableActualWidth};
}

