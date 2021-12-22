import {Component, TypeDefs, provide} from 'intact';
import template from './index.vdt';

type ArrowType = 'left' | 'right'

export interface CollapseProps {
    value?: string[]
    accordion?: boolean
    arrow?: ArrowType
    noBorder?: boolean
}

export interface CollapseEvents { }

const typeDefs: Required<TypeDefs<CollapseProps>> = {
    value: Array,
    accordion: Boolean,
    arrow: String,
    noBorder: Boolean
};


const defaults = (): Partial<CollapseProps> => ({
    arrow: 'right'
});

export class Footer extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        
    }
}
