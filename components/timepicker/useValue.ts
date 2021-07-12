import {useInstance} from 'intact';
import type {Timepicker} from './';
import {useState} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import type {useFormats} from './useFormats';

export function useValue(formats: ReturnType<typeof useFormats>) {
    const instance = useInstance() as Timepicker;
    const value = useState<Dayjs | null>(null);

    instance.on('$receive:value', v => {
        const _value = dayjs(v);
        value.set(_value);
    });

    function onClick() {
        const _value = value.value!;
        value.set(_value.add(1, 'month'));
        instance.set('value', format());
    }

    function format() {
        return value.value!.format('YYYY-MM-DD HH:mm:ss');
    }

    return {value, onClick, format};
}
