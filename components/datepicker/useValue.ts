import {useInstance} from 'intact';
import {
    useValue as useValueBase,
    StateValueItem,
    StateValueRange,
    DayjsValueItem,
    DayjsValueRange,
    DayjsValue,
} from './basepicker';
import {Dayjs} from 'dayjs';
import {Datepicker} from './index';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {last} from '../utils';
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
        let _value: StateValueItem = v;

        // the datetime must be greater than minDate, #406
        const minDate = disabled.minDate.value;
        if (minDate && _value.isBefore(minDate)) {
            _value = minDate;
        }

        if (range) {
            const oldValue = last(value.value as StateValueRange[]);
            if (!oldValue || oldValue.length === 2) {
                _value = [v];
            } else {
                _value = [oldValue[0], v];
                (_value as DayjsValueRange).sort((a, b) => a.isAfter(b) ? 1 : -1);
            }
            instance.trigger('selecting', _value);
        }

        setValue(_value, false);

        if (type === 'datetime') {
            panel.changePanel(PanelTypes.Time, flag);
        } else if (!multiple && (!range || (_value as StateValueRange).length === 2)) {
            instance.hide();
        }
    }

    return {value, setValue, onChangeDate, ...rest};
}
