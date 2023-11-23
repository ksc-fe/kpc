import {
    useInstance,
    createRef,
    onMounted,
    onUpdated,
    onUnmounted,
} from 'intact';
import {useState} from '../../hooks/useState';
import type {Tabs} from './';
import {useResizeObserver} from '../../hooks/useResizeObserver';

export function useScroll() {
    const instance = useInstance() as Tabs;
    const scrollRef = createRef<HTMLElement>();
    const wrapperRef = createRef<HTMLElement>();
    const isScroll = useState<boolean>(false);
    const offset = useState<number>(0);
    const enablePrev = useState<boolean>(false);
    const enableNext = useState<boolean>(false);

    onMounted(refresh);
    onUpdated(refresh);
    useResizeObserver(scrollRef, refresh);

    instance.watch('value', scrollActiveToView, {presented: true});

    function getLength() {
        const {vertical} = instance.get();

        if (vertical) {
            return {
                scrollLength: scrollRef.value!.offsetHeight,
                wrapperLength: wrapperRef.value!.offsetHeight,
            };
        }

        return {
            scrollLength: scrollRef.value!.offsetWidth,
            wrapperLength: wrapperRef.value!.offsetWidth,
        };
    }

    function refresh() {
        const {scrollLength, wrapperLength} = getLength();

        isScroll.set(scrollLength < wrapperLength);
        updateTransition(offset.value, scrollLength, wrapperLength);
    }

    function updateTransition(
        _offset: number,
        scrollLength: number,
        wrapperLength: number
    ) {
        let prev = true;
        let next = true;
        if (_offset >= 0) {
            _offset = 0;
            prev = false;
        } else if (_offset <= scrollLength - wrapperLength) {
            _offset = scrollLength - wrapperLength;
            next = false;
        }

        offset.set(_offset);
        enablePrev.set(prev);
        enableNext.set(next);
    }

    function prev() {
        const {scrollLength, wrapperLength} = getLength();

        updateTransition(
            offset.value + scrollLength,
            scrollLength,
            wrapperLength
        );
    }

    function next() {
        const {scrollLength, wrapperLength} = getLength();

        updateTransition(
            offset.value - scrollLength,
            scrollLength,
            wrapperLength
        );
    }

    function scrollActiveToView() {
        const {vertical} = instance.get();
        const { k } = instance.config;

        const activeTab = scrollRef.value!.querySelector(
            `.${k}-tab.${k}-active`
        ) as HTMLElement;
        if (activeTab) {
            let _offset = offset.value;
            // don't use getBoundingClientRect, it has transform and will return digital number
            let activeRect: {offset: number; length: number};
            let scrollRect: {length: number};
            let wrapperRect: {offset: number; length: number};

            if (vertical) {
                activeRect = {
                    offset: activeTab.offsetTop,
                    length: activeTab.offsetHeight,
                };
                scrollRect = {
                    length: scrollRef.value!.offsetHeight,
                };
                wrapperRect = {
                    offset: wrapperRef.value!.offsetTop,
                    length: wrapperRef.value!.offsetHeight,
                };
            } else {
                activeRect = {
                    offset: activeTab.offsetLeft,
                    length: activeTab.offsetWidth,
                };
                scrollRect = {
                    length: scrollRef.value!.offsetWidth,
                };
                wrapperRect = {
                    offset: wrapperRef.value!.offsetLeft,
                    length: wrapperRef.value!.offsetWidth,
                };
            }
            const offsetDelta = activeRect.offset - wrapperRect.offset;
            if (_offset + offsetDelta <= 0) {
                _offset = -offsetDelta;
            } else if (
                offsetDelta + activeRect.length + _offset >
                scrollRect.length
            ) {
                _offset = -offsetDelta - activeRect.length + scrollRect.length;
            }
            offset.set(_offset);
        } else {
            offset.set(0);
        }
    }

    return {
        isScroll,
        offset,
        enablePrev,
        enableNext,
        prev,
        next,
        scrollRef,
        wrapperRef,
    };
}
