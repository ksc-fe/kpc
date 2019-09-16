import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BreadcrumbComponent} from './breadcrumb.component';
import {BreadcrumbItemComponent} from './breadcrumb-item.component';

const components = [BreadcrumbComponent, BreadcrumbItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class BreadcrumbModule {}