import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TimepickerComponent} from './timepicker.component';

const components = [TimepickerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TimepickerModule {}