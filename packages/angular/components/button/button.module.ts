import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ButtonComponent} from './button.component';
import {ButtonGroupComponent} from './button-group.component';

const components = [ButtonComponent, ButtonGroupComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonModule {}