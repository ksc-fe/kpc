import {Component, inject} from 'intact';
import template from './calendar.vdt';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual, getNowDate} from './helpers';
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

export interface DatepickerCalendarProps {
    value?: Dayjs
    type?: 'date' | 'year' | 'month'
}

const defaults = (): Partial<DatepickerCalendarProps> => ({
    type: 'date'
});

export class DatepickerCalendar extends Component<DatepickerCalendarProps> {
    static template = template;
    static defaults = defaults;

    // public datepicker: Datepicker | null = null;

    private showDate = useShowDate();
    private days = useDays(this.showDate.date);
    private years = useYears(this.showDate.date);
    private months = useMonths(this.showDate.date);

    @bind
    showYearPicker(e: IgnoreClickEvent) {
        e._ignore = true;
        this.set('type', 'year');
    }
}
