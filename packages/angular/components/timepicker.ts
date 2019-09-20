import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Timepicker} from '../../../components/timepicker';

export const TimepickerComponent = Intact.decorate(Timepicker, 'k-timepicker');

const components = [TimepickerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TimepickerModule {}