import {Component, inject} from 'intact';
import template from './calendar.vdt';
import dayjs, {Dayjs} from 'dayjs';
import {useDays} from './useDays';
import {useState} from '../../hooks/useState';
import {_$} from '../../i18n';
import {DATEPICKER} from './constants';
import type {Datepicker} from './index';
import {useShowDate} from './useShowDate';
import {bind} from '../utils';
import {useYears} from './useYears';
import {IgnoreClickEvent} from '../../hooks/useDocumentClick';
import {useMonths} from './useMonths';
import {StateValue} from './useValue';
import {useStatus} from './useStatus';

export interface DatepickerCalendarProps {
    value: StateValue
    type?: 'date' | 'year' | 'month'
    rangeValues?: [Dayjs, Dayjs | null] | null
}

const defaults = (): Partial<DatepickerCalendarProps> => ({
    type: 'date'
});

export class DatepickerCalendar extends Component<DatepickerCalendarProps> {
    static template = template;
    static defaults = defaults;

    public datepicker: Datepicker = inject(DATEPICKER)!;

    private showDate = useShowDate();
    private status = useStatus();
    private days = useDays(this.showDate.date, this.status);
    private years = useYears(this.showDate.date, this.status);
    private months = useMonths(this.showDate.date, this.status);
}
