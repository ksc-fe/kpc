import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Tabs, Tab} from '../../../@stylus/components/tabs';

export const TabsComponent = Intact.decorate(Tabs, 'k-tabs');
export const TabComponent = Intact.decorate(Tab, 'k-tab');

const components = [TabsComponent, TabComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule {}