import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RadioComponent} from './radio.component';

const components = [RadioComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class RadioModule {}