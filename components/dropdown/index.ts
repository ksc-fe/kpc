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

export type {Position as PositionOption, PositionShorthand} from './dropdown';

export type {
    DropdownProps,
    DropdownEvents,
    DropdownBlocks,
    DropdownMenuProps,
    DropdownMenuEvents,
    DropdownMenuBlocks,
};
// Don't export the generic type class, because it will break down the type inference 
// declare class _Dropdown extends BaseDropdown<
    // DropdownProps,
    // DropdownEvents,
    // DropdownBlocks
// > { } 
// declare class _DropdownMenu extends BaseDropdownMenu<
    // DropdownMenuProps,
    // DropdownMenuEvents,
    // DropdownMenuBlocks
// > { }
// export const Dropdown = BaseDropdown as typeof _Dropdown;
// export const DropdownMenu = BaseDropdownMenu as typeof _DropdownMenu;

// above codes can not be used as instance type
export class Dropdown extends BaseDropdown<
    DropdownProps,
    DropdownEvents,
    DropdownBlocks
> {
    static readonly __isDropdown = true;
}
export class DropdownMenu extends BaseDropdownMenu<
    DropdownMenuProps,
    DropdownMenuEvents,
    DropdownMenuBlocks
> {
    static readonly __isDropdownMenu = true;
}
