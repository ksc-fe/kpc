import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb'

export const BreadcrumbComponent = Intact.decorate(Breadcrumb, 'k-breadcrumb');
export const BreadcrumbItemComponent = Intact.decorate(BreadcrumbItem, 'k-breadcrumb-item');

const components = [BreadcrumbComponent, BreadcrumbItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class BreadcrumbModule {}