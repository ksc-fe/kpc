import {useInstance} from 'intact';
import {useState} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import type {Datepicker, Value} from './index';
import {isString} from 'intact-shared';
import {FORMATS} from './helpers';

export function useValue() {
    const value = useState<Dayjs | Dayjs[] | null>(null);
    const instance = useInstance() as Datepicker;

    instance.on('$receive:value', v => {
        // convert to Dayjs instance
        let hasValue = true;
        if (Array.isArray(v)) {
            if (!v.length) hasValue = false;
            v = v.map(v => {
                if (!v) hasValue = false;
                return createDate(v); 
            });
        } else if (v) {
            v = createDate(v);
        } else {
            hasValue = false;
        }

        if (hasValue) {
            value.set(v as Dayjs | Dayjs[]);
        }
    });

    function createDate(value: Value) {
        return dayjs(value, isString(value) ? getValueFormat() : undefined);
    }

    function getValueFormat() {
        const {format, valueFormat, type} = instance.get();
        return valueFormat || format || FORMATS[type];
    }

    function getShowFormat() {
        const {format, showFormat, type} = instance.get();
        return showFormat || format || FORMATS[type];
    }

    function format() {
        const {range} = instance.get();
        const _value = value.value;
        if (Array.isArray(_value)) {
            // do not show if has not selected
            if (range && _value.length !== 2) return;
            const values = _value.map(v => v.format(getShowFormat()));
            if (range) {
                return values.join(' ~ ');
            }
            return values.join(', ');
        } else if (_value) {
            return _value.format(getShowFormat());
        }
    }

    function createDateByShowFormat(value: string) {

    }

    function setValue(v: Dayjs) {
        value.set(v);
        instance.set('value', v.format(getValueFormat()));
        instance.hide();
    }

    return {value, format, setValue};
}
