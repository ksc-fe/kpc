import {useState} from '../../hooks/useState';
import {Dayjs} from 'dayjs';

export function useFocusDate() {
    const focusDate = useState<Dayjs | null>(null);

    function reset() {
        focusDate.set(null);
    }

    return {focusDate, reset};
}
