import {useInstance} from 'intact';
import type {DatepickerCalendar} from './calendar';
import {useState, watchState} from '../../hooks/useState';
import {getNowDate, last} from './helpers';
import {Dayjs} from 'dayjs';
import {_$} from '../../i18n';
import {IgnoreClickEvent} from '../../hooks/useDocumentClick';
import {PanelFlags, usePanel} from './usePanel';

export function useShowDate(panel: ReturnType<typeof usePanel>) {
    const instance = useInstance() as DatepickerCalendar;
    const {flag} = instance.get();
    let date = getNowDate();
    if (flag === PanelFlags.End) {
        date = date.add(1, 'month');
    }
    const showDate = useState<Dayjs>(date);
    const anotherPanel = flag === PanelFlags.Start ? panel.endRef : panel.startRef;

    instance.on('$receive:value', v => {
        const lastValue = last(v);
        let value: Dayjs | undefined;
        if (Array.isArray(lastValue)) {
            if (lastValue.length !== 2) return;
            // range
            const flag = instance.get('flag');
            value = lastValue[flag];
        } else {
            value = lastValue as Dayjs | undefined;
        }

        let another;
        if (
            value &&
            !value.isSame(showDate.value, 'month') &&
            // ignore if it is in another panel
            (
                !(another = anotherPanel.value) ||
                !value.isSame(another.showDate.date.value, 'month')
            )
         ){
            showDate.set(value);
        }
    });
    
    // ensure the start panel's date is before the end panel's
    watchState(showDate, v => {
        if (flag === PanelFlags.Start) {
            const endPanel = anotherPanel.value;
            if (endPanel) {
                const endShowDate = endPanel.showDate.date.value.date(1);
                if (v.isAfter(endShowDate, 'date') || v.isSame(endShowDate, 'date')) {
                    endPanel.showDate.nextMonth();
                }
            }
        } else {
            const startPanel = anotherPanel.value;
            if (startPanel) { // maybe changed to time picker
                let startShowDate = startPanel.showDate.date.value;
                // set to the last date
                startShowDate = startShowDate.add(1, 'month').add(-1, 'day');
                if (v.isBefore(startShowDate, 'date') || v.isSame(startShowDate, 'date')) {
                    startPanel.showDate.prevMonth();
                }
            }
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
                instance.type.set(item === 'YYYY' ? 'year' : 'month');
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
