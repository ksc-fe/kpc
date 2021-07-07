import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual, getNowDate} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {useState, State} from '../../hooks/useState';
import {_$} from '../../i18n';
import type {useStatus} from './useStatus';

export function useYears(showDate: State<Dayjs>, status: ReturnType<typeof useStatus>) {
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
                isActive: !isExceed && status.isActive(dayjsDate, 'year'),
                isToday: dayjsDate.isSame(now, 'year'),
                isDisabled: status.isDisabled(dayjsDate),
                isHover: isEqual(dayjsDate, focusYear.value, 'year'),
                isInRange: !isExceed && status.isInRange(dayjsDate, 'year'),
                label: year,
                value: dayjsDate,
            });

            start.setFullYear(year + 1);
        }

        return years;
    }

    function onClick(date: Dayjs) {
        showDate.set(date);
        if (instance.datepicker.get('type') !== 'year') {
            instance.set('type', 'month');
        } else {
            instance.triggerChange(date);
        }
    }

    return {getYearRange, getYearLabel, getYears, onClick};
}
