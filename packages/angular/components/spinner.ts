import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Spinner} from '../../../@stylus/components/spinner';

export const SpinnerComponent = Intact.decorate(Spinner, 'k-spinner');

const components = [SpinnerComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SpinnerModule {}