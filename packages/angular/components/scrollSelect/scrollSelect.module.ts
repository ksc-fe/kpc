import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ScrollSelectComponent} from './scroll-select.component';

const components = [ScrollSelectComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class ScrollSelectModule {}