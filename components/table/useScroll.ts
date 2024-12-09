import {RefObject, onMounted, onBeforeUnmount, createRef} from 'intact';

export type ScrollCallback = (scrollLeft: number,  scrollTop?: number) => void;

export function useScroll() {
    const callbacks: ScrollCallback[] = [];
    const scrollRef = createRef<HTMLElement>();

    let scrollLeft = 0;
    let scrollTop = 0;
    function onScroll() {
        const element = scrollRef.value!;
        const newScrollLeft = element.scrollLeft;
        const newScrollTop = element.scrollTop;
        
        if (scrollLeft !== newScrollLeft || scrollTop !== newScrollTop) {
            scrollLeft = newScrollLeft;
            scrollTop = newScrollTop;
            callbacks.forEach(fn => fn(scrollLeft, scrollTop));
        }
    }

    onMounted(() => {
        scrollRef.value!.addEventListener('scroll', onScroll, {passive: true});
    });

    onBeforeUnmount(() => {
        scrollRef.value!.removeEventListener('scroll', onScroll);
    });

    return {callbacks, scrollRef};
}
