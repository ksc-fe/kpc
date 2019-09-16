import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {DialogComponent} from './dialog.component';

const components = [DialogComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DialogModule {}