import { Component, TypeDefs, ComponentConstructor } from 'intact';
import template from './wrapper.vdt';
import { useConfigContext } from '../config';
import { useVirtualContext } from './useVirtualContext';

export interface VirtualListWrapperProps {
    tagName: string | ComponentConstructor,
}

const typeDefs: Required<TypeDefs<VirtualListWrapperProps>> = {
    tagName: String,
};

export class VirtualListWrapper extends Component<VirtualListWrapperProps> {
    static template = template;
    static typeDefs = typeDefs;

    private config = useConfigContext();
    private virtualContext = useVirtualContext();
}