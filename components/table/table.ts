import {Component, TypeDefs} from 'intact';
import template from './table.vdt';
import {useColumns} from './useColumns';

export interface TableProps {
    data?: any[]
    fixHeader: boolean | string | number 
}

export class Table extends Component<TableProps> {
    static template = template;

    private columns = useColumns();
}
