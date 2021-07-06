import {Component, inject} from 'intact';
import template from './calendar.vdt';
import dayjs, {Dayjs} from 'dayjs';
import {clearTime, isEqual, getNowDate, isGT, isLT} from './helpers';
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
import {StateValue, StateValueItem} from './useValue';

export interface DatepickerCalendarProps {
    value?: StateValue
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
    private days = useDays(this.showDate.date, this.datepicker.isDisabled);
    private years = useYears(this.showDate.date, this.datepicker.isDisabled);
    private months = useMonths(this.showDate.date, this.datepicker.isDisabled);

    isActive(date: Dayjs, type: DatepickerCalendarProps['type']) {
        const isActive = (values: StateValue | undefined): boolean => {
            return Array.isArray(values) ?
                !!(values as StateValueItem[]).find(v => isActive(v)) :
                isEqual(values, date, type);
        };
        return isActive(this.get('value'));
    }

    isInRange(date: Dayjs, type: DatepickerCalendarProps['type']) {
        const {range, multiple} = this.datepicker.get();
        const {value} = this.get();

        if (range) {
            if (!value) {
                return false;
            }
            const isInRange = ([start, end]: [Dayjs, Dayjs?]): boolean => {
                if (start) {
                    if (end) {
                        return isGT(date, start, type) && isLT(date, end, type);
                    }
                }
                return false;
            };
            if (multiple) {
                return (value as [Dayjs, Dayjs?][]).some(isInRange);
            } else {
                return isInRange(value as [Dayjs, Dayjs?]);
            }
        }

        return false;
    }
}
