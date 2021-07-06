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
            // setValue(date, true);
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
                    return (valueDayjs as [Dayjs, Dayjs][]).map(days => {
                        return days.map(getShowString).join(' ~ ');
                    });
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

    function setSingleDate(v: StateValueItem) {
        const {type, range}  = instance.get();
        value.set(v);
        if (type !== 'datetime' && (!range || (v as [Dayjs, Dayjs]).length === 2)) {
            updateValue();
        }
    }

    function addMultipeDate(v: StateValueItem) {
        const {type, range} = instance.get();
        let _value = value.value as StateValueItem[];
        _value = !_value ? [] : _value.slice();

        let shouldUpdateValue = true;

        // pop the last value firstly, because it only has start value
        let hasPop = false;
        if (range && (v as [Dayjs, Dayjs]).length === 2) {
            _value.pop();
            hasPop = true;
        }
        if (type !== 'datetime' && (!range || hasPop)) {
            // if select the date/year/month, then toggle the value
            const index = findValueIndex(_value, v);
            if (index > -1) {
                _value.splice(index, 1);
            } else {
                _value.push(v);
            }
        } else {
            // select the datetime, only push the value,
            // and unique the array on click confrim button
            _value.push(v); 
            shouldUpdateValue = false;
        }

        value.set(_value);
        if (shouldUpdateValue) {
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
        // unique
        if (!instance.get('multiple')) {
            instance.hide();
        } else {
            unique();
            panel.reset();
        }
        updateValue();
    }

    function unique() {
        const _value = value.value as StateValueItem[];
        const map: Record<string, true> = {};
        const results: StateValueItem[] = [];
        _value.forEach(value => {
            let key: string;
            if (Array.isArray(value)) {
                key = (value as Dayjs[]).map(getValueString).join(' ~ ');
            } else {
                key = getValueString(value);
            }
            if (!map[key]) {
                map[key] = true;
                results.push(value);
            }
        });

        value.set(results);
    }

    function isValidDate(date: Dayjs) {
        return date.isValid() && !isDisabled(date);
    }

    function onChangeDate(v: Dayjs, flag: PanelFlags) {
        const {multiple, type, range} = instance.get();
        let _value: StateValueItem = v;
        if (range) {
            let oldValue = value.value;
            if (oldValue && multiple) {
                oldValue = (oldValue as [Dayjs, Dayjs?][])[(oldValue as [Dayjs, Dayjs?][]).length - 1];
            }
            if (!oldValue || !(oldValue as Dayjs[]).length || (oldValue as Dayjs[]).length === 2) {
                _value  = [v];
            } else {
                _value = [(oldValue as [Dayjs])[0], v];
                (_value as [Dayjs, Dayjs]).sort((a, b) => a.isAfter(b) ? 1 : -1);
            }
        }

        if (multiple) {
            addMultipeDate(_value);
        } else {
            setSingleDate(_value);
        }
        if (type === 'datetime') {
            panel.changePanel(PanelTypes.Time, flag);
        } else if (!multiple && (!range || (_value as [Dayjs, Dayjs]).length === 2)) {
            instance.hide();
        }
    }

    function onChangeTime(date: Dayjs, flag: PanelFlags) {
        const {multiple, range} = instance.get();
        if (multiple) {
            const values = (value.value as StateValueItem[]).slice();
            const lastIndex = values.length - 1;
            let _value: StateValueItem = date;
            if (range) {
                _value = (values[lastIndex] as [Dayjs, Dayjs]).slice() as [Dayjs, Dayjs];
                (_value as [Dayjs, Dayjs])[flag] = date;
            }
            values[lastIndex] = _value;
            value.set(values);
        } else if (range) {
            const values = (value.value as [Dayjs, Dayjs]).slice();
            values[flag] = date;
            value.set(values);
        } else {
            value.set(date);
        }
    }

    function getTimeValue(flag: PanelFlags) {
        const {range, multiple} = instance.get();
        let _value = value.value;
        if (!_value) return null;
        if (multiple) {
            _value = (_value as StateValueItem[])[(_value as StateValueItem[]).length - 1]; 
        }
        if (!_value) return null;
        if (range) {
            return (_value as [Dayjs, Dayjs?])[flag];
        }
        return _value as Dayjs;
    }

    return {value, format, onChangeDate, onConfirm, onChangeTime, getTimeValue};
}
