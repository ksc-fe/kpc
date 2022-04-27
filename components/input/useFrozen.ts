import {useInstance, createRef, onMounted} from 'intact';
import type {Input} from './';
import {useState} from '../../hooks/useState';
import {EMPTY_OBJ, isNullOrUndefined} from 'intact-shared';

export function useFrozen() {
    const instance = useInstance() as Input;
    const inputing = useState(false);
    const originalValue = useState('');

    function startInput(e: FocusEvent) {
        inputing.set(true);
        originalValue.set((e.target as HTMLInputElement).value);
        instance.trigger('focus', e);
    }

    function endInput(e: FocusEvent & {_dispatch: boolean}) {
        // ignore dispatch event, #523
        if (e._dispatch) return;

        const propValue = (instance.$vNode.props || EMPTY_OBJ).value;
        if (!isNullOrUndefined(propValue)) {
            // set the value as the value that parent passes to it
            instance.set({value: propValue});
        }

        inputing.set(false);
        instance.trigger('blur', e);
    }

    function onInput(e: InputEvent) {
        const value = (e.target as HTMLInputElement).value;
        instance.set({value});
        originalValue.set(value);
        instance.trigger('input', e);
    }

    return {inputing, originalValue, startInput, onInput, endInput};
}
