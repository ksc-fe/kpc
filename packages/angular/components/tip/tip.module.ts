import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TipComponent} from './tip.component';

const components = [TipComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TipModule {}