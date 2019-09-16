import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

const components = [TabsComponent, TabComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule {}