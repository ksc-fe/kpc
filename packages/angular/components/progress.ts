import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Progress} from 'kpc/components/progress'

export const ProgressComponent = Intact.decorate(Progress, 'k-progress');

const components = [ProgressComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProgressModule {}