import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Cascader} from '../../../@stylus/components/cascader';

export const CascaderComponent = Intact.decorate(Cascader, 'k-cascader');

const components = [CascaderComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CascaderModule {}