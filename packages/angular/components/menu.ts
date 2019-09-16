import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Menu, MenuItem} from 'kpc/components/menu'

export const MenuComponent = Intact.decorate(Menu, 'k-menu');
export const MenuItemComponent = Intact.decorate(MenuItem, 'k-menu-item');

const components = [MenuComponent, MenuItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule {}