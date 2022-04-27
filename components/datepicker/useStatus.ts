import {useInstance} from 'intact';
import {State} from '../../hooks/useState';
import {Dayjs} from 'dayjs';
import {isGT, isLT, isEqual} from './helpers';
import type {StateValueItem, StateValueRange} from './basepicker';
import type {DatepickerCalendar, DatepickerCalendarProps} from './calendar';

export function useStatus(focusDate: State<Dayjs | null>) {
    const instance = useInstance() as DatepickerCalendar;
    
    function isActive(date: Dayjs, type: DatepickerCalendarProps['type']) {
        const isActive = (values: StateValueItem | StateValueItem[] | undefined): boolean => {
            return Array.isArray(values) ?
                !!(values as StateValueItem[]).find(v => isActive(v)) :
                isEqual(values, date, type);
        };
        return isActive(instance.get('value'));
    }

    function isInRange(date: Dayjs, type: DatepickerCalendarProps['type']) {
        const {range, multiple} = instance.datepicker.get();
        const value = instance.get('value');

        if (range) {
            if (!value) {
                return false;
            }
            return (value as StateValueRange[]).some(([start, end]): boolean => {
                if (!end) {
                    end = focusDate.value as Dayjs | undefined;
                    if (end && isLT(end, start, type)) {
                        // maybe the focusDate is less than start date
                        const tmp = start;
                        start = end;
                        end = tmp;
                    }
                }
                if (start && end) {
                    return isGT(date, start, type) && isLT(date, end, type);
                }
                return false;
            });
        }

        return false;
    }

    return {isActive, isInRange, isDisabled: instance.datepicker.disabled.isDisabled};
}
