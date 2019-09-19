import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Tooltip} from '../../../@stylus/components/tooltip';

export const TooltipComponent = Intact.decorate(Tooltip, 'k-tooltip');

const components = [TooltipComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TooltipModule {}