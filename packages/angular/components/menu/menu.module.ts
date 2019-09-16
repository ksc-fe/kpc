import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item.component';

const components = [MenuComponent, MenuItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule {}