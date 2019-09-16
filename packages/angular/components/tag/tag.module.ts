import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TagComponent} from './tag.component';

const components = [TagComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TagModule {}