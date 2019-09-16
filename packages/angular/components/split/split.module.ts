import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SplitComponent} from './split.component';

const components = [SplitComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SplitModule {}