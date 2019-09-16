import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Switch} from 'kpc/components/switch'

export const SwitchComponent = Intact.decorate(Switch, 'k-switch');

const components = [SwitchComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SwitchModule {}