import {RefObject, onMounted, onBeforeUnmount, createRef} from 'intact';

export type ScrollCallback = (scrollLeft: number) => void;

export function useScroll() {
    const callbacks: ScrollCallback[] = [];
    const scrollRef = createRef<HTMLElement>();

    let scrollLeft = 0;
    function onScroll() {
        const newScrollLeft = scrollRef.value!.scrollLeft; 
        if (scrollLeft !== newScrollLeft) {
            scrollLeft = newScrollLeft;
            callbacks.forEach(fn => fn(scrollLeft));
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
