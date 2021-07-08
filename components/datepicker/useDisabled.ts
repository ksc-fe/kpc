import {useInstance} from 'intact';
import {useState, State} from '../../hooks/useState';
import {Dayjs} from 'dayjs';
import type {Datepicker, Value} from './index';
import {isNullOrUndefined} from 'intact-shared';
import {isGT, isLT} from './helpers';
import type {useFormats} from './useFormats';

export function useDisabled({createDateByValueFormat}: ReturnType<typeof useFormats>) {
    const instance = useInstance() as Datepicker;
    const maxDate = useState<Dayjs | null>(null);
    const minDate = useState<Dayjs | null>(null);

    function convertToDayjs(state: State<Dayjs | null>, v: Value | undefined) {
        if (isNullOrUndefined(v)) {
            state.set(null);
        } else {
            state.set(createDateByValueFormat(v));
        }
    } 

    instance.on('$receive:maxDate', v => {
        convertToDayjs(maxDate, v);
    });
    instance.on('$receive:minDate', v => {
        convertToDayjs(minDate, v);
    });

    function isDisabled(value: Dayjs) {
        const {disabledDate} = instance.get();
        return isGT(value, maxDate.value) ||
            isLT(value, minDate.value) ||
            !!disabledDate && disabledDate(value);
    }

    return isDisabled;
}
