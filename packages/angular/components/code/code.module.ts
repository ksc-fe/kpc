import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CodeComponent} from './code.component';

const components = [CodeComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CodeModule {}