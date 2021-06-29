import {
    useInstance,
    nextTick,
    createVNode as h,
    Children,
    VNode,
    VNodeComponentClass,
    directClone,
    createRef,
    Props,
} from 'intact';
import {useState} from '../../hooks/useState';
import type {Select, SelectProps} from './select';
import {Option, OptionProps} from './option';
import {OptionGroup, OptionGroupProps} from './group';
import {isNullOrUndefined, EMPTY_OBJ, isStringOrNumber} from 'intact-shared';
import {getTextByChildren, mapChildren, isComponentVNode} from '../utils';
import type {Input} from '../input';

export function useInput() {
    const component = useInstance() as Select;
    const keywords = useState('');
    const inputRef = createRef<Input>();

    function onInput(value: string) {
        keywords.set(value.trim());

        const dropdown = component.dropdownRef.value!;
        // the position may be flip, and the select input height may change height too,
        // so we should reset the position
        nextTick(() => {
            dropdown.focusFirst();
            dropdown.position();
        });
    }

    function resetKeywords() {
        keywords.set('');
    }

    // if menu showed and value changed on multiple mode
    // focus the input
    function focusInput() {
        if (component.get('filterable')) {
            inputRef.value!.focus();
        }
    }

    component.on('$changed:_show', show => {
        if (show) {
            focusInput();
            resetKeywords();
        } else if (component.get('multiple')) {
            resetKeywords();
        }
    });
    component.on('$changed:value', () => {
        const {multiple, filterable} = component.get();
        if (multiple && filterable) {
            focusInput();
            resetKeywords();
        }
    });

    return {onInput, keywords, inputRef};
}
