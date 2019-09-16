import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {UploadComponent} from './upload.component';

const components = [UploadComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class UploadModule {}