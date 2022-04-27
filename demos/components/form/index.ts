import {Component} from 'intact';
import template from './index.vdt';

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            model: {}
        }
    }
}
