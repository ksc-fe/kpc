import { useInstance } from 'intact';
import { StateValueItem } from '../datepicker/useValueBase';
import type { PanelPicker } from './panelPicker';
import { last } from '../datepicker/helpers';
import {NOW_START, NOW_END} from './constants';
import { isArray } from 'intact-shared';

export function useDefaultValue() {
    const instance = useInstance() as PanelPicker; 

    function get(): StateValueItem {
        const _value = instance.value.value.value;
        const lastValue = last(_value);
        const { range } = instance.get();

        if (range) {
            // consider the second last value to maintain consistency
            const penulimate = getPenulimate(_value);
            return Object.assign([NOW_START, NOW_END], penulimate, lastValue);
        }
        return lastValue || NOW_START;
    }

    return { get };
}

function getPenulimate(value: unknown[]) {
    if (!isArray(value)) return;
    return value[value.length - 2];
}
