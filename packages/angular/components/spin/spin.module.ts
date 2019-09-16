import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SpinComponent} from './spin.component';

const components = [SpinComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SpinModule {}