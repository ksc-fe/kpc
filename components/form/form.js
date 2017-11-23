import Intact from 'intact';
import template from './form.vdt';

export default class Form extends Intact {
    static methods = {
        required(value) {
            return value != null && value.length > 0;
        },

        digits(value, item) {
            return this.optional(item) || /^\d+$/.test(value);
        },

        email(value, item) {
            return this.optional(item) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value); 
        }
    };

    static messages = {
        required: '必须填写',
        digits: '请输入数字',
        email: '请输入正确的邮箱地址',
    };

    static addMethod(name, method, message) {
        Form.methods[name] = method;
        Form.messages[name] = message !== undefined ? message : Form.messages[name];
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

    // _init() {
        // this.on('$changed:model', () => {
            // this.validate();
        // });
    // }

    _mount() {
        // this.validate();
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
            // const value = this.get(`model.${item.get('name')}`);
            // const rule = rules[item.get('name')];
            // for (let key in rule) {
                // Form.methods[key].call(this, value, item);
            // }
            // console.log(rule);
            // console.log(value);
            item.validate();
        });
    }

    optional(item) {
        const value = item.get('value');
        return !Form.methods.required.call(this, value, item);
    }
}
