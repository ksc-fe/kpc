import {Component, Children, VNodeComponentClass, findDomFromVNode, RefObject, provide} from 'intact';
import {DropdownItem} from './item';
import {eachChildren, isComponentVNode, bind} from '../utils';
import {useKeyboard} from '../../hooks/useKeyboard';

export enum Direction {
    Up,
    Down
}

export interface ItemEvents {
    onFocusin: () => void;
    onFocusout: () => void;
    onShowMenu: () => void;
    onHideMenu: () => void;
    onSelect: () => void;
}

export interface KeyboardProps {
    menuRef: RefObject<HTMLElement>
}

export const KEYBOARD = `Keyoard`;

export class Keyboard extends Component<KeyboardProps> {
    static template = function(this: Keyboard) {
        const {children} = this.get();

        const items: VNodeComponentClass<DropdownItem>[] = this.items = [];
        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, DropdownItem)) {
                items.push(vNode);
            }
        });

        return children;
    }

    private items: VNodeComponentClass<DropdownItem>[] = [];
    private focusIndex = -1;

    init() {
        useKeyboard({
            down: this.next,
            up: this.prev,
            right: this.makeItemEvent('onShowMenu'),
            left: this.makeItemEvent('onHideMenu'),
            enter: this.makeItemEvent('onSelect'),
        });
        provide(KEYBOARD, this);
    }

    @bind
    next(e: KeyboardEvent) {
        e.preventDefault();
        this.focusByIndex(this.focusIndex + 1, Direction.Down);
    }

    @bind
    prev(e: KeyboardEvent) {
        e.preventDefault();
        this.focusByIndex(this.focusIndex - 1, Direction.Up);
    };

    reset() {
        const index = this.focusIndex;
        const item = this.items[index];

        if (index > -1 && item) {
            item.children!.onFocusout();
            this.focusIndex = -1;
        }
    }

    focus(item: VNodeComponentClass<DropdownItem>) {
        const index = this.items.indexOf(item);
        this.focusIndex = index;
        this.focusItem(item);
    }

    private focusByIndex(index: number, direction?: Direction) {
        const items = this.items;
        const max = items.length - 1;
        index = fixIndex(index, max);

        this.reset();

        const item = items[index];
        let i = 0;
        while (i <= max && item && item.children!.get('disabled')) {
            index = fixIndex(direction === Direction.Down ? index + 1 : index - 1, max);
            i++;
        }

        // all items are disabled
        if (i > max) return;

        this.focusIndex = index;
        this.focusItem(item);
    }

    private focusItem(item: VNodeComponentClass<DropdownItem>) {
        item.children!.onFocusin();

        const el = findDomFromVNode(item, true) as Element;
        const menuEl = this.get('menuRef').value!;
        scrollToView(el, menuEl);
    }

    private makeItemEvent(name: keyof ItemEvents) {
        return (e: KeyboardEvent) => {
            if (this.focusIndex < 0) return;
            e.preventDefault();

            this.items[this.focusIndex].children![name]();
        }
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
