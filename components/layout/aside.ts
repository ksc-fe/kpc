import {Component, TypeDefs, provide, onMounted} from 'intact';

import template from './aside.vdt';

export interface AsideProps { 
    collapse?: boolean
    fixed?: boolean
    size?: 'large' | 'default' | 'small'
}

const typeDefs: Required<TypeDefs<AsideProps>> = {
    collapse: Boolean,
    fixed: Boolean,
    size: ['large', 'default', 'small']
}

const defaults = (): Partial<AsideProps> => ({
    collapse: false,
    fixed: false,
    size: 'default'
})

export class Aside<T extends AsideProps = AsideProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
