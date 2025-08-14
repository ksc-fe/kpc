import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {isEqual} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {State} from '../../hooks/useState';
import {_$} from '../../i18n';
import type {useStatus} from './useStatus';

export function useMonths(
    showDate: State<Dayjs>, 
    status: ReturnType<typeof useStatus>,
    focusDate: State<Dayjs | null>
) {
    const instance = useInstance() as DatepickerCalendar;

    function getMonths(now: Dayjs) {
        const ret = [];

        const start = showDate.value.toDate();
        start.setMonth(0);

        for (let i = 0; i < 12; i++) {
            const dayjsDate = dayjs(start);

            ret.push({
                isActive: status.isActive(dayjsDate, 'month'),
                isToday: dayjsDate.isSame(now, 'month'),
                isDisabled: status.isDisabled(dayjsDate),
                isHover: isEqual(dayjsDate, focusDate.value, 'month'),
                isInRange: status.isInRange(dayjsDate, 'month'),
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
        
        if (datepickerType === 'month' || datepickerType === 'year') {
            instance.triggerChange(date);
        } else if (datepickerType === 'week') {
            instance.type.set('week');
        } else {
            instance.type.set('date');
        }
    }

    return {getMonths, onClick};
}
