import {createRef, useInstance, onMounted, onBeforeUnmount} from 'intact';
import {ExcludeParam} from '../affix';
import {useState} from '../../hooks/useState';
import type {Table} from './';
import {isStringOrNumber, isNull} from 'intact-shared';

export function useStickyHeader() {
    const instance = useInstance() as Table;
    const elementRef = createRef<HTMLElement>();
    const scrollRef = createRef<HTMLElement>();
    const headRef = createRef<HTMLElement>();
    const stickHeader = useState<number | null>(null);

    function excludeStickHeader({offsetTop}: ExcludeParam) {
        const {bottom} = elementRef.value!.getBoundingClientRect();
        return bottom <= offsetTop!;
    }

    // when the scroll element scroll horizontally, scroll the sticky header too 
    function onScroll() {
        if (isNull(stickHeader.value)) return;

        const scrollLeft = scrollRef.value!.scrollLeft;
        const affixHeadWrapper = headRef.value!.parentElement as HTMLElement;
        affixHeadWrapper.scrollLeft = scrollLeft;
    }

    instance.on('$receive:stickHeader', v => {
        stickHeader.set(v === true ? 0 : isStringOrNumber(v) ? +v : null);
    });

    onMounted(() => {
        scrollRef.value!.addEventListener('scroll', onScroll);
    });
    onBeforeUnmount(() => {
        scrollRef.value!.removeEventListener('scroll', onScroll);
    });

    return {stickHeader, excludeStickHeader, elementRef, scrollRef, headRef};
}

