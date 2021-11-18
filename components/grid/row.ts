import {Component, TypeDefs} from 'intact';
import template from './row.vdt';
import {useGutter} from './useGutter';
import {Value} from './constants';

export interface RowProps {
    gutter?: Value 
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
    align?: 'top' | 'bottom' | 'middle' | 'stretch' | 'baseline'
}

const typeDefs: Required<TypeDefs<RowProps>> = {
    gutter: Value,
    justify: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    align: ['top', 'bottom', 'middle', 'stretch', 'baseline'],
}

export class Row extends Component<RowProps> {
    static template = template;
    static typeDefs = typeDefs;

    private gutter = useGutter();
}
