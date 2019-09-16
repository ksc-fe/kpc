import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Select, Option, OptionGroup} from 'kpc/components/select'

export const SelectComponent = Intact.decorate(Select, 'k-select');
export const OptionComponent = Intact.decorate(Option, 'k-option');
export const OptionGroupComponent = Intact.decorate(OptionGroup, 'k-option-group');

const components = [SelectComponent, OptionComponent, OptionGroupComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SelectModule {}