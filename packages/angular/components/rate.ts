import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Rate} from '../../../components/rate';

export const RateComponent = Intact.decorate(Rate, 'k-rate');

const components = [RateComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class RateModule {}