import template from './index.vdt';
import {Form} from 'components/form';

Form.addMethod('isEqual', function(value, item) {
    return this.optional(item) || value === 3;
}, '请输入3');

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            model: {}
        }
    }
}

if (module.hot) {
    module.hot.accept();
}
