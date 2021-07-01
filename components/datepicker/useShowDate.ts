import {useInstance} from 'intact';
import type {DatepickerCalendar} from './calendar';
import {useState, State} from '../../hooks/useState';
import {clearTime, isEqual, getNowDate} from './helpers';
import dayjs, {Dayjs} from 'dayjs';
import {_$} from '../../i18n';
import {IgnoreClickEvent} from '../../hooks/useDocumentClick';
import {isNullOrUndefined} from 'intact-shared';

export function useShowDate() {
    const instance = useInstance() as DatepickerCalendar;
    const showDate = useState<Dayjs>(getNowDate());

    instance.on('$receive:value', v => {
        if (!isNullOrUndefined(v)) {
            showDate.set(v);
        }
    });

    function getDateLabel() {
        const map = {
            MM: _$(`${showDate.value.get('month') + 1}月`),
            YYYY: _$(`{n}年`, {n: showDate.value.get('year')}),
        };

        let yearMonthFormat = _$('yearMonthFormat');
        if (yearMonthFormat === 'yearMonthFormat') {
            yearMonthFormat = 'YYYY MM';
        }
        const format = yearMonthFormat.split(' ') as (keyof typeof map)[];

        return format.map(item => ({
            value: map[item],
            onClick(e: IgnoreClickEvent) {
                e._ignore = true;
                instance.set('type', item === 'YYYY' ? 'year' : 'month');
            }
        }));
    }

    function setRelativeMonth(month: number) {
        showDate.set(showDate.value.add(month, 'month'));
    }

    function setRelativeYear(year: number) {
        showDate.set(showDate.value.add(year, 'year'));
    }

    function prevMonth() {
        setRelativeMonth(-1);
    }

    function nextMonth() {
        setRelativeMonth(1);
    }

    function prevYear() {
        setRelativeYear(-1);
    }

    function nextYear() {
        setRelativeYear(1);
    }

    function nextTenYears() {
        setRelativeYear(10);
    }

    function prevTenYears() {
        setRelativeYear(-10);
    }

    return {
        date: showDate,
        getDateLabel,
        prevMonth,
        nextMonth,
        prevYear,
        nextYear,
        nextTenYears,
        prevTenYears,
    };
}
