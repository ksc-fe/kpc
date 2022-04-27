import {useInstance, createRef, onMounted, onUpdated, onUnmounted} from 'intact';
import {useState} from '../../hooks/useState';
import type {Tabs} from './';
import {useResizeObserver} from '../../hooks/useResizeObserver';

export function useScroll() {
    const instance = useInstance() as Tabs;
    const scrollRef = createRef<HTMLElement>();
    const wrapperRef = createRef<HTMLElement>();
    const isScroll = useState<boolean>(false);
    const left = useState<number>(0);
    const enablePrev = useState<boolean>(false);
    const enableNext = useState<boolean>(false);

    onMounted(refresh);
    onUpdated(refresh);
    useResizeObserver(scrollRef, refresh);

    instance.watch('value', scrollActiveToView, {presented: true});

    function refresh() {
        const {vertical} = instance.get();
        if (vertical) return;

        const scrollWidth = scrollRef.value!.offsetWidth;
        const wrapperWidth = wrapperRef.value!.offsetWidth;

        isScroll.set(scrollWidth < wrapperWidth);
        updateTransition(left.value, scrollWidth, wrapperWidth);
    }

    function updateTransition(
        _left = left.value,
        scrollWidth = scrollRef.value!.offsetWidth,
        wrapperWidth = wrapperRef.value!.offsetWidth,
    ) {
        let prev = true;
        let next = true;
        if (_left >= 0) {
            _left = 0;
            prev = false;
        } else if (_left <= scrollWidth - wrapperWidth) {
            _left = scrollWidth - wrapperWidth;
            next = false;
        }

        left.set(_left);
        enablePrev.set(prev);
        enableNext.set(next);
    }

    function prev() {
        const scrollWidth = scrollRef.value!.offsetWidth;
        updateTransition(left.value + scrollWidth);
    }

    function next() {
        const scrollWidth = scrollRef.value!.offsetWidth;
        updateTransition(left.value - scrollWidth);
    }

    function scrollActiveToView() {
        const {vertical} = instance.get();
        if (vertical) return;

        const activeTab = scrollRef.value!.querySelector('.k-tab.k-active') as HTMLElement;
        if (activeTab) {
            let _left = left.value;
            // don't use getBoundingClientRect, it has transform and will return digital number
            const activeRect = {
                left: activeTab.offsetLeft,
                width: activeTab.offsetWidth
            };
            const scrollRect = {
                width: scrollRef.value!.offsetWidth
            };
            const wrapperRect = {
                left: wrapperRef.value!.offsetLeft,
                width: wrapperRef.value!.offsetWidth
            };
            const x = activeRect.left - wrapperRect.left;
            if (_left + x <= 0) {
                _left = -x;
            } else if (x + activeRect.width + _left > scrollRect.width) {
                _left = -x - activeRect.width + scrollRect.width;
            }
            left.set(_left);
        } else {
            left.set(0);
        }
    }

    return {isScroll, left, enablePrev, enableNext, prev, next, scrollRef, wrapperRef};
}
