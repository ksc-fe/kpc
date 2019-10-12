import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Card, CardColumn} from 'kpc/components/card';

export const CardComponent = Intact.decorate(Card, 'k-card');
export const CardColumnComponent = Intact.decorate(CardColumn, 'k-card-column');

const components = [CardComponent, CardColumnComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CardModule {}