import { Component, TypeDefs } from 'intact';
import template from './index.vdt';
import { useVirtual } from './useVirtual2';
import { Events } from '../types';
import { useConfigContext } from '../config';

export interface VirtualListProps {}

export interface VirtualListEvents {}

const typeDefs: Required<TypeDefs<VirtualListProps>> = {
    text: String,
    showMessage: Boolean,
};

// const defaults = (): Partial<VirtualListProps> => ({
//     showMessage: true,
// });

const events: Events<VirtualListEvents> = {};

export class VirtualList extends Component<VirtualListProps, VirtualListEvents> {
    static template = template;
    static typeDefs = typeDefs;
    // static defaults = defaults;
    // static events = events;

    public virtual = useVirtual();
    private config = useConfigContext();
}
