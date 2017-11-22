import Intact from 'intact';
import template from './form.vdt';

export default class Form extends Intact {
    static methods = {
        required() {
            console.log(1);
        }
    };

    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            items: [],
            model: {},
            rules: {},
        }
    }

    _mount() {
        this.validate();
    }

    getRules() {
        const rules = this.get('rules');
        const items = this.get('items');

        items.forEach(item => {
            rules[item.get('name')] = item.get('rules');
        });

        return rules;
    }

    validate() {
        const rules = this.getRules();
        const items = this.get('items');

        items.forEach(item => {
            const value = this.get(`model.${item.get('name')}`);
            const rule = rules[item.get('name')];
            for (let key in rule) {
                Form.methods[key].call(this, value, item);
            }
            console.log(rule);
            console.log(value);
        });
    }
}
