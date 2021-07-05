import {useInstance} from 'intact';
import {useState, watchState, State} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import {Datepicker, Value, DatepickerProps} from './index';
import {isNullOrUndefined} from 'intact-shared';
import {isEqual, findValueIndex} from './helpers';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {isEqualArray} from '../utils';
import {PanelTypes, PanelFlags, usePanel} from './usePanel';

export type StateValueItem = Dayjs | [Dayjs, Dayjs?]
export type StateValue = StateValueItem | StateValueItem[]

type DayjsValueItem = Required<StateValueItem>
type DayjsValue = DayjsValueItem | DayjsValueItem[]
type StringValue = string | string[] | [string, string][]

export function useValue(
    {
        createDateByValueFormat,
        createDateByShowFormat,
        getShowString,
        getValueString,
    }: ReturnType<typeof useFormats>,
    isDisabled: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
) {
    const value = useState<StateValue | null>(null);
    const instance = useInstance() as Datepicker;
    let valueDayjs: StateValue | null = null;

    instance.watch('value', (newValue, oldValue) => {
        if (isEqualArray(newValue, oldValue)) return;
        valueDayjs = convertToDayjs(newValue);
        value.set(valueDayjs);
        // should update keywords
        updateValue();
    });

    watchState(instance.input.keywords, v => {
        const date = createDateByShowFormat(v);
        if (isValidDate(date)) {
            setValue(date, true);
        }
    });

    function convertToDayjs(v: DatepickerProps['value']): StateValue | null {
        if (!v) return null;
        if (Array.isArray(v)) {
            return v.map(convertToDayjs) as StateValue;
        }
        return createDateByValueFormat(v);
    }

    function convertToValueString(v: DayjsValue | null): StringValue | null {
        if (!v) return null;
        if (Array.isArray(v)) {
            return v.map(convertToValueString) as StringValue;
        }
        return getValueString(v);
    }

    function format() {
        const {range, multiple} = instance.get();
        if (Array.isArray(valueDayjs)) {
            if (range) {
                if (multiple) {
                    // TODO
                    // (_value as [Dayjs, Dayjs][]).map(values => {
                        // if ()
                    // })
                } else {
                    return (valueDayjs as [Dayjs, Dayjs]).map(getShowString).join(' ~ ');
                }
            } else {
                return (valueDayjs as Dayjs[]).map(getShowString);
            }
        } else if (valueDayjs) {
            return getShowString(valueDayjs);
        }
    }

    function onChangeDate(v: Dayjs) {
        const {multiple, type, range} = instance.get();

        if (type === 'datetime') {
            setValue(v, false);
            panel.changePanel(PanelTypes.Time);
        } else {
            setValue(v, true);
            if (!multiple) {
                if (!range || (value.value as [Dayjs, Dayjs?]).length === 2) {
                    instance.hide();
                }
            }
        }
    }

    function setValue(v: StateValueItem, isUpdateValue: boolean) {
        const {multiple, range} = instance.get();
        let _value: StateValue = v;
        if (multiple) {
            _value = value.value as StateValueItem[];
            _value = !_value ? [] : _value.slice();

            const index = findValueIndex(_value, v);
            if (index > -1) {
                _value.splice(index, 1);
            } else {
                _value.push(v);
            }
        } else if (range) {
            _value = value.value as StateValueItem[];
            if (!_value || _value.length === 2) {
                _value = [v];
                isUpdateValue = false;
            } else {
                _value = _value.slice() as [Dayjs];
                _value[1] = v;
            }
        }

        value.set(_value);

        if (isUpdateValue) {
            updateValue();
        }
    }

    function updateValue() {
        const {multiple, range} = instance.get();
        const _value = value.value as DayjsValue | null;
        const valueStr = convertToValueString(_value); 
        instance.set('value', valueStr);
        instance.resetKeywords(instance.input.keywords);
    }

    function onConfirm() {
        updateValue();
        if (!instance.get('multiple')) {
            instance.hide();
        } else {
            panel.changePanel(PanelTypes.Date);
        }
    }

    function isValidDate(date: Dayjs) {
        return date.isValid() && !isDisabled(date);
    }

    function onChangeTime(date: Dayjs) {
        const {multiple} = instance.get();
        if (multiple) {
            const values = (value.value as Dayjs[]).slice();
            values.splice(values.length - 1, 1, date);
            value.set(values);
        } else {
            value.set(date);
        }
    }

    return {value, format, onChangeDate, onConfirm, onChangeTime};
}

function useRange(setValue: (date: StateValueItem, isUpdateValue: boolean) => void) {
    const rangeValues = useState<[Dayjs, Dayjs | null] | null>(null);

    function onChangeDate(date: Dayjs) {
        if (!rangeValues.value) {
            rangeValues.set([date, null]);
        } else {
            rangeValues.value[1] = date;
            setValue(rangeValues.value as [Dayjs, Dayjs], true);
            rangeValues.set(null);
        } 
    }

    return {onChangeDate, rangeValues}
}
