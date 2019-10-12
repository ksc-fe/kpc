import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Tree} from 'kpc/components/tree';

export const TreeComponent = Intact.decorate(Tree, 'k-tree');

const components = [TreeComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TreeModule {}