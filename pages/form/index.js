import template from './index.vdt';
import {Form} from 'components/form';

Form.addMethod('isEqual', function(value, item) {
    return this.optional(item) || value == 3;
}, '请输入3');
Form.addMethod('checkName', function(value, item) {
    return this.optional(item) || new Promise((resolve, reject) => {
        setTimeout(reject, 1000, {message: `用户名 ${value} 已被占用`});
    });
});

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            model: {
                hobbies: []
            }
        };
    }

    _init() {
        this.on('$change:model', (...args) => {
            console.log(args);
        });
    }

    submit() {
        this.refs.form.validate().then(isValid => {
            console.log(isValid);
        });
    }

    reset() {
        this.refs.form.reset();
    }
}

if (module.hot) {
    module.hot.accept();
}
