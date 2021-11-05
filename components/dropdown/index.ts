import {Dropdown as BaseDropdown, DropdownProps} from './dropdown';
export {DropdownMenu, DropdownMenuProps} from './menu';
export * from './item';

export {DropdownProps};
// Don't export the generic type class, because it will let
// the type inferring in ts break down
export class Dropdown extends BaseDropdown<DropdownProps> { } 
