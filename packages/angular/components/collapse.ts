import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Collapse, CollapseItem} from 'kpc/components/collapse'

export const CollapseComponent = Intact.decorate(Collapse, 'k-collapse');
export const CollapseItemComponent = Intact.decorate(CollapseItem, 'k-collapse-item');

const components = [CollapseComponent, CollapseItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CollapseModule {}