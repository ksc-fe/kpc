import {Component, TypeDefs} from 'intact';
import template from './column.vdt';

export interface ColumnProps {
    width?: string
    center?: boolean
}

const typeDefs: Required<TypeDefs<ColumnProps>> = {
    width: String,
    center: Boolean
};

const defaults: Partial<ColumnProps> = {
    center: false
} 

export default class Column<T extends ColumnProps = ColumnProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}

