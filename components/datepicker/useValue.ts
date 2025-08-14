import {useInstance} from 'intact';
import {
    useValueBase,
    StateValueItem,
    StateValueRange,
    DayjsValueItem,
    DayjsValueRange,
    DayjsValue,
} from './useValueBase';
import dayjs, {Dayjs} from 'dayjs';
import type {Datepicker} from './index';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {last} from '../utils';
import { endTime } from './helpers';
import {PanelFlags, usePanel} from './usePanel';
import { State } from '../../hooks/useState';
import { Position } from './useHighlight';

export function useValue(
    formats: ReturnType<typeof useFormats>,
    disabled: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
    getHighlightPosition: () => State<Position>,
) {
    const instance = useInstance() as Datepicker;

    const {setValue, value, getDayjsValue, allValuesUpdatedInMultipleMode, ...rest} = useValueBase(
        formats,
        disabled,
        panel,
        // shouldUpdateValue
        function(v: StateValueItem) {
            const {type, range} = instance.get();
            if (type === 'datetime') return false;
            if (range) {
                const [start, end] = v as StateValueRange;
                if (!start || !end || end.isBefore(start)) {
                    return false;
                }
            }

            return true;
        },
        // updateValueOnInput
        function(v: DayjsValueItem) {
            setValue(v, true); 
        },
        // getEqualType
        function() {
            const {type} = instance.get();
            return type === 'datetime' ? 'second' : type!;
        },
        // updateStateValue
        function(dayjsValue, value) {
            value.set(dayjsValue.slice(0));
        }
    );

    function onChangeDate(v: Dayjs, flag: PanelFlags) {
        const {multiple, type, range} = instance.get();
        let _value: StateValueItem;

        if (range) {
            const oldValue = last(value.value as StateValueRange[]);
            const position = getHighlightPosition().value;
            if (!oldValue || allValuesUpdatedInMultipleMode()) {
                _value = [fixDatetimeWithMinDate(v)];
            } else if (position === Position.Start) {
                if (oldValue.length === 1) {
                    _value = [fixDatetimeWithMinDate(v)];
                } else {
                    _value = [fixDatetimeWithMinDate(v), oldValue[1]];
                }
            } else {
                _value = [oldValue[0], fixDatetimeWithMaxDate(v)];
            }
            // fix after selection is completed, refer to the updateValue function in useValueBase
            // (_value as DayjsValueRange).sort((a, b) => a.isAfter(b) ? 1 : -1);
        } else {
            _value = fixDatetimeWithMinDate(v);
        }

        setValue(_value, false);

        if (range) {
            instance.trigger('selecting', _value as StateValueRange, false);
        } else if (!multiple && type !== 'datetime') {
            instance.hide();
        }
    }

    function fixDatetimeWithMinDate(v: Dayjs) {
        // the datetime must be greater than minDate, #406
        const minDate = disabled.minDate.value;
        if (minDate && v.isBefore(minDate)) {
            return minDate;
        }
        return v;
    }

    function fixDatetimeWithMaxDate(v: Dayjs) {
        // the time of end datetime should be set to 23:59:59, #878
        // @modify: don't set to 23:59:59 in new UE
        const maxDate = disabled.maxDate.value;
        // const date = v.toDate();

        // endTime(date);
        // v = dayjs(date);
        if (maxDate && v.isAfter(maxDate)) {
            return maxDate;
        }
        return v;
    }

    return {value, setValue, onChangeDate, getDayjsValue, allValuesUpdatedInMultipleMode, ...rest};
}
