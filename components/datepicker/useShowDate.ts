import {useInstance} from 'intact';
import type {DatepickerCalendar} from './calendar';
import {useState, State} from '../../hooks/useState';
import {clearTime, isEqual, getNowDate} from './helpers';
import dayjs, {Dayjs} from 'dayjs';
import {_$} from '../../i18n';

export function useShowDate() {
    const instance = useInstance() as DatepickerCalendar;
    const showDate = useState<Dayjs>(getNowDate());

    function getDateString() {
        // if (isYearOrMonth) {
            // const year = Math.floor(showDate.value.get('year') / 10);
            // return [_$('{n}年 - {m}年', {
                // n: year * 10,
                // m: year * 10 + 9,
            // })];
        // }

        const map = {
            MM: _$(`${showDate.value.get('month') + 1}月`),
            YYYY: _$(`{n}年`, {n: showDate.value.get('year')}),
        };

        let yearMonthFormat = _$('yearMonthFormat');
        if (yearMonthFormat === 'yearMonthFormat') {
            yearMonthFormat = 'YYYY MM';
        }
        const format = yearMonthFormat.split(' ') as (keyof typeof map)[];

        return format.map(item => map[item]);
    }

    return {date: showDate, getDateString};
}
