import {createRef, useInstance, onMounted, onBeforeUnmount} from 'intact';
import {ExcludeParam} from '../affix';
import {useState} from '../../hooks/useState';
import type {Table} from './';
import {isStringOrNumber, isNull} from 'intact-shared';

export function useSticky() {
    const instance = useInstance() as Table;
    const elementRef = createRef<HTMLElement>();
    const scrollRef = createRef<HTMLElement>();
    const headRef = createRef<HTMLElement>();
    const stickHeader = useState<number | null>(null);

    function excludeStickHeader({offsetTop}: ExcludeParam) {
        const {bottom} = elementRef.value!.getBoundingClientRect();
        return bottom <= offsetTop!;
    }

    function onScroll() {
        if (isNull(stickHeader.value)) return;

        const scrollLeft = scrollRef.value!.scrollLeft;
        const affixHeadWrapper = headRef.value!.parentElement as HTMLElement;
        affixHeadWrapper.scrollLeft = scrollLeft;
    }

    instance.on('$receive:stickHeader', v => {
        if (v === true) {
            stickHeader.set(0);
        } else if (isStringOrNumber(v)) {
            stickHeader.set(Number(v));
        } else {
            stickHeader.set(null);
        }
    });

    onMounted(() => {
        scrollRef.value!.addEventListener('scroll', onScroll);
    });
    onBeforeUnmount(() => {
        scrollRef.value!.removeEventListener('scroll', onScroll);
    });

    return {stickHeader, excludeStickHeader, elementRef, scrollRef, headRef};
}
