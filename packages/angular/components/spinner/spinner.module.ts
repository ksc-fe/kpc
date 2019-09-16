import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SpinnerComponent} from './spinner.component';

const components = [SpinnerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SpinnerModule {}