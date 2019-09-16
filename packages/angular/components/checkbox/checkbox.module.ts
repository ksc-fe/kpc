import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CheckboxComponent} from './checkbox.component';

const components = [CheckboxComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CheckboxModule {}