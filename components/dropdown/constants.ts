import {Component} from 'intact';
import type {DropdownItem} from './item';

export interface ItemEvents {
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

export type ItemComponent = Component<{disabled: boolean}>

export const ITEM_EVENTS = 'ItemEvents';
export const MENU_KEYBOARD = 'MenuKeyboard';