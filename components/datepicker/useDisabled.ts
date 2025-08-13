import {useInstance} from 'intact';
import {useState, State} from '../../hooks/useState';
import {Dayjs, OpUnitType, QUnitType} from './dayjs';
import type {Datepicker} from './index';
import {isNullOrUndefined} from 'intact-shared';
import {isGT, isLT, last} from './helpers';
import type {useFormats} from './useFormats';
import {PanelFlags} from './usePanel';
import {Value, StateValueRange, StateValueItem} from './useValueBase';
import { Position } from './useHighlight';

export function useDisabled(
    {createDateByValueFormat}: ReturnType<typeof useFormats>,
    getHighlightPosition?: () => State<Position>
) {
    const instance = useInstance() as Datepicker;
    const maxDate = useState<Dayjs | null>(null);
    const minDate = useState<Dayjs | null>(null);

    function convertToDayjs(state: State<Dayjs | null>, v?: Value | null) {
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

    function isDisabled(value: Dayjs, type: OpUnitType | QUnitType = 'date') {
        const {disabledDate} = instance.get();
        return isGT(value, maxDate.value, type) ||
            isLT(value, minDate.value, type) ||
            !!disabledDate && disabledDate(value);
    }

    function isDisabledTime(value: Dayjs): boolean {
        return isDisabled(value, 'second');
    }

    function isDisabledConfirm(): boolean {
        const lastValue = last(instance.value.value.value);
        const {range, multiple} = instance.get();
        if (!lastValue || instance.value.allValuesUpdatedInMultipleMode()) return true;

        if (range && getHighlightPosition) {
            const position = getHighlightPosition();
            // if the position is not selected, it should be disabled
            if (!(lastValue as StateValueRange)[position.value]) {
                return true;
            }
        }

        return isDisabledValue(lastValue);
    }

    function isDisabledValue(value: StateValueItem): boolean {
        const { range } = instance.get();
        let start: Dayjs;
        let end: Dayjs | undefined;

        if (range) {
            start = (value as [Dayjs, Dayjs])[0];
            end = (value as [Dayjs, Dayjs])[1];
        } else {
            start = value as Dayjs;
        }

        if (isDisabledTime(start) || end && isDisabledTime(end)) {
            return true;
        }

        return false;
    }

    return {isDisabled, isDisabledTime, isDisabledConfirm, isDisabledValue, maxDate, minDate};
}
