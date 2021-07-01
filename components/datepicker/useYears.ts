import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual, getNowDate} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {useState, State} from '../../hooks/useState';
import {_$} from '../../i18n';

export function useYears(showDate: State<Dayjs>) {
    const instance = useInstance() as DatepickerCalendar;
    const focusYear = useState<Dayjs | null>(null);

    function getYearRange() {
        const startYear = Math.floor(showDate.value.get('year') / 10) * 10;

        return [startYear, startYear + 9];
    }

    function getYearLabel() {
        const [start, end] = getYearRange();
        return _$('{start}年 - {end}年', {start, end});
    }

    function getYears(now: Dayjs) {
        const years = [];

        const start = showDate.value.toDate();
        const [startYear, endYear] = getYearRange();
        start.setFullYear(startYear - 1);

        for (let i = 0; i < 12; i++) {
            const dayjsDate = dayjs(start);
            const year = start.getFullYear();
            const isExceed = year < startYear || year > endYear;

            years.push({
                isExceed,
                isActive: !isExceed && isEqual(dayjsDate, showDate.value, 'year'),
                isToday: dayjsDate.isSame(now, 'year'),
                isDisabled: isDisabledDate(dayjsDate),
                isHover: isEqual(dayjsDate, focusYear.value, 'year'),
                label: year,
                value: dayjsDate,
            });

            start.setFullYear(year + 1);
        }

        return years;
    }

    function isDisabledDate(date: Dayjs) {
        return false;
    }

    function onClick(date: Dayjs) {
        showDate.set(date);
        instance.set('type', 'month');
    }

    return {getYearRange, getYearLabel, getYears, onClick};
}
