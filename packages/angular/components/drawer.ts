import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Drawer} from '../../../@stylus/components/drawer';

export const DrawerComponent = Intact.decorate(Drawer, 'k-drawer');

const components = [DrawerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DrawerModule {}