import {Component, TypeDefs} from 'intact';
import template from './aside.vdt';

export interface LayoutAsideProps { 
    collapse?: boolean
    fixed?: boolean
    size?: 'large' | 'default' | 'small'
}

const typeDefs: Required<TypeDefs<LayoutAsideProps>> = {
    collapse: Boolean,
    fixed: Boolean,
    size: ['large', 'default', 'small']
}

const defaults = (): Partial<LayoutAsideProps> => ({
    collapse: false,
    fixed: false,
    size: 'default'
})

export class Aside<T extends LayoutAsideProps = LayoutAsideProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
