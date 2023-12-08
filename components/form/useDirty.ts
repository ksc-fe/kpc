import {useInstance, nextTick, createRef} from 'intact';
import type {FormItem} from './item';
import {useState, watchState} from '../../hooks/useState';
import {messages as globalMessages, classNames as globalClassNames} from './methods';
import {isFunction} from 'intact-shared';

export function useDirty(
    getValidate: () => () => any
) {
    const instance = useInstance() as FormItem;
    const isDirty = useState(false);

    if (instance.get('validateOnStart')) {
        dirty();
    }

    function onChange(e: Event) {
        dirty();
        instance.trigger('change', e);
    }

    function onFocusout(e: FocusEvent) {
        dirty();
        instance.trigger('focusout', e);
    }

    function dirty() {
        if (isDirty.value) return;

        isDirty.set(true);

        // for select, the focusout event triggers before select
        // so we put off validating it
        setTimeout(() => {
            // maybe it has been unmounted or reset
            if (instance.$unmounted || !isDirty.value) return;
            getValidate()()
        }, 100);
    }

    function reset() {
        isDirty.set(false);
    }

    return {onChange, onFocusout, isDirty, reset};
}
