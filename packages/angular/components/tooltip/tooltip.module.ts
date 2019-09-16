import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TooltipComponent} from './tooltip.component';

const components = [TooltipComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TooltipModule {}