import {useInstance} from 'intact';
import {useState, watchState} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import type {Datepicker, Value} from './index';
import {isString} from 'intact-shared';
import {FORMATS} from './helpers';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';

export function useValue(
    {
        createDateByValueFormat,
        createDateByShowFormat,
        getShowString,
        getValueString,
    }: ReturnType<typeof useFormats>,
    isDisabled: ReturnType<typeof useDisabled>
) {
    const value = useState<Dayjs | null>(null);
    const instance = useInstance() as Datepicker;

    instance.on('$receive:value', v => {
        // convert to Dayjs instance
        let hasValue = true;
        if (Array.isArray(v)) {
            if (!v.length) hasValue = false;
            v = v.map(v => {
                if (!v) hasValue = false;
                return createDateByValueFormat(v); 
            });
        } else if (v) {
            v = createDateByValueFormat(v);
        } else {
            hasValue = false;
        }

        if (hasValue) {
            value.set(v as Dayjs);
        }
    });

    function format() {
        const {range} = instance.get();
        const _value = value.value;
        if (Array.isArray(_value)) {
            // do not show if has not selected
            if (range && _value.length !== 2) return;
            const values = _value.map(getShowString);
            if (range) {
                return values.join(' ~ ');
            }
            return values.join(', ');
        } else if (_value) {
            return getShowString(_value);
        }
    }

    function onSelect(v: Dayjs) {
        setValue(v);
        instance.hide();
    }

    function setValue(v: Dayjs) {
        if (value.value && v.isSame(value.value)) return;
        value.set(v);
    }

    function isValidDate(date: Dayjs) {
        return date.isValid() && !isDisabled(date);
    }

    watchState(value, v => {
        const valueStr = v ? getValueString(v) : '';
        instance.set('value', valueStr);
        instance.input.keywords.set(valueStr);
    });

    watchState(instance.input.keywords, v => {
        const date = createDateByShowFormat(v);
        if (isValidDate(date)) {
            setValue(date);
        }
    });

    return {value, format, onSelect};
}
