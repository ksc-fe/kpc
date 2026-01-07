import { useInstance } from 'intact';
import { StateValueItem } from '../datepicker/useValueBase';
import type { PanelPicker } from './panelPicker';
import { last } from '../datepicker/helpers';
import {NOW_START, NOW_END} from './constants';
import { isArray } from 'intact-shared';

export function useDefaultValue() {
    const instance = useInstance() as PanelPicker; 

    function get(): StateValueItem {
        const { range, min, max } = instance.get();
        const _value = instance.value?.value.value || [];
        const options = instance.step?.options.value;

        // 优先级：用户选择值 > step 选项首尾 > min/max 属性 > 全局默认值
        const hasOptions = options && options.length;
        const start = hasOptions 
            ? instance.formats.createDateByValueFormat(options![0].value)
            : (min ? instance.formats.createDateByValueFormat(min) : NOW_START);
        
        const end = hasOptions 
            ? instance.formats.createDateByValueFormat(options![options!.length - 1].value)
            : (max ? instance.formats.createDateByValueFormat(max) : NOW_END);

        if (range) {
            return Object.assign([start, end], getPenulimate(_value), last(_value));
        }

        return last(_value) || start;
    }

    return { get };
}

function getPenulimate(value: unknown[]) {
    if (!isArray(value)) return;
    return value[value.length - 2];
}
