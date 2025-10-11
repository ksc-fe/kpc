import {useInstance, inject} from 'intact';
import {useRecordItem} from '../../hooks/useRecordComponent';
import {useState} from '../../hooks/useState';
import type {DropdownItem} from './item';
import { ItemEvents, MENU_KEYBOARD, MenuKeyboardMethods, ITEM_EVENTS } from './constants';

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