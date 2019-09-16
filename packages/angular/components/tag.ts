import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Tag} from 'kpc/components/tag'

export const TagComponent = Intact.decorate(Tag, 'k-tag');

const components = [TagComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TagModule {}