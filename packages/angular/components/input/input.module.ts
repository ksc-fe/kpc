import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {InputComponent} from './input.component';
import {SearchComponent} from './search.component';

const components = [InputComponent, SearchComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class InputModule {}