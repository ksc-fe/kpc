import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {useHeaderClassName} from './useClassName';


export interface LayoutHeaderProps { 
    fixed?: boolean
}

const typeDefs: Required<TypeDefs<LayoutHeaderProps>> = {
    fixed: Boolean
}

const defaults = (): Partial<LayoutHeaderProps> => ({
    fixed: false
});


export class Header<T extends LayoutHeaderProps = LayoutHeaderProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public defaultClassName = {'k-layout-header': true};
    public className = useHeaderClassName();
}


