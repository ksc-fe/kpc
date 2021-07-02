import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual, getNowDate} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {useState, State} from '../../hooks/useState';
import {_$} from '../../i18n';

export function useMonths(showDate: State<Dayjs>, isDisabled: (v: Dayjs) => boolean) {
    const instance = useInstance() as DatepickerCalendar;
    const focusMonth = useState<Dayjs | null>(null);

    function getMonths(now: Dayjs) {
        const ret = [];

        const start = showDate.value.toDate();
        start.setMonth(0);

        for (let i = 0; i < 12; i++) {
            const dayjsDate = dayjs(start);

            ret.push({
                isActive: instance.isActive(dayjsDate, 'month'),
                isToday: dayjsDate.isSame(now, 'month'),
                isDisabled: isDisabled(dayjsDate),
                isHover: isEqual(dayjsDate, focusMonth.value, 'month'),
                label: _$(i + 1 + '月'),
                value: dayjsDate,
            });

            start.setMonth(i + 1);
        }

        return ret;
    }

    function onClick(date: Dayjs) {
        showDate.set(date);
        const datepickerType = instance.datepicker.get('type');
        if (datepickerType !== 'month' && datepickerType !== 'year') {
            instance.set('type', 'date');
        } else {
            instance.set('value', date);
        }
    }

    return {getMonths, onClick};
}
