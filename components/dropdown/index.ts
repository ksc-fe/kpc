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
export declare class HackDropdown extends BaseDropdown<
    DropdownProps,
    DropdownEvents,
    DropdownBlocks
> { } 
export declare class HackDropdownMenu extends BaseDropdownMenu<
    DropdownMenuProps,
    DropdownMenuEvents,
    DropdownMenuBlocks
> { }

export const Dropdown = BaseDropdown as typeof HackDropdown;
export const DropdownMenu = BaseDropdownMenu as typeof HackDropdownMenu;
