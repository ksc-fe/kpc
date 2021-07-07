import {useInstance} from 'intact';
import {useState, watchState, State} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import {isNullOrUndefined} from 'intact-shared';
import {isGT, isLT, isEqual} from './helpers';
import type {StateValue, StateValueItem} from './useValue';
import type {DatepickerCalendar, DatepickerCalendarProps} from './calendar';

export function useStatus() {
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
            return (value as [Dayjs, Dayjs?][]).some(([start, end]: [Dayjs, Dayjs?]): boolean => {
                if (start && end) {
                    return isGT(date, start, type) && isLT(date, end, type);
                }
                return false;
            });
        }

        return false;
    }

    return {isActive, isInRange, isDisabled: instance.datepicker.isDisabled};
}
