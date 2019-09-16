import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {DatepickerComponent} from './datepicker.component';

const components = [DatepickerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DatepickerModule {}