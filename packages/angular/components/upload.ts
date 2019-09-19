import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Upload} from '../../../@stylus/components/upload';

export const UploadComponent = Intact.decorate(Upload, 'k-upload');

const components = [UploadComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class UploadModule {}