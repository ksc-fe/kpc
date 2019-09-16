import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {LinkComponent} from './link.component';

const components = [LinkComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class LinkModule {}