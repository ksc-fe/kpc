import {useInstance, Component, TypeDefs} from 'intact';
import {useState, watchState, State} from '../../hooks/useState';
import dayjs, {Dayjs, OpUnitType, QUnitType} from './dayjs';
import {findValueIndex} from './helpers';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import {isEqualArray, last, bind} from '../utils';
import {PanelFlags, usePanel} from './usePanel';
import type {BasePicker, BasePickerProps} from './basepicker';
import type { Datepicker } from '.';
import { Position, useHighlight } from './useHighlight';
import { useValue } from './useValue';
import { StateValueRange, StateValue, DayjsValueRange } from './useValueBase';

export function useConfirm(
    highlight: ReturnType<typeof useHighlight>,
    value: ReturnType<typeof useValue>,
    getValueString: ReturnType<typeof useFormats>['getValueString'],
) {
    const instance = useInstance() as Datepicker;
    let selectionState = [false, false];

    /**
     * can not use hide event to do it
     * because value will be reset to dayjsValue on hide in useValue
     */
    instance.on('$change:show', (show) => {
        if (!show) {
            reset();
            if (instance.get('range') && hasWholeRangeValue()) {
                // to fix the order
                value.updateValue();
            }
        }
    });

    instance.on('selecting', () => {
        const { type } = instance.get();
        if (type !== 'datetime') {
            onConfirm();
        }
    });

    function reset() {
        selectionState = [false, false];
    }

    function onConfirm() {
        const { multiple, range } = instance.get();
        if (range) {
            const position = highlight.position.value; 
            selectionState[position] = true;

            if (selectionState.every(state => state)) {
                if (!multiple) {
                    instance.hide(); 
                } else {
                    // update value directly on multiple mode
                    reset();
                    value.unique();
                    value.updateValue();
                }
            }

            highlight.togglePosition();
        } else {
            if (!multiple) {
                instance.hide();
            } else {
                value.unique();
            }
            value.updateValue();
        }
    }

    function hasWholeRangeValue() {
        const lastValue = last(value.value.value) as StateValueRange;
        return lastValue && lastValue.length === 2;
    }

    return { onConfirm }
}
