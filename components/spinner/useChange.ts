import {useInstance} from 'intact';
import type {Spinner} from './';
import type {NormalizedGetStep} from './useStep';
import type {useValue} from './useValue';

export function useChange(
    getStep: NormalizedGetStep,
    fixValue: ReturnType<typeof useValue>['fixValue'],
) {
    const instance = useInstance() as Spinner;
    let oldValue: number | undefined;

    function increase() {
        const {value} = instance.get();
        const [step] = getStep(value!, 'increase');
        oldValue = value;
        fixAndTriggerChange(Number((value! + step).toFixed(10)), 0);
    }

    function decrease() {
        const {value} = instance.get();
        const [step] = getStep(value!, 'decrease');
        oldValue = value;
        fixAndTriggerChange(Number((value! - step).toFixed(10)), 0);
    }

    function onChangeValue(e: Event) {
        fixAndTriggerChange(
            (e.target as HTMLInputElement).value.trim(),
            instance.get('value')!,
        );
    }

    function onFocusin() {
        oldValue = instance.get('value');
    }

    function fixAndTriggerChange(value: number | string, fallbackValue: number) {
        const fixedValue = fixValue(value, fallbackValue);
        if (oldValue !== fixedValue) {
            instance.trigger('change', fixedValue, oldValue);
        }
    }

    return {increase, decrease, onChangeValue, onFocusin};
}
