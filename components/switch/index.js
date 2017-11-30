import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            name: undefined,
            on: undefined,
            off: undefined,
            value: false,
            trueValue: true,
            falseValue: false,
            width: undefined,
            height: undefined,
            size: 'default',
            disabled: false,
        }
    }
}
