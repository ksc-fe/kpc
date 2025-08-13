import {useInstance, Component, TypeDefs} from 'intact';
import {useState, watchState, State} from '../../hooks/useState';
import dayjs, {Dayjs, OpUnitType, QUnitType} from './dayjs';
import {findValueIndex} from './helpers';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {isEqualArray, last, bind} from '../utils';
import {PanelFlags, usePanel} from './usePanel';
import type {BasePicker, BasePickerProps} from './basepicker';

export type Value = string | Date | number | Dayjs;

export type StateValueRange = [Dayjs] | [Dayjs, Dayjs];
export type StateValueItem = Dayjs | StateValueRange;
export type StateValue = StateValueItem[]

export type StringValue = string | string[] | [string, string] | [string, string][]
export type DayjsValueRange = [Dayjs, Dayjs]
export type DayjsValueItem = Dayjs | DayjsValueRange
export type DayjsValue = DayjsValueItem[]

export function useValueBase(
    {
        createDateByValueFormat,
        createDateByShowFormat,
        getShowString,
        getValueString,
    }: ReturnType<typeof useFormats>,
    {isDisabled, minDate}: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
    shouldUpdateValue: (v: StateValueItem) => boolean,
    updateValueOnInput: (v: DayjsValueItem) => void,
    getEqualType: () => OpUnitType | QUnitType,
    updateStateValue: (v: DayjsValue, value: State<StateValue>) => void,
) {
    // Normalize the value to multipe values, no matter it's multipe or not
    const value = useState<StateValue>([]);
    const instance = useInstance() as BasePicker<BasePickerProps<Value>>;
    let dayjsValue: DayjsValue = [];

    instance.watch('value', (newValue, oldValue) => {
        if (isEqualArray(newValue, oldValue)) return;
        dayjsValue = convertToDayjs(newValue);
        updateStateValue(dayjsValue, value);
        // should update keywords
        instance.resetKeywords();
    });

    watchState(value, (value) => {
        // silently update the keywords to display the currently selected value 
        instance.resetKeywords(true);
        /**
         * the position may changed after the input break line in multipe mode
         * use Macro task instead of nextTick, because it has too many Micro tasks
         */
        setTimeout(() => {
            instance.position();
        });
    });
    instance.on('hide', () => {
        // reset the value after hiding
        value.set(dayjsValue.slice(0));
    });

    watchState(instance.input.keywords, v => {
        const {range, multiple} = instance.get();
        if (!multiple && v === '') return instance.set('value', null);

        if (range) {
            const [start, end] = v.split(/\s*~\s*/).map(s => s.trim());
            if (start && end) {
                const startDate = createDateByShowFormat(start);
                if (!isValidDate(startDate)) {
                    return;
                }
                const endDate = createDateByShowFormat(end);
                if (!isValidDate(endDate)) {
                    return;
                }
                if (endDate.isAfter(startDate)) {
                    updateValueOnInput([startDate, endDate]);
                } else {
                    updateValueOnInput([endDate, startDate]);
                }
            }
        } else {
            const date = createDateByShowFormat(v);
            if (isValidDate(date)) {
                updateValueOnInput(date);
            }
        }
    });

    function convertToDayjs(v: BasePickerProps<Value>['value']): DayjsValue {
        if (!v || Array.isArray(v) && !v.length) return [];
        const {multiple} = instance.get();
        if (!multiple) {
            v = [v] as any;
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
        const results = v.map(value => {
            if (Array.isArray(value)) {
                return value.map(getValueString);
            }
            return getValueString(value);
        });

        if (!instance.get('multiple')) {
            return results[0] || null;
        }
        return results as StringValue;
    }

    function format(): string | string[] {
        const { multiple } = instance.get();
        let labelValue = value.value;
        if (multiple) {
            labelValue = dayjsValue;
        }
        const results = labelValue.map(formatSingleValue);

        if (!instance.get('multiple')) {
            return results[0];
        }
        return results;
    }

    function formatSingleValue(value: StateValueItem) {
        if (Array.isArray(value)) {
            if (value.length === 1) {
                return getShowString(value[0]) + ' ~';
            }
            return value.map(getShowString).join(' ~ ');
        }
        return getShowString(value);
    }

    function setSingleDate(v: StateValueItem, fromInput: boolean) {
        value.set([v]);
        if (fromInput || shouldUpdateValue(v)) {
            updateValue();
        }
    }

    function addMultipeDate(v: StateValueItem, fromInput: boolean) {
        const {range} = instance.get();
        let _value = value.value as StateValueItem[];
        _value = !_value ? [] : _value.slice();

        if (range && (v as StateValueRange).length === 2) {
            // pop the last value firstly, if it only has the start date 
            const lastValue = last(_value);
            if (lastValue && (lastValue as StateValueRange).length < 2) {
                _value.pop();
            }
        }

        if (_value.length > dayjsValue.length) {
            // remove the temporary value added by selecting time directly
            _value.pop();
        }

        let _shouldUpdateValue = true;
        if (fromInput || shouldUpdateValue(v)) {
            // if select the date/year/month, then toggle the value.
            // if from input, treat the value as the final value
            const index = findValueIndex(_value, v, getEqualType());
            if (index > -1) {
                _value.splice(index, 1);
            } else {
                _value.push(v);
            }
        } else {
            // select the datetime, only push the value,
            // and unique the array on click confirm button
            _value.push(v); 
            _shouldUpdateValue = false;
        }

        value.set(_value);

        if (_shouldUpdateValue) {
            updateValue();
        }
    }

    function setValue(v: StateValueItem, fromInput: boolean) {
        const multiple = instance.get('multiple');
        if (multiple) {
            addMultipeDate(v, fromInput);
        } else {
            setSingleDate(v, fromInput);
        }
    }

    function updateValue() {
        const _value = value.value as DayjsValue;
        const { range } = instance.get();
        if (range) {
            // only fix the last value, since the others are already fixed 
            const lastValue = last(_value) as DayjsValueRange;
            if (lastValue) {
                lastValue.sort((a, b) => a.isAfter(b) ? 1 : -1);
            }
        }

        const valueStr = convertToValueString(_value); 
        instance.set('value', valueStr);
        instance.resetKeywords();
    }

    // TODO
    function setMoment() {
        const now = dayjs();
        setValue(now, true);
        instance.hide();
    }

    function unique() {
        const _value = value.value;
        const map: Record<string, true> = {};
        const results: StateValue = [];
        _value.forEach(value => {
            let key: string;
            if (Array.isArray(value)) {
                key = (value as DayjsValueRange).map(getValueString).join(' ~ ');
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
        return date.isValid() && !isDisabled(date, getEqualType());
    }

    function onChangeTime(date: Dayjs, flag: PanelFlags) {
        const {range, multiple} = instance.get();
        const values = value.value.slice();
        // maybe we select time directly
        let lastIndex = Math.max(values.length - 1, 0);
        if (allValuesUpdatedInMultipleMode()) {
            // need add new value, if all value.value has updated to dayjsValue
            lastIndex = values.length; 
        }
        let _value: StateValueItem = date;

        if (range) {
            _value  = (values as DayjsValueRange[])[lastIndex];
            if (_value) {
                _value = _value.slice() as DayjsValueRange;
            } else {
                _value = [] as unknown as DayjsValueRange;
            }
            _value[flag] = date;
            instance.trigger('selecting', _value, false);
        }

        values[lastIndex] = _value;
        value.set(values);
    }

    function getTimeValue(flag: PanelFlags): Dayjs | null | undefined {
        const _value = value.value;
        if (!_value.length) return null;

        const {range, min} = instance.get();
        const lastValue = last(_value);
        return range ? (lastValue as StateValueRange)[flag] : lastValue as Dayjs;
    }

    function getDayjsValue() {
        return dayjsValue;
    }

    function allValuesUpdatedInMultipleMode() {
        return instance.get('multiple') && value.value.length === dayjsValue.length;
    }

    return {
        value,
        format,
        formatSingleValue,
        onChangeTime,
        getTimeValue,
        setValue,
        convertToDayjs,
        getDayjsValue,
        unique,
        setMoment,
        updateValue,
        allValuesUpdatedInMultipleMode,
    };
}
