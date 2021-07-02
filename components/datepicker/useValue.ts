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

    instance.on('$change:value', (newValue, oldValue) => {
        if (isEqualArray(newValue, oldValue)) return;
        value.set(convertToDayjs(newValue));
    });

    function convertToDayjs(v: DatepickerProps['value']): StateValue | null {
        if (isNullOrUndefined(v)) return null;
        if (Array.isArray(v)) {
            return v.map(convertToDayjs) as StateValue;
        }
        return createDateByValueFormat(v);
    }

    function convertToValueString(v: StateValue | null): StringValue | null {
        if (isNullOrUndefined(v)) return null;
        if (Array.isArray(v)) {
            return v.map(convertToValueString) as StringValue;
        }
        return getValueString(v);
    }

    function format() {
        const {range, multiple} = instance.get();
        const _value = value.value;
        if (Array.isArray(_value)) {
            if (range) {
                if (multiple) {
                    // TODO
                    // (_value as [Dayjs, Dayjs][]).map(values => {
                        // if ()
                    // })
                }
            } else {
                return (_value as Dayjs[]).map(getShowString);
            }
        } else if (_value) {
            return getShowString(_value);
        }
    }

    function onSelect(v: Dayjs) {
        const {multiple, type} = instance.get();

        if (type === 'datetime') {
            instance.changePanel(PanelTypes.Time);
        } else {
            setValue(v);
            if (!multiple) {
                instance.hide();
            }
        }
    }

    function setValue(v: Dayjs) {
        const {multiple} = instance.get();
        if (multiple) {
            let oldValue = value.value as Dayjs[];
            if (!oldValue) oldValue = [];
            else oldValue = oldValue.slice();

            const index = oldValue.findIndex(item => isEqual(v, item));
            if (index > -1) {
                oldValue.splice(index, 1);
            } else {
                oldValue.push(v);
            }

            value.set(oldValue);
        } else {
            value.set(v);
        }
    }

    function isValidDate(date: Dayjs) {
        return date.isValid() && !isDisabled(date);
    }

    watchState(value, v => {
        const {multiple} = instance.get();
        const valueStr = convertToValueString(v); 
        instance.set('value', valueStr);
        instance.input.keywords.set(multiple ? '' : valueStr as string);
    });

    watchState(instance.input.keywords, v => {
        const date = createDateByShowFormat(v);
        if (isValidDate(date)) {
            setValue(date);
        }
    });

    return {value, format, onSelect};
}
