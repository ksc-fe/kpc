import {useInstance} from 'intact';
import type {PanelPicker} from './panelPicker';
import type {useFormats} from './useFormats';
import {last} from '../utils';
import {useValueBase, StateValueItem, DayjsValueItem, DayjsValue, StateValueRange} from '../datepicker/useValueBase';
import type {useDisabled} from '../datepicker/useDisabled';
import type {usePanel} from '../datepicker/usePanel';
import {NOW_START, NOW_END} from './constants';
import {PanelFlags} from '../datepicker/usePanel';
import type Dayjs from 'dayjs';
import type { useDefaultValue } from './useDefaultValue';

export function useValue(
    formats: ReturnType<typeof useFormats>,
    disabled: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
    defaultValue: ReturnType<typeof useDefaultValue>,
) {
    const instance = useInstance() as PanelPicker;
    const {
        value,
        getDayjsValue,
        setValue,
        onChangeTime,
        getTimeValue: getTimeValueBase,
        ...rest
    } = useValueBase(
        formats,
        disabled,
        panel,
        function(v: StateValueItem) {
            return false;
        },
        function(v: DayjsValueItem) {
            // pop the last value when input
            // because it is a placeholder date
            // value.value.pop(); // no placeholder any more 
            setValue(v, true);
        },
        function() {
            return 'second';
        },
        function(dayjsValue, value) {
            value.set(dayjsValue.slice(0));
        }
    );

    function onChangeTimeByStep(v: string, flag: PanelFlags) {
        const date = formats.createDateByValueFormat(v);
        onChangeTime(date, flag);
    }

    function getTimeValue(flag: PanelFlags): Dayjs.Dayjs | null | undefined {
        const value = defaultValue.get();
        if (instance.get('range')) {
            return (value as StateValueRange)[flag];
        }
        return value as Dayjs.Dayjs;
    }

    return {value, setValue, getDayjsValue, onChangeTime, onChangeTimeByStep, getTimeValue, ...rest};
}
