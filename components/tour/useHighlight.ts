import {useInstance, createRef, nextTick} from 'intact';
import { Tour } from './tour';

export function useHighlight(getTargetElement: (index?: number) => HTMLElement | null,) {
    const instance = useInstance() as Tour;
    const highlightRef = createRef<HTMLElement>();

    instance.on('$updated' as any, updateHighlight);
        
    instance.watch('visible', (visible) => {
        if (visible) {
            nextTick(() => {
                updateHighlight();
            });
        }
    });
    
    // update highlight element position and size
    function updateHighlight() {
        const highlightElem = highlightRef.value;
        const targetElem = getTargetElement();
        
        if (highlightElem && targetElem) {
            const rect = targetElem.getBoundingClientRect();
            const padding = 8;
            
            highlightElem.style.width = `${rect.width + padding * 2}px`;
            highlightElem.style.height = `${rect.height + padding * 2}px`;
            highlightElem.style.position = 'fixed';
            highlightElem.style.left = `${rect.left - padding}px`;
            highlightElem.style.top = `${rect.top - padding}px`;
        }
    }

    return {highlightRef, updateHighlight};
} 