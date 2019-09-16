import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BadgeComponent} from './badge.component';

const components = [BadgeComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class BadgeModule {}