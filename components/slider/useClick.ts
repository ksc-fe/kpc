import {useInstance} from 'intact';
import type {Slider} from './';
import type {Value} from './useValue';
import type {State} from '../../hooks/useState';

export function useClick(
    getSlidingValue: (pos: number) => number,
    fixValue: (value: Value, fixShowValue: boolean) => void,
    showValue: State<Value>,
    setValue: (value: Value) => void,
) {
    const instance = useInstance() as Slider<boolean>;

    function onClickTrack(e: MouseEvent) {
        if (instance.get('disabled')) return;

        let newValue: Value = getSlidingValue(e.clientX);
        if (instance.get('range')) {
            newValue = generateRangeValue(newValue);
        }

        fixValue(newValue, true);
    }

    function generateRangeValue(v: number): [number, number] {
        const [min, max] = instance.get('value') as [number, number];

        if (Math.abs(min - v) <= Math.abs(max - v)) {
            return [v, max];
        } else {
            return [min, v];
        }
    }

    function setOneValue(v: number) {
        if (instance.get('disabled')) return;

        let newValue: Value = v;
        if (instance.get('range')) {
            newValue = generateRangeValue(v);
        }
        showValue.set(newValue);
        setValue(newValue);
    }

    return {onClickTrack, setOneValue};
}
