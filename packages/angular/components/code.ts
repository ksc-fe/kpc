import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Code} from '../../../@stylus/components/code';

export const CodeComponent = Intact.decorate(Code, 'k-code');

const components = [CodeComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CodeModule {}