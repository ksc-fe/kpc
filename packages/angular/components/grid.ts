import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Row, Col} from 'kpc/components/grid';

export const RowComponent = Intact.decorate(Row, 'k-row');
export const ColComponent = Intact.decorate(Col, 'k-col');

const components = [RowComponent, ColComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class GridModule {}