import {useInstance} from 'intact';
import {DatepickerCalendar} from './calendar';
import {useState} from '../../hooks/useState';
import {Dayjs} from 'dayjs';

export function useKeyboards() {
    const instance = useInstance() as DatepickerCalendar; 
    const focusDate = useState<Dayjs | null>(null);

    return {focusDate};
}
