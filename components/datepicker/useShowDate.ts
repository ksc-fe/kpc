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
    const {flag, type} = instance.get();
    let date = getNowDate();
    if (flag === PanelFlags.End) {
        date = getPanelShowDate(date, true);
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
         ) {
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
                    // maybe we are changing the year, so we must set it as the next month from show date
                    // of start panel
                    // endPanel.showDate.nextMonth();
                    endPanel.showDate.date.set(getPanelShowDate(v, true));
                }
            }
        } else {
            const startPanel = anotherPanel.value;
            if (startPanel) { // maybe changed to time picker
                let startShowDate = startPanel.showDate.date.value;
                // set to the last date
                startShowDate = startShowDate.add(1, 'month').add(-1, 'day');
                if (v.isBefore(startShowDate, 'date') || v.isSame(startShowDate, 'date')) {
                    // startPanel.showDate.prevMonth();
                    startPanel.showDate.date.set(getPanelShowDate(v, false));
                }
            }
        }
    });

    function getPanelShowDate(date: Dayjs, isEnd: boolean) {
        switch (type) {
            case 'year':
                return date.add(isEnd ? 10 : -10, 'year');
            case 'month':
                return date.add(isEnd ? 1 : -1, 'year');
                break;
            case 'week':
                return date.add(isEnd ? 1 : -1, 'week');
                break;
            case 'quarter':
                return date.add(isEnd ? 1 : -1, 'quarter');
                break;
            default:
                return date.add(isEnd ? 1 : -1, 'month');
                break;
        }
    }

    function getDateLabel() {
        const year = showDate.value.get('year');
        const month = showDate.value.get('month') + 1;

        const map: { [key: string]: string } = {
            'MM': _$(`${month}月`),                // 月标签
            'YYYY': _$(`{n}年`, {n: year}),       // 年标签
            'YYYY MM': _$(`{n}年{y}月`, {n: year, y: month})  // 年月组合标签
        };

        let format;
        switch (type) {
            case 'week':
                format = ['YYYY MM'];  // week 类型显示年月组合
                break;
            case 'quarter':
                format = ['YYYY'];     // quarter 类型仅显示年
                break;
            default:
                let yearMonthFormat = _$('yearMonthFormat');
                if (yearMonthFormat === 'yearMonthFormat') {
                    yearMonthFormat = 'YYYY MM';  // 默认格式
                }
                format = yearMonthFormat.split(' ');  // 其他类型按配置拆分
                break;
        }

         // 根据 type 动态调整显示的格式
         return format.map(item => ({
            value: map[item],  // 根据 format 项目生成标签
            onClick: (e: IgnoreClickEvent) => {
                e._ignore = true;
                // 根据点击的项设置不同的 type
                if (item === 'YYYY MM') {
                    instance.type.set('week');      // 点击年月组合，保持 week
                } else if (item === 'YYYY') {
                    instance.type.set(type === 'quarter' ? 'quarter' : 'year');  // 根据当前 type 决定
                } else if (item === 'MM') {
                    instance.type.set('month');     // 点击月，切换到 month
                } else {
                    instance.type.set('date');      // 默认切换到 date
                }
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
