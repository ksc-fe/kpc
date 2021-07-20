import {useDisabled as useDisabledBase} from '../datepicker/useDisabled';
import type {useFormats} from './useFormats';
import {PanelFlags} from '../datepicker/usePanel';

export function useDisabled(formats: ReturnType<typeof useFormats>) {
    const {isDisabledTime, ...rest} = useDisabledBase(formats);

    function isDisabledTimeByStep(value: string, flag: PanelFlags) {
        return isDisabledTime(formats.createDateByValueFormat(value), flag);
    } 

    return {isDisabledTime, isDisabledTimeByStep, ...rest};
}
