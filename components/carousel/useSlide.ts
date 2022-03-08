import {
    useInstance,
    createRef,
    VNodeComponentClass,
    findDomFromVNode,
    onMounted,
    onBeforeUnmount,
    nextTick,
} from 'intact';
import {useState} from '../../hooks/useState';
import ResizeObserver from 'resize-observer-polyfill';
import type {CarouselItem} from './item';
import type {Carousel} from './';
import {useReceive} from '../../hooks/useReceive';
import {nextFrame} from '../utils';

export function useSlide(
    getItems: () => VNodeComponentClass<CarouselItem>[],
    getItemsWithCloned: () => VNodeComponentClass<CarouselItem>[],
) {
    const instance = useInstance() as Carousel;
    const translate = useState<number>(0);
    const shouldTransition = useState<boolean>(true);
    const elementRef = createRef<HTMLElement>();

    let ro: ResizeObserver | null = null;
   
    function observe() {
        const init = () => {
            setTranslate(getItems()[instance.getIndex()], false);
        };

        ro = new ResizeObserver(init);
        ro.observe(elementRef.value!);

        init();
    }

    function disconnect() {
        if (ro) {
            ro.disconnect();
            ro = null;
        }
    }

    function stopTranstion() {
        shouldTransition.set(false);
    }

    function startTransition() {
        return new Promise<void>(resolve => {
            nextFrame(() => {
                shouldTransition.set(true);
                resolve();
            });
        });
    }

    async function translateToItem(
        item: VNodeComponentClass<CarouselItem>,
        oldIndex: number | null,
        newIndex: number | null,
        keepDirection: boolean,
    ) {
        if (!isSlide()) return;

        if (keepDirection) {
            const itemsWithCloned = getItemsWithCloned();
            const length = getItems().length;
            if (oldIndex === length - 1 && newIndex === 0) {
                // the current item is the last one and the next item is the first one,
                // we set translate to the first cloned item immediately without transition
                await setTranslate(itemsWithCloned[(itemsWithCloned.length - length) / 2 - 1], false);
            } else if (oldIndex === 0 && newIndex === length - 1) {
                const lengthWithCloned = itemsWithCloned.length;
                await setTranslate(itemsWithCloned[lengthWithCloned - (lengthWithCloned - length) / 2], false);
            }
        }

        setTranslate(item, true);
    }

    async function setTranslate(item: VNodeComponentClass<CarouselItem>, withTranstion: boolean) {
        if (instance.$unmounted) return;

        if (!withTranstion) {
            stopTranstion();
        }
        const el = findDomFromVNode(item, true) as HTMLElement;
        const offsetLeft = el.offsetLeft;
        const width = el.offsetWidth;
        const containerWidth = elementRef.value!.offsetWidth;

        // let item position center
        translate.set(-(offsetLeft - (containerWidth - width) / 2));

        if (!withTranstion) {
            await startTransition();
        }
    }

    function isSlide() {
        return instance.get('effect') === 'slide';
    }

    instance.watch('effect', () => {
        if (isSlide()) {
            observe();
        } else {
            disconnect();
        }
    }, {presented: true, inited: true});

    instance.watch('clonedAmount', () => {
        if (isSlide()) {
            observe();
        }
    }, {presented: true, inited: true});

    onMounted(() => {
        if (isSlide()) {
            observe();
        }
    });

    onBeforeUnmount(disconnect);

    return {translate, shouldTransition, elementRef, translateToItem, isSlide};
}
