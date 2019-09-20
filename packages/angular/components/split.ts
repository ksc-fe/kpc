import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Split} from '../../../components/split';

export const SplitComponent = Intact.decorate(Split, 'k-split');

const components = [SplitComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SplitModule {}