import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SelectComponent} from './select.component';
import {OptionComponent} from './option.component';
import {OptionGroupComponent} from './option-group.component';

const components = [SelectComponent, OptionComponent, OptionGroupComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SelectModule {}