import {Component} from 'intact';
import template from './index.vdt';
import {useLayoutClassName} from './useClassName';

export class Layout extends Component {
    static template = template;
    public defaultClassName = {'k-layout': true};
    public className = useLayoutClassName();
}
