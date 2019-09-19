import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ScrollSelect} from '../../../@stylus/components/scrollSelect';

export const ScrollSelectComponent = Intact.decorate(ScrollSelect, 'k-scroll-select');

const components = [ScrollSelectComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class ScrollSelectModule {}