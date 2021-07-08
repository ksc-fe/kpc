import {useInstance} from 'intact';
import {useState} from '../../hooks/useState';
import {Dayjs} from 'dayjs';
import type {Datepicker} from './';

export function useFocusDate() {
    const instance = useInstance() as Datepicker;
    const focusDate = useState<Dayjs | null>(null);

    function reset() {
        focusDate.set(null);
    }

    instance.on('hide', reset);

    return {focusDate, reset};
}
