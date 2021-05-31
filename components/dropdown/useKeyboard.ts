import {Component, getCurrentInstance, onUnmounted, RefObject, findDomFromVNode} from 'intact';
import {useRecordParent, useRecordItem, ComponentSupportRecord} from '../../hooks/useRecordComponent';
import {useKeyboard} from '../../hooks/useKeybord';

interface ComponentUseMenuKeyboard extends ComponentSupportRecord<ComponentUseItemKeyboard> {
    focusIndex: number
}

interface ComponentUseItemKeyboard extends Component {
    focus: () => void;
    unFocus: () => void;
}

export function useMenuKeyboard(add: (add: Function) => void, remove: (remove: Function) => void) {
    const instance = getCurrentInstance() as ComponentUseMenuKeyboard;

    const next = (e: KeyboardEvent) => {
        e.preventDefault();
        focus(instance.focusIndex + 1, 'down');
    };

    const prev = (e: KeyboardEvent) => {
        e.preventDefault();
        focus(instance.focusIndex - 1, 'up');
    };

    const focus = (index: number, direction: 'down' | 'up') => {
        const items = instance.items;
        const max = items.length - 1;
        index = fixIndex(index, max);

        reset();

        let i = 0;
        while (i <= max && items[index] && items[index].get('disabled')) {
            index = fixIndex(direction === 'down' ? index + 1 : index - 1, max);
            i++;
        }

        // all items are disabled
        if (i > max) return;

        instance.focusIndex = index;

        items[index].focus();
    };

    const reset = () => {
        const oldIndex = instance.focusIndex;
        const items = instance.items;

        if (oldIndex > -1 && items[oldIndex]) {
            items[oldIndex].unFocus();
            instance.focusIndex = -1;
        }
    };

    instance.focusIndex = -1;

    useRecordParent();

    useKeyboard({
        down: next,
        up: prev,

        onAdd: add,
        onRemove: remove,
    });
}

function fixIndex(index: number, max: number) {
    if (index > max) {
        index = 0;
    } else if (index < 0) {
        index = max;
    }
    return index;
}

export function useItemKeyboard(focus: () => void, unFocus: () => void) {
    const instance = getCurrentInstance() as ComponentUseItemKeyboard;
    const parent = useRecordItem();

    instance.focus = () => {
        focus();
        const el = findDomFromVNode(instance.$vNode!, true) as Element;
        const elRect = el.getBoundingClientRect();
        const menuEl = findDomFromVNode(parent.$vNode!, true) as Element;
        const pEl = getScrollParent(el.parentElement!, menuEl);
        const pElRect = pEl.getBoundingClientRect();
        const bottomOverflowDistance = elRect.bottom - pElRect.bottom;
        const topOverflowDistance = elRect.top - pElRect.top;

        if (bottomOverflowDistance > 0) {
            pEl.scrollTop += bottomOverflowDistance;
        } else if (topOverflowDistance < 0) {
            pEl.scrollTop += topOverflowDistance;
        }
    };

    instance.unFocus = unFocus;
}

function getScrollParent(node: Element, breakEl: Element): Element {
    if (node === breakEl || node.scrollHeight > node.clientHeight) return node;
    return getScrollParent(node.parentElement!, breakEl);
}
