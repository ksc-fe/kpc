import {useInstance} from 'intact';
import type {Spinner} from './';
import {useReceive} from '../../hooks/useReceive';
import {NormalizedGetStep} from './useStep';
import {error, isNullOrUndefined, isString} from 'intact-shared';
import type {useFormatter} from './useFormatter';
import {useState} from '../../hooks/useState';

// const numberReg = /^(-|\+)?\d+(\.(\d+)?)?$/;

export function useValue(
    getStep: NormalizedGetStep,
    formatter: ReturnType<typeof useFormatter>,
) {
    const instance = useInstance() as Spinner;
    const showValue = useState<string | number | undefined>(instance.get('value'));

    useReceive<Spinner>([
        'max', 'min', 'precision', 
        'value', 'formatter', 'parser',
        'prefix', 'suffix',
    ], () => {
        fixValue(instance.get('value')!, 0); 
    });

    function fixValue(value: number | string, fallbackValue: number): number {
        const {valueString, value: fixedValue} = getFixedValue(value, fallbackValue);
        showValue.set(valueString);
        instance.set({value: fixedValue});

        return fixedValue;
    }

    function getFixedValue(value: number | string, fallbackValue: number): {valueString: string, value: number} {
        const {precision, max, forceStep} = instance.get();

        if (isString(value)) {
            value = formatter.parse(value);
        }
        if (Number.isNaN(value)) {
            value = fallbackValue;
        }

        const [step, min] = getStep(value);

        if (min > max!) {
            if (process.env.NODE_ENV !== 'production') {
                error(`[Spinner] min must less than or equal to max, but got min: ${min} max: ${max}`);
            }
            return {valueString: formatter.format(fallbackValue), value: fallbackValue};
        }

        value = minMaxStep(value, min, max!, forceStep ? step : null);

        if (!isNullOrUndefined(precision)) {
            value = +value.toFixed(precision);
        }
        const valueString = formatter.format(value);

        return {valueString, value};
    }

    // we need change value as long as the input is valid, #213
    function onInput(e: InputEvent) {
        const val = (e.target as HTMLInputElement).value;
        const {value} = getFixedValue(val.trim(), instance.get('value')!);
        showValue.set(val);
        instance.set({value});
    }

    return {showValue, fixValue, getFixedValue, onInput};
}

/**
 * return max min or multiple by step
 */
export function minMaxStep(value: number, min: number, max: number, step: number | null): number {
    if (value >= max) return max;
    if (value <= min) return min;
    if (step) {
        let _min = min === -Infinity ? 0 : min;
        value = Number((Math.round((value - _min) / step) * step + _min).toFixed(10))
        // value = Number((Math.round(value / step) * step).toFixed(10))
        return minMaxStep(value, min, max, null);
    }
    return value;
}

