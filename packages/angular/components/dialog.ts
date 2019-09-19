import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Dialog} from '../../../@stylus/components/dialog';

export const DialogComponent = Intact.decorate(Dialog, 'k-dialog');

const components = [DialogComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class DialogModule {}