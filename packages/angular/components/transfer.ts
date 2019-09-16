import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Transfer} from 'kpc/components/transfer'

export const TransferComponent = Intact.decorate(Transfer, 'k-transfer');

const components = [TransferComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TransferModule {}