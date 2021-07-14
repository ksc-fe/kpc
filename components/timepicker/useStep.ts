import {useInstance} from 'intact';
import type {Timepicker} from './';
import {useState} from '../../hooks/useState';
import type {useDisabled} from '../datepicker/useDisabled';

type Option = {
    value: string,
    label: string
}

export function useStep(
    {maxDate, minDate}: ReturnType<typeof useDisabled>
) {
    const instance = useInstance() as Timepicker;
    const options = useState<Option[]>([]);

    function generateOptions() {
        const {step} = instance.get();
        if (step) {
            const options: Option[] = [];

        }
    }
}
