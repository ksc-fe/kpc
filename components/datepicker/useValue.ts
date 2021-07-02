import {useInstance} from 'intact';
import {useState, watchState} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import {Datepicker, Value, DatepickerProps, PanelTypes} from './index';
import {isNullOrUndefined} from 'intact-shared';
import {isEqual} from './helpers';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {isEqualArray} from '../utils';

type StateValue = Dayjs | Dayjs[] | [Dayjs, Dayjs][]
type StringValue = string | string[] | [string, string][]

export function useValue(
    {
        createDateByValueFormat,
        createDateByShowFormat,
        getShowString,
        getValueString,
    }: ReturnType<typeof useFormats>,
    isDisabled: ReturnType<typeof useDisabled>
) {
    const value = useState<StateValue | null>(null);
    const instance = useInstance() as Datepicker;
    let valueDayjs: StateValue | null = null;

    instance.watch('value', (newValue, oldValue) => {
        if (isEqualArray(newValue, oldValue)) return;
        valueDayjs = convertToDayjs(newValue);
        value.set(valueDayjs);
        // should update keywords
        updateValue(valueDayjs);
    });

    function convertToDayjs(v: DatepickerProps['value']): StateValue | null {
        if (!v) return null;
        if (Array.isArray(v)) {
            return v.map(convertToDayjs) as StateValue;
        }
        return createDateByValueFormat(v);
    }

    function convertToValueString(v: StateValue | null): StringValue | null {
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
                }
            } else {
                return (valueDayjs as Dayjs[]).map(getShowString);
            }
        } else if (valueDayjs) {
            return getShowString(valueDayjs);
        }
    }

    function onSelect(v: Dayjs) {
        const {multiple, type} = instance.get();

        if (type === 'datetime') {
            setValue(v, false);
            instance.changePanel(PanelTypes.Time);
        } else {
            setValue(v, true);
            if (!multiple) {
                instance.hide();
            }
        }
    }

    function setValue(v: Dayjs, isUpdateValue: boolean) {
        const {multiple} = instance.get();
        let _value: StateValue = v;
        if (multiple) {
            _value = value.value as Dayjs[];
            _value = !_value ? [] : _value.slice();

            const index = _value.findIndex(item => isEqual(v, item));
            if (index > -1) {
                _value.splice(index, 1);
            } else {
                _value.push(v);
            }
        }

        value.set(_value);

        if (isUpdateValue) {
            updateValue(_value);
        }
    }

    function updateValue(value: StateValue | null) {
        const {multiple} = instance.get();
        const valueStr = convertToValueString(value); 
        instance.set('value', valueStr);
        instance.input.keywords.set(multiple ? '' : valueStr as string);
    }

    function onConfirm() {
        updateValue(value.value!);
        instance.hide();
    }

    function isValidDate(date: Dayjs) {
        return date.isValid() && !isDisabled(date);
    }

    watchState(instance.input.keywords, v => {
        const date = createDateByShowFormat(v);
        if (isValidDate(date)) {
            setValue(date, true);
        }
    });

    function onChangeTime(date: Dayjs) {
        value.set(date);
    }

    return {value, format, onSelect, onConfirm, onChangeTime};
}
