import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual, getNowDate} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {useState, State} from '../../hooks/useState';

export function useDays(showDate: State<Dayjs>, isDisabled: (v: Dayjs) => boolean) {
    const instance = useInstance() as DatepickerCalendar;
    const focusDate = useState<Dayjs | null>(null);

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
                isActive: !isExceed && instance.isActive(dayjsDate, 'date'),
                isToday: isEqual(now, dayjsDate),
                isDisabled: isDisabled(dayjsDate),
                isHover: isEqual(focusDate.value, dayjsDate),
                isInRange: !isExceed && instance.isInRange(dayjsDate, 'date'),
                label: _date,
                value: dayjsDate,
            });

            start.setDate(start.getDate() + 1);
        }

        return days;
    }

    function onClick(value: Dayjs) {
        instance.set('value', value);
    }

    return {
        getDays,
        onClick,
    };
}
