import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Table, TableColumn} from '../../../components/table';

export const TableComponent = Intact.decorate(Table, 'k-table');
export const TableColumnComponent = Intact.decorate(TableColumn, 'k-table-column');

const components = [TableComponent, TableColumnComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TableModule {}