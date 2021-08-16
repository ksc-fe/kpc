import {useInstance} from 'intact';
import {
    useValue as useValueBase,
    StateValueItem,
    StateValueRange,
    DayjsValueItem,
    DayjsValueRange
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
        }
    );

    function onChangeDate(v: Dayjs, flag: PanelFlags) {
        const {multiple, type, range} = instance.get();
        let _value: StateValueItem = v;

        if (range) {
            const oldValue = last(value.value as StateValueRange[]);
            if (!oldValue || oldValue.length === 2) {
                _value = [v];
            } else {
                _value = [oldValue[0], v];
                (_value as DayjsValueRange).sort((a, b) => a.isAfter(b) ? 1 : -1);
            }
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
