import {useInstance, createRef} from 'intact';
import type {Slider} from './';
import {useDraggable as useBaseDraggable} from '../../hooks/useDraggable';
import {State} from '../../hooks/useState';
import type {Value} from './useValue';

export function useDraggable(showValue: State<Value>, getFixedValue: (value: Value) => Value) {
    const instance = useInstance() as Slider;
    const trackRef = createRef<HTMLDivElement>();
    let isFirst = true;

    const {start, dragging} = useBaseDraggable({
        onMove(e) {
            const tempValue = getNewValue(getSlidingValue(e.clientX));
            const fixedValue = getFixedValue(tempValue);
            showValue.set(tempValue);
            instance.set({value: fixedValue});
        },

        onEnd(e) {

        }
    });

    function getSlidingValue(pos: number): number {
        const rect = trackRef.value!.getBoundingClientRect();
        const percent = (pos - rect.left) / rect.width;
        const {max, min} = instance.get();
        const sliderWidth = max! - min!;

        if (percent <= 0) {
            return min!;
        } else if (percent >= 1) {
            return max!;
        } else {
            return min! + sliderWidth * percent;
        }
    }

    function getNewValue(value: number): Value {
        const {isRange, value: oldValue} = instance.get();

        if (!isRange) return value;

        if (isFirst) {
            return [value, (oldValue as [number, number])[1]];
        } else {
            return [(oldValue as [number, number][0]), value];
        }
    }

    function onStart(_isFirst: boolean, e: MouseEvent) {
        if (instance.get('disabled')) return;
        isFirst = _isFirst;

        start(e);
    }

    return {onStart, dragging, trackRef};
}
