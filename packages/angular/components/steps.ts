import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Steps, Step} from '../../../components/steps';

export const StepsComponent = Intact.decorate(Steps, 'k-steps');
export const StepComponent = Intact.decorate(Step, 'k-step');

const components = [StepsComponent, StepComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class StepsModule {}