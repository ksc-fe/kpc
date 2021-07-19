import {Component, TypeDefs} from 'intact';
import template from './table.vdt';
import {useColumns} from './useColumns';
import {useFixedColumns} from './useFixedColumns';

export interface TableProps {
    data?: any[]
    fixHeader: boolean | string | number 
}

export class Table extends Component<TableProps> {
    static template = template;

    private columns = useColumns();
    private fixedColumns = useFixedColumns(this.columns.getColumns);
}
