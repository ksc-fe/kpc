import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MoveWrapper} from 'kpc/components/moveWrapper';

export const MoveWrapperComponent = Intact.decorate(MoveWrapper, 'k-move-wrapper');

const components = [MoveWrapperComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class MoveWrapperModule {}