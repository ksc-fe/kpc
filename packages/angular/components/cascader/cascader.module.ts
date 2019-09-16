import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CascaderComponent} from './cascader.component';

const components = [CascaderComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CascaderModule {}