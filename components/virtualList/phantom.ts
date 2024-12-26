import { Component, TypeDefs } from 'intact';
import template from './phantom.vdt';
import { useConfigContext } from '../config';

export interface VirtualListPhantomProps {
    tagName?: string; 
}

const typeDefs: Required<TypeDefs<VirtualListPhantomProps>> = {
    tagName: String,
};

export class VirtualListPhantom extends Component<VirtualListPhantomProps> {
    static template = template;
    static typeDefs = typeDefs;

    private config = useConfigContext();
}
