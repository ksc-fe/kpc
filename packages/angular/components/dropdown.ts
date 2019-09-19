import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Dropdown, DropdownMenu, DropdownItem} from '../../../@stylus/components/dropdown';

export const DropdownComponent = Intact.decorate(Dropdown, 'k-dropdown');
export const DropdownMenuComponent = Intact.decorate(DropdownMenu, 'k-dropdown-menu');
export const DropdownItemComponent = Intact.decorate(DropdownItem, 'k-dropdown-item');

const components = [DropdownComponent, DropdownMenuComponent, DropdownItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DropdownModule {}