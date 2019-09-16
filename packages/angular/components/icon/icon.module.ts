import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {IconComponent} from './icon.component';

const components = [IconComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class IconModule {}