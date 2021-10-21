import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {useHeaderClassName} from './useClassName';

export interface HeaderProps { 
    fixed?: boolean
}

const typeDefs: Required<TypeDefs<HeaderProps>> = {
    fixed: Boolean
}

export class Header<T extends HeaderProps = HeaderProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;

    public defaultClassName = {'k-layout-header': true};
    public className = useHeaderClassName();
}


