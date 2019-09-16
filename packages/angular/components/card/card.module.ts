import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CardComponent} from './card.component';
import {CardColumnComponent} from './card-column.component';

const components = [CardComponent, CardColumnComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CardModule {}