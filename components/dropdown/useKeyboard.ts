import {
    onBeforeUpdate,
    onMounted,
    onUpdated,
    useInstance,
    findDomFromVNode,
    provide,
    inject,
    Component,
    Children,
    VNodeComponentClass,
    isComponentClass,
    isComponentFunction,
    hasVNodeChildren,
    hasMultipleChildren,
    VNode,
} from 'intact';
import {useRecordParent, useRecordItem} from '../../hooks/useRecordComponent';
import {useKeyboard} from '../../hooks/useKeyboard';
import {useState} from '../../hooks/useState';
import {eachChildren, isComponentVNode} from '../utils';
import {DropdownItem} from './item';
import {isStringOrNumber} from 'intact-shared';
// can not import DropdownMenu from index.ts, otherwise it will cause circle reference
// import {DropdownMenu} from './';
import {DropdownMenu} from './menu';

interface ItemEvents {
    onFocusin: () => void;
    onFocusout: () => void;
    onShowMenu: () => void;
    onHideMenu: () => void;
    onSelect: () => void;
}

export enum Direction {
    Up,
    Down
}

export type MenuKeyboardMethods = {
    reset: () => void;
    focus: (item: DropdownItem) => void;
}

type ItemComponent = Component<{disabled: boolean}>

const ITEM_EVENTS = 'ItemEvents';
const MENU_KEYBOARD = 'MenuKeyboard';

export function useMenuKeyboard() {
    const items: DropdownItem[] = [];
    const itemEvents = useRecordParent<DropdownItem, ItemEvents>(ITEM_EVENTS, true);
    const instance = useInstance()!;
    let focusIndex = -1;

    // we can't use the way that DropdownItem push itself to DropdownMenu to collect the items
    // because it can't guarantee the order
    function collect() {
        items.length = 0;

        const children = instance.$lastInput!;
        const loop = (vNode: VNode) => {
            if (isComponentVNode(vNode, DropdownItem)) {
                items.push(vNode.children!);
            } else {
                const children = vNode.children;
                if (isComponentClass(vNode)) {
                    const tag = vNode.tag;
                    if (tag !== DropdownMenu && !(tag.prototype instanceof DropdownMenu)) {
                        loop((children as Component).$lastInput!);
                    }
                } else if (isComponentFunction(vNode)) {
                    loop(children as VNode);
                } else if (hasVNodeChildren(vNode)) {
                    loop(children as VNode);
                } else if (hasMultipleChildren(vNode)) {
                    (children as VNode[]).forEach(loop);
                }
            }
        }

        loop(children);

        return children;
    }

    onMounted(collect);
    let oldFocusIndex: number;
    onBeforeUpdate(() => {
        oldFocusIndex = focusIndex;
        reset();
    });
    onUpdated(() => {
        collect();
        if (oldFocusIndex < 0) return;
        focusByIndex(oldFocusIndex, Direction.Up);
    });

    function next(e: KeyboardEvent) {
        e.preventDefault();
        focusByIndex(focusIndex + 1, Direction.Down);
    }

    function prev(e: KeyboardEvent) {
        e.preventDefault();
        focusByIndex(focusIndex - 1, Direction.Up);
    }

    function focusByIndex(index: number, direction?: Direction) {
        const max = items.length - 1;
        index = fixIndex(index, max);

        reset();

        let item = items[index];
        let i = 0;
        while (i <= max && item && item.get('disabled')) {
            index = fixIndex(direction === Direction.Down ? index + 1 : index - 1, max);
            item = items[index];
            i++;
        }

        // all items are disabled
        if (i > max) return;

        focusIndex = index;
        focusItem(item);
    }

    function focusItem(item: DropdownItem) {
        itemEvents.get(item)!.onFocusin();

        const el = findDomFromVNode(item.$lastInput!, true) as Element;
        const menuEl = findDomFromVNode(instance!.$vNode!, false) as Element;
        scrollToView(el, menuEl);
    }

    function reset() {
        const item = items[focusIndex];

        if (focusIndex > -1 && item) {
            // TODO(find bug)
            itemEvents.get(item)!.onFocusout();
            focusIndex = -1;
        }
    }

    function makeEventCall(name: keyof ItemEvents) {
        return (e: KeyboardEvent) => {
            if (focusIndex < 0) return; 
            e.preventDefault();

            itemEvents.get(items[focusIndex])![name]();
        }
    }

    provide<MenuKeyboardMethods>(MENU_KEYBOARD, {
        reset,
        focus: (item: DropdownItem) => {
            // reset();
            const index = items.indexOf(item);
            // if (index === -1) debugger
            focusIndex = index;
            focusItem(item);
        }
    });

    return [
        useKeyboard({
            down: next,
            up: prev,
            right: makeEventCall('onShowMenu'),
            left: makeEventCall('onHideMenu'),
            enter: makeEventCall('onSelect'),
        }),
        focusByIndex,
        reset,
    ] as const;
}

export function useItemKeyboard(itemEvents: Omit<ItemEvents, 'onFocusin' | 'onFocusout'>) {
    const isFocus = useState(false);
    const keyboard = inject<MenuKeyboardMethods>(MENU_KEYBOARD)!;
    const instance = useInstance() as DropdownItem;

    useRecordItem<DropdownItem, ItemEvents>(ITEM_EVENTS, instance, {
        ...itemEvents,
        onFocusin() {
            isFocus.set(true);
        },
        onFocusout() {
            isFocus.set(false);
        },
    });

    return {
        onMouseEnter(e: MouseEvent) {
            instance.trigger('mouseenter', e);
            if (instance.get('disabled')) return;
            keyboard.focus(instance);
        },

        onMouseLeave(e: MouseEvent) {
            instance.trigger('mouseleave', e);
            keyboard.reset();
            // If it is a virtual item, it needs to be reset manually because the DOM is reused.
            isFocus.set(false);
        },

        isFocus,
    }
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
