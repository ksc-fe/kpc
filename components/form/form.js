import Intact from 'intact';
import template from './form.vdt';
import {methods, messages, addMethod} from './methods';

export default class Form extends Intact {
    static methods = methods; 

    static messages = messages; 

    static addMethod = addMethod;

    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            items: [],
            rules: {},
        }
    }

    getRules() {
        const rules = this.get('rules');
        const items = this.get('items');

        items.forEach(item => {
            rules[item.get('model')] = item.get('rules');
        });

        return rules;
    }

    validate() {
        const items = this.get('items');

        return Promise.all(items.map(item => item.validate())).then(values => {
            return values.every(value => value);
        });
    }

    reset() {
        const items = this.get('items');
        items.forEach(item => item.reset());
    }

    getItem(model) {
        const items = this.get('items');
        if (model === undefined) return items;
        return items.find(item => item.get('model') === model);
    }

    optional(item) {
        const value = item.get('value');
        return !Form.methods.required.call(this, value, item);
    }

    submit(e) {
        e.preventDefault();
        this.validate().then(isValid => {
            if (isValid) {
                this.trigger('submit', e, this);
            }
        });
    }
}
