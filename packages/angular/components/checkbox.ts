import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Checkbox} from 'kpc/components/checkbox';

export const CheckboxComponent = Intact.decorate(Checkbox, 'k-checkbox');

const components = [CheckboxComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CheckboxModule {}