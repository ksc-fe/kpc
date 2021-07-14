import {useInstance} from 'intact';
import type {Timepicker} from './';
import type {useFormats} from './useFormats';
import {last} from '../utils';
import {useValue as useValueBase, StateValueItem, DayjsValueItem} from '../datepicker/basepicker';
import type {useDisabled} from '../datepicker/useDisabled';
import type {usePanel} from '../datepicker/usePanel';
import {NOW} from './constants';

export function useValue(
    formats: ReturnType<typeof useFormats>,
    disabled: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
) {
    const instance = useInstance() as Timepicker;
    const {value, getDayjsValue, setValue, ...rest} = useValueBase(
        formats,
        disabled,
        panel,
        function(v: StateValueItem) {
            return false;
        },
        function(v: DayjsValueItem) {
            // pop the last value when input
            // because it is a placeholder date
            value.value.pop();
            setValue(v, true);
        },
        function() {
            return 'second';
        } 
    );

    setValue(getPlaceholderDates(), false);

    instance.watch('value', value => {
        const dayjsValue = getDayjsValue(); 
        setValue(last(dayjsValue) || getPlaceholderDates(), false);
    });

    function getPlaceholderDates(): StateValueItem {
        return instance.get('range') ? [NOW, NOW] : NOW;
    }

    return {value, setValue, getDayjsValue,  ...rest};
}
