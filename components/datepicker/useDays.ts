import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual, getNowDate} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {useState, State} from '../../hooks/useState';

export function useDays(showDate: State<Dayjs>) {
    const instance = useInstance() as DatepickerCalendar;
    const focusDate = useState<Dayjs | null>(null);

    function getDays(now: Dayjs) {
        const {value} = instance.get();
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
                isActive: !isExceed && isEqual(value, dayjsDate),
                isToday: isEqual(now, dayjsDate),
                isDisabled: isDisabledDate(dayjsDate),
                isHover: isEqual(focusDate.value, dayjsDate),
                value: _date,
            });
            start.setDate(start.getDate() + 1);
        }

        return days;
    }

    function isDisabledDate(date: Dayjs) {
        return false;
    }

    return {getDays, showDate};
}
