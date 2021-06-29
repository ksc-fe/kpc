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

export interface DatepickerCalendarProps {
    value: Dayjs
    type: 'date' | 'year' | 'month'
}

const defaults = (): Partial<DatepickerCalendarProps> => ({
    type: 'date'
});

export class DatepickerCalendar extends Component<DatepickerCalendarProps> {
    static template = template;
    static defaults = defaults;

    // public datepicker: Datepicker | null = null;

    private days: ReturnType<typeof useDays> | null = null;
    private showDate: ReturnType<typeof useShowDate> | null = null;
    private years: ReturnType<typeof useYears> | null = null;

    init() {
        // this.datepicker = inject(DATEPICKER)!;
        const {date} = this.showDate = useShowDate();
        this.days = useDays(date);
        this.years = useYears(date);
    }

    @bind
    showYearPicker(e: MouseEvent) {
        (e as IgnoreClickEvent)._ignore = true;
        this.set('type', 'year');
    }
}
