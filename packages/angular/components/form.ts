import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Form, FormItem} from '../../../@stylus/components/form';

export const FormComponent = Intact.decorate(Form, 'k-form');
export const FormItemComponent = Intact.decorate(FormItem, 'k-form-item');

const components = [FormComponent, FormItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class FormModule {}