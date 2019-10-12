import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Badge} from 'kpc/components/badge';

export const BadgeComponent = Intact.decorate(Badge, 'k-badge');

const components = [BadgeComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class BadgeModule {}