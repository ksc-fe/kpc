import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TableComponent} from './table.component';
import {TableColumnComponent} from './table-column.component';

const components = [TableComponent, TableColumnComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TableModule {}