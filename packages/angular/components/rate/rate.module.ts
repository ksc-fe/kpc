import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RateComponent} from './rate.component';

const components = [RateComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class RateModule {}