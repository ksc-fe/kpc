import {useInstance, RefObject, onMounted} from 'intact';
import type {Ellipsis} from './';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useState } from '../../hooks/useState';

export function useEllipsis(elementRef: RefObject<HTMLElement>) {
    const instance = useInstance() as Ellipsis;
    let showTooltip = useState<boolean>(false);

    useResizeObserver(elementRef, isShowTooltip);

    function isShowTooltip() {
        const isMulti = instance.get('maxLines');

        const _showTooltip = isMulti
            ? elementRef.value!.scrollHeight > elementRef.value!.clientHeight
            : elementRef.value!.offsetWidth < elementRef.value!.scrollWidth;
        
        requestAnimationFrame(() => {
            showTooltip.set(_showTooltip);
        });
    }
    

    return () => ({
        showTooltip,
    });
}
