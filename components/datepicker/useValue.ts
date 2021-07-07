import {useInstance} from 'intact';
import {useState, watchState, State} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import {Datepicker, Value, DatepickerProps} from './index';
import {isNullOrUndefined} from 'intact-shared';
import {isEqual, findValueIndex, last} from './helpers';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {isEqualArray} from '../utils';
import {PanelTypes, PanelFlags, usePanel} from './usePanel';

// export type StateValueItem = Dayjs | [Dayjs, Dayjs?]
// export type StateValue = StateValueItem | StateValueItem[]
export type StateValueRange = [Dayjs, Dayjs?];
export type StateValueItem = Dayjs | StateValueRange;
export type StateValue = StateValueItem[]

// type DayjsValueItem = Required<StateValueItem>
// type DayjsValue = DayjsValueItem | DayjsValueItem[]
type StringValue = string | string[] | [string, string] | [string, string][]
type DayjsValueItem = Dayjs | [Dayjs, Dayjs]
type DayjsValue = DayjsValueItem[]

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
    // Normalize the value to multipe values, no matter it's multipe or not
    const value = useState<StateValue>([]);
    const instance = useInstance() as Datepicker;
    let dayjsValue: DayjsValue = [];

    instance.watch('value', (newValue, oldValue) => {
        if (isEqualArray(newValue, oldValue)) return;
        dayjsValue = convertToDayjs(newValue);
        value.set(dayjsValue);
        // should update keywords
        updateValue();
    });

    watchState(instance.input.keywords, v => {
        const date = createDateByShowFormat(v);
        if (isValidDate(date)) {
            // setValue(date, true);
        }
    });

    function convertToDayjs(v: DatepickerProps['value']): DayjsValue {
        if (!v) return [];

        const {multiple} = instance.get();
        if (!multiple) {
            v = [v as Value];
        }
        return (v as (Value | [Value, Value])[]).map(value => {
            if (Array.isArray(value)) {
                // range
                return value.map(createDateByValueFormat);
            }
            return createDateByValueFormat(value);
        }) as DayjsValue;
    }

    function convertToValueString(v: DayjsValue): StringValue | null {
        if (!v.length) return null;

        const results = v.map(value => {
            if (Array.isArray(value)) {
                return value.map(getValueString);
            }
            return getValueString(value);
        });

        if (!instance.get('multiple')) {
            return results[0];
        }
        return results as StringValue;
    }

    function format(): string | string[] {
        const results = dayjsValue.map(value => {
            if (Array.isArray(value)) {
                return value.map(getShowString).join(' ~ ');
            }
            return getShowString(value);
        });

        if (!instance.get('multiple')) {
            return results[0];
        }
        return results;
    }

    function setSingleDate(v: StateValueItem) {
        const {type, range}  = instance.get();
        value.set([v]);
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
        const _value = value.value as DayjsValue;
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
        const _value = value.value;
        const map: Record<string, true> = {};
        const results: StateValue = [];
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
            const oldValue = last(value.value as [Dayjs, Dayjs?][]);
            if (!oldValue || oldValue.length === 2) {
                _value = [v];
            } else {
                _value = [oldValue[0], v];
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
        } else if (!multiple && (!range || (_value as [Dayjs, Dayjs?]).length === 2)) {
            instance.hide();
        }
    }

    function onChangeTime(date: Dayjs, flag: PanelFlags) {
        const {range} = instance.get();
        const values = value.value.slice();
        const lastIndex = values.length - 1;
        let _value: StateValueItem = date;

        if (range) {
            _value = (values as [Dayjs, Dayjs][])[lastIndex].slice() as [Dayjs, Dayjs];
            _value[flag] = date;
        }

        values[lastIndex] = _value;
        value.set(values);
    }

    function getTimeValue(flag: PanelFlags): Dayjs | null | undefined {
        const _value = value.value;
        if (!_value.length) return null;

        const {range} = instance.get();
        const lastValue = last(_value);

        if (range) {
            return (lastValue as [Dayjs, Dayjs?])[flag];
        }
        return lastValue as Dayjs;
    }

    return {value, format, onChangeDate, onConfirm, onChangeTime, getTimeValue};
}
