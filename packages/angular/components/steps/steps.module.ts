import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {StepsComponent} from './steps.component';
import {StepComponent} from './step.component';

const components = [StepsComponent, StepComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class StepsModule {}