import {useInstance} from 'intact';
import type {Timepicker} from './';
import {useState} from '../../hooks/useState';
import dayjs, {Dayjs} from 'dayjs';
import type {useFormats} from './useFormats';
import {isEqualArray, last} from '../utils';
import {useValue as useValueBase} from '../datepicker/useValue';
import type {useDisabled} from '../datepicker/useDisabled';
import {PanelTypes, PanelFlags, usePanel} from '../datepicker/usePanel';
import {NOW} from './constants';

export function useValue(
    formats: ReturnType<typeof useFormats>,
    disabled: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
) {
    const instance = useInstance() as Timepicker;
    const {value, ...rest} = useValueBase(formats, disabled, panel);

    value.set([NOW]);

    return {value, ...rest};
}
