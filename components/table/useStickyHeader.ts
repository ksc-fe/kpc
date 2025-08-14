import {createRef, useInstance, onMounted, onBeforeUnmount, RefObject} from 'intact';
import {ExcludeParam} from '../affix';
import {useState} from '../../hooks/useState';
import type {Table} from './';
import {isStringOrNumber, isNull} from 'intact-shared';
import type {ScrollCallback} from './useScroll';

export function useStickyHeader(callbacks: ScrollCallback[]) {
    const instance = useInstance() as Table;
    const elementRef = createRef<HTMLElement>();
    const headRef = createRef<HTMLElement>();
    const stickHeader = useState<number | null>(null);

    function excludeStickHeader({offsetTop}: ExcludeParam) {
        const {bottom} = elementRef.value!.getBoundingClientRect();
        return bottom <= offsetTop!;
    }

    instance.on('$receive:stickHeader', v => {
        stickHeader.set(v === true ? 0 : isStringOrNumber(v) ? +v : null);
    });

    // when the scroll element scroll horizontally, scroll the sticky header too 
    callbacks.push(scrollLeft => {
        if (isNull(stickHeader.value) && !instance.get('fixHeader')) return;

        const affixHeadWrapper = headRef.value!.parentElement as HTMLElement;
        affixHeadWrapper.scrollLeft = scrollLeft;
    });

    return {stickHeader, excludeStickHeader, elementRef, headRef};
}

