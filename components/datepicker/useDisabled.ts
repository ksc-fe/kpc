import {useInstance} from 'intact';
import {useState, State} from '../../hooks/useState';
import {Dayjs} from 'dayjs';
import type {Datepicker, Value} from './index';
import {isNullOrUndefined} from 'intact-shared';
import {isGT, isLT, last} from './helpers';
import type {useFormats} from './useFormats';
import {PanelFlags, PanelTypes} from './usePanel';

export function useDisabled({createDateByValueFormat}: ReturnType<typeof useFormats>) {
    const instance = useInstance() as Datepicker;
    const maxDate = useState<Dayjs | null>(null);
    const minDate = useState<Dayjs | null>(null);

    function convertToDayjs(state: State<Dayjs | null>, v: Value | undefined) {
        if (isNullOrUndefined(v)) {
            state.set(null);
        } else {
            state.set(createDateByValueFormat(v));
        }
    } 

    instance.on('$receive:max', v => {
        convertToDayjs(maxDate, v);
    });
    instance.on('$receive:min', v => {
        convertToDayjs(minDate, v);
    });

    function isDisabled(value: Dayjs, type: 'date' | 'year' | 'month' | 'second' = 'date') {
        const {disabledDate} = instance.get();
        return isGT(value, maxDate.value, type) ||
            isLT(value, minDate.value, type) ||
            !!disabledDate && disabledDate(value);
    }

    function isDisabledTime(value: Dayjs, flag: PanelFlags): boolean {
        if (!isDisabled(value, 'second')) {
            if (!instance.get('range')) return false;

            // compare the start and the end datetime 
            const anotherDatetime = instance.value.getTimeValue(
                flag === PanelFlags.Start ? PanelFlags.End : PanelFlags.Start
            );
            if (!anotherDatetime) return false;
            if (flag === PanelFlags.Start) {
                return value.isAfter(anotherDatetime, 'second');
            } else {
                return value.isBefore(anotherDatetime, 'second');
            }
        }
        return true;
    }

    function isDisabledConfirm(): boolean {
        const lastValue = last(instance.value.value.value);
        if (!lastValue) return true;

        const {range} = instance.get();
        if (range && (lastValue as [Dayjs, Dayjs?]).length < 2) return true;

        const {startPanel, endPanel} = instance.panel;
        if (startPanel.value === PanelTypes.Date && endPanel.value === PanelTypes.Date) {
            return true;
        }

        let start: Dayjs;
        let end: Dayjs | undefined;
        if (range) {
            start = (lastValue as [Dayjs, Dayjs])[0];
            end = (lastValue as [Dayjs, Dayjs])[1];
        } else {
            start = lastValue as Dayjs;
        }
        if (isDisabledTime(start, PanelFlags.Start) || end && isDisabledTime(end, PanelFlags.End)) {
            return true;
        }

        return false;
    }

    return {isDisabled, isDisabledTime, isDisabledConfirm};
}
