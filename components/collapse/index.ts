import {Component, TypeDefs, provide} from 'intact';
import template from './index.vdt';
import {CollapseItem} from './item';
import {toggleArray} from '../utils';
export * from './item';

type ArrowType = 'left' | 'right'

interface CollapseProps {
    value?: string[]
    accordion?: boolean
    arrow?: ArrowType
    noBorder?: boolean
}

const typeDefs: Required<TypeDefs<CollapseProps>> = {
    value: Array,
    accordion: Boolean,
    arrow: String,
    noBorder: Boolean
};

export const COLLAPSE = 'Collapse';

const defaults = (): Partial<CollapseProps> => ({
    arrow: 'right'
});

export class Collapse extends Component<CollapseProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        provide<Collapse>(COLLAPSE, this);
    }

    public changeValue(v: string) {
        const {value, accordion} = this.get();
        const _value = accordion ? 
            this.isActive(v) ? [] : [v] :
            toggleArray(value, v);
        this.set('value', _value);
    }

    private isActive(v: string): boolean {
        const {value} = this.get();
        if(!Array.isArray(value)) return false;
        return !!~value.indexOf(v);
    }
}
