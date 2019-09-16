import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MoveWrapperComponent} from './move-wrapper.component';

const components = [MoveWrapperComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class MoveWrapperModule {}