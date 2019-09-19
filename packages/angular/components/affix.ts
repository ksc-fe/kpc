import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Affix} from '../../../@stylus/components/affix';

export const AffixComponent = Intact.decorate(Affix, 'k-affix');

const components = [AffixComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class AffixModule {}