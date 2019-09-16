import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TreeComponent} from './tree.component';

const components = [TreeComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TreeModule {}