import {useInstance, nextTick, createRef} from 'intact';
import type {FormItem} from './item';
import {useState, watchState} from '../../hooks/useState';
import {messages as globalMessages, classNames as globalClassNames} from './methods';
import {isFunction} from 'intact-shared';

// enum MessageOrClassname {
    // Message,
    // ClassName,
// }

export function useError() {
    const instance = useInstance() as FormItem;
    const ellipsis = useState(false);
    const message = useState<string | undefined>(undefined);
    const errorRef = createRef<HTMLDivElement>();

    watchState(message, () => {
        nextTick(checkEllipsis);
    });

    function checkEllipsis() {
        const error = errorRef.value;
        if (!error) return;
        ellipsis.set(error.offsetWidth < error.scrollWidth);
    }

    function getErrorMessageOrClassName(type: 'messages' | 'classNames', key: string) {
        const custom = instance.get(type);
        const value = custom && custom[key] ||
            (type === 'messages' ? 
                globalMessages[key] :
                globalClassNames[key]
            );

        if (isFunction(value)) {
            const rules = instance.get('rules')!;
            return value(instance.get('value'), rules[key]);
        }
        return value;
    }

    function getErrorMessage(key: string) {
        return getErrorMessageOrClassName('messages', key);
    }

    function getErrorClassName(key: string) {
        return getErrorMessageOrClassName('classNames', key);
    }

    function reset() {
        ellipsis.set(false);
        message.set(undefined);
    }

    return {ellipsis, message, errorRef, getErrorMessage, getErrorClassName, reset};
}
