import {useInstance, createRef, onMounted, nextTick} from 'intact';
import type {Input} from './';
import {useState} from '../../hooks/useState';

export function useFocus() {
    const instance = useInstance() as Input;
    const isFocus = useState(false);

    instance.on('focus', () => isFocus.set(true));
    instance.on('blur', () => isFocus.set(false));

    function focusInputOnClick(e: MouseEvent) {
        instance.focus();
    }

    return { isFocus, focusInputOnClick }; 
}
