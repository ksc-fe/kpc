import {Component} from 'intact';
import template from './index.vdt';

interface DemoProps {
    path: string
}

export default class extends Component<DemoProps> {
    static template = template;
}
