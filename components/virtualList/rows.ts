import { Component } from 'intact';
import { useRows } from './useRows';
import template from './rows.vdt';

export interface VirtualListRowsProps {
    tagName?: string
}

export class VirtualListRows extends Component<VirtualListRowsProps> {
    static template = template;

    private rows = useRows();
}
