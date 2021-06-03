import {useInstance, findDomFromVNode, provide, inject, Component} from 'intact';
import {useRecordParent, useRecordItem} from '../../hooks/useRecordComponent';
import {useKeyboard} from '../../hooks/useKeyboard';

type ItemOnFocusUnfocus = {
    focus: () => void;
    unFocus: () => void;
}

enum Direction {
    Up,
    Down
}

export type MenuKeyboardMethods = {
    reset: () => void;
    focus: (item: Component) => void;
}

const RECORD_FOCUS = 'RecordFocus';
const MENU_KEYBOARD = 'MenuKeyboard';

export function useMenuKeyboard() {
    const itemOnFocusUnfocus = useRecordParent<ItemOnFocusUnfocus>(RECORD_FOCUS);
    const items = useRecordParent();
    const instance = useInstance();
    let focusIndex = -1;

    const next = (e: KeyboardEvent) => {
        e.preventDefault();
        focusByIndex(focusIndex + 1, Direction.Down);
    };

    const prev = (e: KeyboardEvent) => {
        e.preventDefault();
        focusByIndex(focusIndex - 1, Direction.Up);
    };

    const focusByIndex = (index: number, direction: Direction) => {
        const max = items.length - 1;
        index = fixIndex(index, max);

        reset();

        let i = 0;
        while (i <= max && items[index] && items[index].get('disabled')) {
            index = fixIndex(direction === Direction.Down ? index + 1 : index - 1, max);
            i++;
        }

        // all items are disabled
        if (i > max) return;

        focusItem(index);
    };

    const focusItem = (index: number) => {
        focusIndex = index;

        itemOnFocusUnfocus[index].focus();

        const item = items[index];
        const el = findDomFromVNode(item.$vNode!, true) as Element;
        const menuEl = findDomFromVNode(instance!.$vNode!, false) as Element;
        scrollToView(el, menuEl);
    };

    const reset = () => {
        const oldIndex = focusIndex;

        if (oldIndex > -1 && items[oldIndex]) {
            unFocusItem(oldIndex);
            focusIndex = -1;
        }
    };

    const unFocusItem = (oldIndex: number) => {
        itemOnFocusUnfocus[oldIndex].unFocus();
    };

    provide<MenuKeyboardMethods>(MENU_KEYBOARD, {
        reset,
        focus: (item: Component) => {
            const index = items.indexOf(item);
            focusItem(index);
        }
    });

    return useKeyboard({
        down: next,
        up: prev,
    });
}

export function useItemKeyboard(focus: () => void, unFocus: () => void) {
    useRecordItem<ItemOnFocusUnfocus>(RECORD_FOCUS, {
        focus,
        unFocus,
    });
    useRecordItem();

    return inject<MenuKeyboardMethods>(MENU_KEYBOARD)!;
}

function fixIndex(index: number, max: number) {
    if (index > max) {
        index = 0;
    } else if (index < 0) {
        index = max;
    }
    return index;
}

function scrollToView(el: Element, menuEl: Element) {
    const elRect = el.getBoundingClientRect();
    const pEl = getScrollParent(el.parentElement!, menuEl);
    const pElRect = pEl.getBoundingClientRect();
    const bottomOverflowDistance = elRect.bottom - pElRect.bottom;
    const topOverflowDistance = elRect.top - pElRect.top;

    if (bottomOverflowDistance > 0) {
        pEl.scrollTop += bottomOverflowDistance;
    } else if (topOverflowDistance < 0) {
        pEl.scrollTop += topOverflowDistance;
    }
}

function getScrollParent(node: Element, breakEl: Element): Element {
    if (node === breakEl || node.scrollHeight > node.clientHeight) return node;
    return getScrollParent(node.parentElement!, breakEl);
}
