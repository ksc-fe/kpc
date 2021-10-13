import {useInstance} from 'intact';
import type {Slider} from './';
import {useReceive} from '../../hooks/useReceive';
import {NormalizedGetStep} from '../spinner/useStep';
import {minMaxStep} from '../spinner/useValue';
import {error} from 'intact-shared';
import {isEqualArray} from '../utils';
import {useState} from '../../hooks/useState';

export type Value = number | [number, number];

export function useValue(getStep: NormalizedGetStep, getDragging: () => boolean) {
    const instance = useInstance() as Slider;
    const showValue = useState<Value>(instance.get('value')!, isEqualValue);

    useReceive<Slider>(['min', 'max', 'step', 'value'], () => {
        fixValue(instance.get('value')!);
    });

    instance.on('$change:value', (newValue, oldValue) => {
        if (getDragging()) return;
        instance.trigger('change', newValue, oldValue);
    });

    function isEqualValue(newValue: Value, oldValue: Value) {
        return newValue === oldValue || isEqualArray(newValue, oldValue);
    }

    function fixValue(value: Value) {
        const fixedValue = getFixedValue(value); 
        showValue.set(fixedValue);
        setValue(fixedValue);
    }

    function setValue(value: Value) {
        if (isEqualValue(value, instance.get('value')!)) return;
        instance.set({value});
    }

    function getFixedValue(value: Value): Value {
        const {min, isRange} = instance.get();

        let fixedValue: Value;
        if (isRange) {
            if (!Array.isArray(value)) {
                const tmp = fix(value);
                fixedValue = [tmp, tmp];
            } else {
                fixedValue = [fix(value[0]), fix(value[1])];
            }
        } else {
            fixedValue = fix(value as number);
        }

        return fixedValue;
    }

    function fix(value: number): number {
        const {max} = instance.get();
        const [step, min] = getStep(value);
        
        if (min > max!) {
            if (process.env.NODE_ENV !== 'production') {
                error(`[Slider] min must less than or equal to max, but got min: ${min} max: ${max}`);
                return 0;
            }
        }

        return minMaxStep(value, min, max!, step);
    }

    function onSpinnerChange(v: number) {
        showValue.set(v);
        instance.set({value: v});
    }

    function triggerChangeEvent(oldValue: Value) {
        const {value} = instance.get();
        if (isEqualValue(value!, oldValue)) return;

        instance.trigger('change', value!, oldValue);
    }

    return {showValue, getFixedValue, onSpinnerChange, setValue, triggerChangeEvent};
}
