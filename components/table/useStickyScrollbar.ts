import {createRef, useInstance, onMounted, onBeforeUnmount, RefObject, nextTick} from 'intact';
import {ShouldFixParam} from '../affix';
import {useState, State, watchState} from '../../hooks/useState';
import type {Table} from './';
import {isStringOrNumber, isNull} from 'intact-shared';
import {debounce} from '../utils';

export function useStickyScrollbar(
    elementRef: RefObject<HTMLElement>,
    scrollRef: RefObject<HTMLElement>,
    tableRef: RefObject<HTMLElement>,
    tableScroll: (e: Event) => void,
    tableWidth: State<number | null>,
) {
    const instance = useInstance() as Table;
    const stick = useState<number | null>(null);
    const style = useState<Record<string, string> | null>(null);
    const scrollbarRef = createRef<HTMLElement>();
    const tableActualWidth = useState<string | null>(null);

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
    function onTableScroll(e: Event) {
        if (isNull(stick.value) || lock) return;

        scrollbarRef.value!.scrollLeft = scrollLeft = scrollRef.value!.scrollLeft;
    }

    const unlock = debounce(() => lock = false, 100);
    function onScroll(e: Event) {
        lock = true;
        scrollRef.value!.scrollLeft = scrollLeft = scrollbarRef.value!.scrollLeft; 
        unlock();
        tableScroll(e);
    }

    instance.on('$receive:stickScrollbar', v => {
        stick.set(v === true ? 0 : isStringOrNumber(v) ? +v : null);
    });

    function setTableActualWidth() {
        tableActualWidth.set(tableRef.value!.offsetWidth + 'px');
    }

    watchState(tableWidth, v => {
        if (v) {
            tableActualWidth.set(v + 'px');
        } else {
            setTableActualWidth();
        }
    });

    onMounted(() => {
        scrollRef.value!.addEventListener('scroll', onTableScroll);

        setTableActualWidth();
    });
    onBeforeUnmount(() => {
        scrollRef.value!.removeEventListener('scroll', onTableScroll);
    });

    return {shouldStickScrollbar, stick, style, scrollbarRef, onScroll, tableActualWidth};
}

