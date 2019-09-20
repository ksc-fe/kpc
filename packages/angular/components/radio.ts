import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Radio} from '../../../components/radio';

export const RadioComponent = Intact.decorate(Radio, 'k-radio');

const components = [RadioComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class RadioModule {}