import {useInstance} from 'intact';
import type {ColorpickerDrag} from './drag';
import {useDraggable} from '../../hooks/useDraggable';

export function useDrag() {
    const instance = useInstance() as ColorpickerDrag;
    let mousedown = false;
    let mousemove = false;
    let x: number;

    const {start} = useDraggable({
        onStart(e) {
            mousedown = true;
            x = e.clientX;
            instance.get('onStart')();
        },

        onMove(e) {
            mousemove = true;
            const {value, max} = instance.get();
            const deltaX = e.clientX - x;
            const newValue = value + deltaX;

            x = e.clientX;
            instance.set('value', Math.min(max, Math.max(0, newValue)));
        },

        onEnd(e) {
            if (instance.$unmounted) return;
            if (mousedown && !mousemove) instance.trigger('click');
            mousedown = false;
            mousemove = false;
            instance.get('onEnd')();
        }
    });

    return {start};
}
