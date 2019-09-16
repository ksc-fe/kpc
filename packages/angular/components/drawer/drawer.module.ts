import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {DrawerComponent} from './drawer.component';

const components = [DrawerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DrawerModule {}