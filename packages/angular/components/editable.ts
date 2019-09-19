import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Editable} from '../../../@stylus/components/editable';

export const EditableComponent = Intact.decorate(Editable, 'k-editable');

const components = [EditableComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class EditableModule {}