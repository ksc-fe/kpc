import template from './index.vdt';
import {Form} from 'components/form';
import './index.styl';

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
                hobbies: [],
                descriptions: [''],
            }
        };
    }

    _init() {
        this.on('$change:model', (...args) => {
            console.log(args);
        });
    }

    submit() {
        console.log('submit');
    }

    reset() {
        this.refs.form.reset();
    }

    add() {
        const descriptions = this.get('model.descriptions').slice(0);
        descriptions.push('');
        this.set('model.descriptions', descriptions);
    }

    delete(index) {
        const descriptions = this.get('model.descriptions').slice(0);
        descriptions.splice(index, 1);
        this.set('model.descriptions', descriptions);
    }
}
