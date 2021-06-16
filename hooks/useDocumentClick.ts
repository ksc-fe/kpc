import {RefObject, onMounted, onUnmounted} from 'intact';
import {isFunction} from 'intact-shared';

export function useDocumentClick(
    ref: RefObject<Element> | (() => RefObject<Element>),
    callback: (e: MouseEvent) => void,
    manual: boolean = false
) {
    const onDocumentClick = (e: MouseEvent) => {
        const target = e.target as Element;
        const elem = (isFunction(ref) ? ref() : ref).value!;
        if (containsOrEqual(elem, target)) return;

        callback(e);
    };

    const add = () => document.addEventListener('click', onDocumentClick);
    const remove = () => document.removeEventListener('click', onDocumentClick);

    if (!manual) {
        onMounted(add);
    }

    onUnmounted(remove);

    return [add, remove];
}

export function containsOrEqual(elem: Element, target: Element) {
    return target === elem || elem.contains(target);
}

