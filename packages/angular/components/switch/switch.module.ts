import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SwitchComponent} from './switch.component';

const components = [SwitchComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SwitchModule {}