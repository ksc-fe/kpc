import {Component} from 'intact';
import template from './index.vdt';
import {useIndexClassName} from './useClassName';

export class Layout extends Component {
    static template = template;
    public defaultClassName = {'k-layout': true};
    public className = useIndexClassName();
}

