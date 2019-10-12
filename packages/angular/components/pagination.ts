import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Pagination} from 'kpc/components/pagination';

export const PaginationComponent = Intact.decorate(Pagination, 'k-pagination');

const components = [PaginationComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class PaginationModule {}