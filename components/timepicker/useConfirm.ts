import {useInstance, Component, TypeDefs} from 'intact';
import {useState, watchState, State} from '../../hooks/useState';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {isEqualArray, last, bind} from '../utils';
import type { PanelPicker } from './panelPicker';
import { useValue } from './useValue';
import { StateValueRange, StateValue, DayjsValueRange, StateValueItem } from '../datepicker/useValueBase';
import type { useDefaultValue } from './useDefaultValue';

export function useConfirm(
    value: ReturnType<typeof useValue>,
    getValueString: ReturnType<typeof useFormats>['getValueString'],
    defaultValue: ReturnType<typeof useDefaultValue>,
) {
    const instance = useInstance() as PanelPicker;

    function onConfirm() {
        const { multiple } = instance.get();
        // if we click confirm button directly, set the value to placeholder values
        value.setValue(defaultValue.get(), false);

        if (!multiple) {
            instance.hide();
        } else {
            value.unique();
        }

        value.updateValue();
    }

    return { onConfirm }
}
