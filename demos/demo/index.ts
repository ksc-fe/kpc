import {Component, createRef} from 'intact';
import template from './index.vdt';

export default class Demo extends Component {
    static template = template;

    private a = '1';

    private aRef = createRef();

    init() {
        window.instance = this;
    }

    onChangeCount(newValue: number, oldValue: number) {
        console.log(newValue, oldValue);
    }
}
