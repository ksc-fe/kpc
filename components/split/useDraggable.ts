import {useDraggable as useBaseDraggable} from '../../hooks/useDraggable';
import {useInstance} from 'intact';
import type Split from './index';

export function useDraggable() {
    const component = useInstance() as Split;
    let targetPart: 'firstSize' | 'lastSize';
    let baseX: number = 0;
    let baseY: number = 0;
    let originalWidth: number = 0;
    let originalHeight: number = 0;

    function onStart(e: MouseEvent): void {
        // set mouse style
        component.setMouseStyle(true);

        component.calcMinMaxValue();

        const {lastSize} = component.get();
        targetPart = lastSize === 'auto' ? 'firstSize' : 'lastSize';
        const targetEl: HTMLDivElement = component.refs[targetPart];

        baseX = e.clientX;
        baseY = e.clientY;
        originalWidth = targetEl.offsetWidth;
        originalHeight = targetEl.offsetHeight;

        component.trigger('moveStart', e);
    }

    function onMove(e: MouseEvent): void {
        let propToSet: number;
        let changed: number;
        if(component.get('mode') === 'horizontal') {
            propToSet = originalWidth;
            changed = e.clientX - baseX;
        } else {
            propToSet = originalHeight;
            changed = e.clientY - baseY;
        }

        changed = targetPart === 'firstSize' ? changed : -changed;
        let targetSize = propToSet + changed;
        targetSize = Math.min(Math.max(targetSize, component.min), component.max);
        component.set(targetPart, `${targetSize}px`);

        component.trigger('moving', e);
    }

    function onEnd(e: MouseEvent): void {
        // reset mouse style
        component.setMouseStyle();
        component.trigger('moveEnd', e);
    }

    return useBaseDraggable({onStart, onMove, onEnd});
}