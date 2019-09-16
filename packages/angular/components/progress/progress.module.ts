import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ProgressComponent} from './progress.component';

const components = [ProgressComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProgressModule {}