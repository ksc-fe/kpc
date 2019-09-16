import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AffixComponent} from './affix.component';

const components = [AffixComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class AffixModule {}