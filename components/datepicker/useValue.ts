import {useInstance} from 'intact';
import {
    useValue as useValueBase,
    StateValueItem,
    StateValueRange,
    DayjsValueItem,
    DayjsValueRange,
    DayjsValue,
} from './basepicker';
import dayjs, {Dayjs} from 'dayjs';
import {Datepicker} from './index';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {last} from '../utils';
import { endTime } from './helpers';
import {PanelTypes, PanelFlags, usePanel} from './usePanel';

export function useValue(
    formats: ReturnType<typeof useFormats>,
    disabled: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
) {
    const instance = useInstance() as Datepicker;

    const {setValue, value, ...rest} = useValueBase(
        formats,
        disabled,
        panel,
        function(v: StateValueItem) {
            const {type, range} = instance.get();
            return type !== 'datetime' && (!range || (v as StateValueRange).length === 2)
        },
        function(v: DayjsValueItem) {
            setValue(v, true); 
        },
        function() {
            const {type} = instance.get();
            return type === 'datetime' ? 'second' : type!;
        },
        function(dayjsValue, value) {
            if (
                instance.get('multiple') && 
                panel.getPanel(PanelFlags.Start).value === PanelTypes.Time
            ) {
                value.set(dayjsValue.concat([last(value.value)] as DayjsValue));
            } else {
                value.set(dayjsValue.slice(0));
            }
        }
    );

    function onChangeDate(v: Dayjs, flag: PanelFlags) {
        const {multiple, type, range} = instance.get();
        let _value: StateValueItem;

        if (range) {
            const oldValue = last(value.value as StateValueRange[]);
            if (!oldValue || oldValue.length === 2) {
                /**
                 * if we select the first value or re-select the value
                 * no matter what the flag is, we should set flag to start panel
                 * #877
                 */
                flag = PanelFlags.Start;
                _value = [fixDatetimeWithMinDate(v)];
            } else {
                _value = [oldValue[0], fixDatetimeWithMaxDate(v)];
                (_value as DayjsValueRange).sort((a, b) => a.isAfter(b) ? 1 : -1);
            }
            instance.trigger('selecting', _value);
        } else {
            _value = fixDatetimeWithMinDate(v);
        }

        setValue(_value, false);

        if (type === 'datetime') {
            if (range) {
                // only change to time panel after selected start and end date
                if ((_value as StateValueRange).length === 2) {
                    panel.changePanel(PanelTypes.Time, PanelFlags.Start);
                    panel.changePanel(PanelTypes.Time, PanelFlags.End);
                }
            } else {
                panel.changePanel(PanelTypes.Time, flag);
            }
        } else if (!multiple && (!range || (_value as StateValueRange).length === 2)) {
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
        // the tiem of end datetime should be set to 23:59:59, #878
        const maxDate = disabled.maxDate.value;
        const date = v.toDate();

        endTime(date);
        v = dayjs(date);
        if (maxDate && v.isAfter(maxDate)) {
            return maxDate;
        }
        return v;
    }

    return {value, setValue, onChangeDate, ...rest};
}
