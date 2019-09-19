import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Icon} from '../../../@stylus/components/icon';

export const IconComponent = Intact.decorate(Icon, 'k-icon');

const components = [IconComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class IconModule {}