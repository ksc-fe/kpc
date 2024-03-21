import {useInstance, createRef} from 'intact';
import type {Ellipsis} from './';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useState } from '../../hooks/useState';

export function useEllipsis() {
    const instance = useInstance() as Ellipsis;
    const ellipsisRef = createRef<HTMLDivElement>();
    let showTooltip = useState<boolean>(false);

    useResizeObserver(ellipsisRef, isShowTooltip);

    function isShowTooltip() {
        const isMulti = instance.get('maxLines');
        const element = ellipsisRef.value!.children[0] as HTMLDivElement;

        const _showTooltip = isMulti
            ? element.scrollHeight > element.clientHeight
            : element.offsetWidth < element.scrollWidth;
        
        requestAnimationFrame(() => {
            showTooltip.set(_showTooltip);
        });
    }
    

    return {
        ellipsisRef,
        showTooltip
    };
}
