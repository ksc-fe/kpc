import { useInstance } from 'intact';
import {useDisabled as useDisabledBase} from '../datepicker/useDisabled';
import type {useFormats} from './useFormats';
import {PanelFlags} from '../datepicker/usePanel';
import {isGT, isLT, last} from '../datepicker/helpers';
import type { PanelPicker } from './panelPicker';
import { StateValueItem } from '../datepicker/useValueBase';
import type { useDefaultValue } from './useDefaultValue';

export function useDisabled(
    formats: ReturnType<typeof useFormats>,
    defaultValue: ReturnType<typeof useDefaultValue>,
) {
    const instance = useInstance() as PanelPicker; 
    const {isDisabledTime, isDisabledConfirm: isDisabledConfirmBase, isDisabledValue, ...rest} = useDisabledBase(formats);

    function isDisabledTimeByStep(value: string, flag: PanelFlags) {
        return isDisabledTime(formats.createDateByValueFormat(value));
    } 

    function isDisabledConfirm(): boolean {
        return isDisabledValue(defaultValue.get());
    } 

    return {isDisabledTime, isDisabledTimeByStep, isDisabledConfirm, isDisabledValue, ...rest};
}
