import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Tip} from '../../../@stylus/components/tip';

export const TipComponent = Intact.decorate(Tip, 'k-tip');

const components = [TipComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TipModule {}