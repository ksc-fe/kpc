import {Component, TypeDefs} from 'intact';
import template from './table.vdt';
import {useColumns} from './useColumns';
import {useFixedColumns} from './useFixedColumns';
import {useSticky} from './useSticky';

export interface TableProps {
    data?: any[]
    fixHeader: boolean | string | number 
    stickHeader: boolean | string | number
}

export class Table extends Component<TableProps> {
    static template = template;

    private columns = useColumns();
    private fixedColumns = useFixedColumns(this.columns.getColumns);
    private sticky = useSticky();
}
