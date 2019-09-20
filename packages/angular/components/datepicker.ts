import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Datepicker} from '../../../components/datepicker';

export const DatepickerComponent = Intact.decorate(Datepicker, 'k-datepicker');

const components = [DatepickerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DatepickerModule {}