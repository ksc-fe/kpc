import {Component} from 'intact';
import template from './index.vdt';

export class Body extends Component {
    static template = template;

    public defaultClassName = {'k-layout-body': true};
}
