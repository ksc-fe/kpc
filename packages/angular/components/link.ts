import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Link} from 'kpc/components/link'

export const LinkComponent = Intact.decorate(Link, 'k-link');

const components = [LinkComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class LinkModule {}