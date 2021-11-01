import {useInstance, RefObject, createRef} from 'intact';
import type {Switch} from './';
import {useDraggable as useBaseDraggable} from '../../hooks/useDraggable';
import {useState} from '../../hooks/useState';

export function useDraggable(elementRef: RefObject<HTMLElement>) {
    const instance = useInstance() as Switch;
    const barRef = createRef<HTMLElement>();
    const barWidth = useState<number | null>(null);

    let x: number;
    let height: number;
    let width: number;
    let maxWidth: number;

    function onStart(e: MouseEvent) {
        if (instance.get('disabled')) return;

        x = e.clientX;
        height = barRef.value!.clientHeight; 
        width = barRef.value!.clientWidth;
        maxWidth = elementRef.value!.clientWidth;
    }

    function onMove(e: MouseEvent) {
        const left = e.clientX - x;
        const newWidth = Math.min(
            Math.max(height, width + left),
            maxWidth,
        );

        barWidth.set(newWidth);
    }

    function onEnd(e: MouseEvent) {
        elementRef.value!.blur();

        const bar = barRef.value!;
        
        // treat mousedown -> mouseup as click
        if (x === e.clientX) {
            barWidth.set(null);
            instance.toggle(false); 
        } else {
            // cancel this operation if the distance less than half of width
            const percent = (bar.clientWidth - height / 2) / maxWidth;

            if (!instance.isChecked()) {
                if (percent >= 0.5) {
                    instance.check();
                }
            } else if (percent < 0.5) {
                instance.uncheck();
            }

            const {width: _width, height: _height} = instance.get();

            if (!instance.isChecked() && _width && _height) {
                barWidth.set(+_height);
            } else {
                barWidth.set(null);
            }
        }
    }

    const {start, dragging} = useBaseDraggable({onStart, onMove, onEnd});

    return {
        start,
        dragging,
        barRef,
        barWidth,
    };
}
