import {useInstance} from 'intact';
import {State} from '../../hooks/useState';
import {Dayjs} from 'dayjs';
import {isGT, isLT, isEqual, last} from './helpers';
import type {StateValueItem, StateValueRange} from './useValueBase';
import type {DatepickerCalendar, DatepickerCalendarProps} from './calendar';
import { Position } from './useHighlight';

export function useStatus(focusDate: State<Dayjs | null>) {
    const instance = useInstance() as DatepickerCalendar;

    // if focusDate exists, use it as the active date in range mode
    function getValueByFocusDate() {
        const { value, highlightPosition } = instance.get();
        const { range, multiple } = instance.datepicker.get();

        if (!focusDate.value || !range || multiple) return value;
        
        let lastValue = last(value) as StateValueRange;
        if (!lastValue) return value;

        lastValue = lastValue.slice() as StateValueRange;
        if (highlightPosition === Position.Start) {
            lastValue[0] = focusDate.value;
        } else {
            lastValue[1] = focusDate.value;
        }

        return value.slice(0, -1).concat([lastValue]);
    }
    
    function isActive(date: Dayjs, type: DatepickerCalendarProps['type']) {
        const _isActive = (values: StateValueItem | StateValueItem[] | undefined): boolean => {
            return Array.isArray(values) ?
                !!(values as StateValueItem[]).find(v => _isActive(v)) :
                isEqual(values, date, type);
        };

        return _isActive(getValueByFocusDate());
    }

    function isInRange(date: Dayjs, type: DatepickerCalendarProps['type']) {
        const {range} = instance.datepicker.get();
        const value = getValueByFocusDate();

        if (range) {
            if (!value) return false;

            return (value as StateValueRange[]).some(([start, end]): boolean => {
                if (start && end) {
                    if (isLT(end, start, type)) {
                        // maybe the focusDate is less than start date
                        const tmp = start;
                        start = end;
                        end = tmp;
                    }

                    return isGT(date, start, type) && isLT(date, end, type);
                }
                return false;
            });
        }

        return false;
    }

    return {isActive, isInRange, isDisabled: instance.datepicker.disabled.isDisabled};
}
