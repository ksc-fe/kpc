import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {DropdownComponent} from './dropdown.component';
import {DropdownMenuComponent} from './dropdown-menu.component';
import {DropdownItemComponent} from './dropdown-item.component';

const components = [DropdownComponent, DropdownMenuComponent, DropdownItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DropdownModule {}