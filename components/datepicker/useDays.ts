import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {State} from '../../hooks/useState';
import type {useStatus} from './useStatus';

export function useDays(
    showDate: State<Dayjs>,
    status: ReturnType<typeof useStatus>,
    focusDate: State<Dayjs | null>
) {
    const instance = useInstance() as DatepickerCalendar;

    function getDays(now: Dayjs) {
        const days = [];
        // dayjs is immutable, so we convert to native Date
        const start = showDate.value.toDate();
        const month = start.getMonth();
        start.setDate(1);
        clearTime(start);
        const startWeekday = start.getDay();
        start.setDate(1 - startWeekday);

        for (let i = 0; i < 42; i++) {
            const dayjsDate = dayjs(start);
            const _date = start.getDate();
            const _month = start.getMonth();
            const isExceed = _month !== month;

            days.push({
                isExceed,
                isActive: !isExceed && status.isActive(dayjsDate, 'date'),
                isToday: isEqual(now, dayjsDate),
                isDisabled: status.isDisabled(dayjsDate),
                isHover: isEqual(focusDate.value, dayjsDate),
                isInRange: !isExceed && status.isInRange(dayjsDate, 'date'),
                label: _date,
                value: dayjsDate,
            });

            start.setDate(start.getDate() + 1);
        }

        return days;
    }

    return {
        getDays,
        onClick: instance.triggerChange,
    };
}
