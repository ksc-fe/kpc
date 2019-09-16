import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {EditableComponent} from './editable.component';

const components = [EditableComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class EditableModule {}