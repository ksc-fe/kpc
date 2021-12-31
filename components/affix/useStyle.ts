import {useInstance, onMounted, onUnmounted, RefObject, nextTick} from 'intact';
import type {Affix} from './';
import {useState, watchState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';
import ResizeObserver from 'resize-observer-polyfill'; 
import {useReceive} from '../../hooks/useReceive';

export function useStyle(elementRef: RefObject<HTMLElement>) {
    const instance = useInstance() as Affix;
    const style = useState<Record<string, string> | null>(null);
    const containerStyle = useState<Record<string, string> | null>(null);
    let ro: ResizeObserver | null = null;

    function genStyle() {
        let {top: offsetTop, bottom: offsetBottom, exclude, shouldFix} = instance.get();
        const {top, bottom, width, height} = elementRef.value!.getBoundingClientRect(); 
        
        const setStyle = (styles: Record<string, string>) => {
            if (!exclude || exclude && !exclude({
                offsetTop, offsetBottom, top, bottom, width, height
            })) {
                style.set({
                    position: 'fixed',
                    width: `${width}px`,
                    ...styles,
                });
                containerStyle.set({
                    height: `${height}px`,
                });
            } else {
                resetStyle();
            }
        };

        if (isNullOrUndefined(offsetTop) && isNullOrUndefined(offsetBottom)) {
            offsetTop = 0;
        }

        if (!isNullOrUndefined(offsetTop)) {
            if (
                shouldFix && shouldFix({offsetTop, offsetBottom}) ||
                !shouldFix && top < offsetTop
            ) {
                return setStyle({top: `${offsetTop}px`});
            }
        } else {
            const viewportHeight = document.documentElement.clientHeight;
            if (
                shouldFix && shouldFix({offsetTop, offsetBottom, viewportHeight}) || 
                !shouldFix && !isNullOrUndefined(offsetBottom) && viewportHeight - bottom <= offsetBottom
            ) {
                return setStyle({bottom: `${offsetBottom}px`});
            }
        }

        resetStyle();
    }

    function resetStyle() {
        style.set(null);
        containerStyle.set(null);
    }

    function observe() {
        ro = new ResizeObserver(() => {
            style.set({
                ...style.value,
                width: elementRef.value!.offsetWidth + 'px',
            });
        });
        ro.observe(elementRef.value!);
    }

    function disconnect() {
        if (ro) {
            ro.disconnect();
        }
    }

    watchState(style, (newStyle, oldStyle) => {
        nextTick(() => {
            if (newStyle && !oldStyle) {
                instance.trigger('change', true);
                observe();
            } else if (!newStyle) {
                instance.trigger('change', false);
                disconnect();
            }
        });
    });

    onMounted(() => {
        genStyle();
        window.addEventListener('scroll', genStyle);
        window.addEventListener('resize', genStyle);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', genStyle);
        window.removeEventListener('resize', genStyle);
        disconnect();
    });

    useReceive<Affix>(['top', 'bottom'], genStyle, true)

    return {style, containerStyle};
}
