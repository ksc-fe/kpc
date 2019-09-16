import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TransferComponent} from './transfer.component';

const components = [TransferComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TransferModule {}