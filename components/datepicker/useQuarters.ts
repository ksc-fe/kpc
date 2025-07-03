import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {isEqual} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {State} from '../../hooks/useState';
import {_$} from '../../i18n';
import type {useStatus} from './useStatus';

export function useQuarters(
    showDate: State<Dayjs>,
    status: ReturnType<typeof useStatus>,
    focusDate: State<Dayjs | null>
) {
    const instance = useInstance() as DatepickerCalendar;

    function getQuarters(now: Dayjs) {  
        const ret = [];  
        const year = showDate.value.year();  
  
        for (let i = 1; i <= 4; i++) {  
            const quarterStart = dayjs().year(year).quarter(i).startOf('quarter');  
  
            ret.push({  
                isActive: status.isActive(quarterStart, 'quarter'),  
                isToday: now.isSame(quarterStart, 'quarter'),  
                isDisabled: status.isDisabled(quarterStart),  
                isHover: isEqual(quarterStart, focusDate.value, 'quarter'),  
                isInRange: status.isInRange(quarterStart, 'quarter'),  
                label: _$(`Q${i}`),  
                value: quarterStart,  
            });  
        }  
  
        return ret;  
    } 

    function onClick(date: Dayjs) {
        const quarterStart = date.startOf('quarter');
        showDate.set(quarterStart);
        const datepickerType = instance.datepicker.get('type');  
        if (datepickerType === 'quarter') {  
            instance.triggerChange(quarterStart);  
        }  
    }

    return {getQuarters, onClick};
}
