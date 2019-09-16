import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {PaginationComponent} from './pagination.component';

const components = [PaginationComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class PaginationModule {}