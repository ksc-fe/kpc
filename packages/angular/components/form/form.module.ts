import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormComponent} from './form.component';
import {FormItemComponent} from './form-item.component';

const components = [FormComponent, FormItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class FormModule {}