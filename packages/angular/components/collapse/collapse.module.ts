import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CollapseComponent} from './collapse.component';
import {CollapseItemComponent} from './collapse-item.component';

const components = [CollapseComponent, CollapseItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CollapseModule {}