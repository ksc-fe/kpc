import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Spin} from '../../../components/spin';

export const SpinComponent = Intact.decorate(Spin, 'k-spin');

const components = [SpinComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SpinModule {}