import {useInstance} from 'intact';
import type {Slider} from './';
import {NormalizedGetStep} from '../spinner/useStep';
import type {Value} from './useValue';
import type {State} from '../../hooks/useState';

export function useKeyboard(
    getStep: NormalizedGetStep,
    getNewValue: (value: number) => Value,
    fixValue: (value: Value, fixShowValue: boolean) => void,
    isFirst: () => boolean,
    dragging: State<boolean>,
    triggerChangeEvent: (value: Value) => void,
) {
    const instance = useInstance() as Slider<boolean>;
    let oldValue: Value;

    function onKeydown({keyCode}: KeyboardEvent) {
        if (instance.get('disabled')) return;

        let {value, range} = instance.get();
        // remain the old value to detect whether it changed to trigger change event
        oldValue = value!;

        if (range) {
            const [min, max] = value as [number, number];
            value = isFirst() ? min : max;
        }
        if (keyCode === 37) { // left
            const [step] = getStep(value as number, 'decrease');
            updateValue(value as number - step);
        } else if (keyCode === 39) {
            const [step] = getStep(value as number, 'increase');
            updateValue(value as number + step);
        }
    }

    function updateValue(value: number) {
        // disable transition
        dragging.set(true);

        fixValue(getNewValue(value), true);
    }

    function onKeyup({keyCode}: KeyboardEvent) {
        if (keyCode === 37 || keyCode === 39) {
            dragging.set(false);
            triggerChangeEvent(oldValue);
        }
    }

    return {onKeydown, onKeyup};
}
