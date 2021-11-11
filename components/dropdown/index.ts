import {
    Dropdown as BaseDropdown,
    DropdownProps,
    DropdownEvents,
    DropdownBlocks,
} from './dropdown';
import {
    DropdownMenu as BaseDropdownMenu,
    DropdownMenuProps,
    DropdownMenuEvents,
    DropdownMenuBlocks,
} from './menu';
export * from './item';

export type {
    DropdownProps,
    DropdownEvents,
    DropdownBlocks,
    DropdownMenuProps,
    DropdownMenuEvents,
    DropdownMenuBlocks,
};
// Don't export the generic type class, because it will let
// the type inferring break down
declare class _Dropdown extends BaseDropdown<
    DropdownProps,
    DropdownEvents,
    DropdownBlocks
> { } 
declare class _DropdownMenu extends BaseDropdownMenu<
    DropdownMenuProps,
    DropdownMenuEvents,
    DropdownMenuBlocks
> { }

export const Dropdown = BaseDropdown as typeof _Dropdown;
export const DropdownMenu = BaseDropdownMenu as typeof _DropdownMenu;
