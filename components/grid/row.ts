import {Component, TypeDefs} from 'intact';
import template from './row.vdt';
import {Breakpoint} from './useGutter';

export interface RowProps {
    gutter?: number | string | Gutter 
}

type Gutter = {
    [key in Breakpoint]: number | string 
}

export class Row extends Component<RowProps> {
    static template = template;


}
