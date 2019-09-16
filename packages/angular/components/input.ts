import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Input, Search} from 'kpc/components/input'

export const InputComponent = Intact.decorate(Input, 'k-input');
export const SearchComponent = Intact.decorate(Search, 'k-search');

const components = [InputComponent, SearchComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class InputModule {}