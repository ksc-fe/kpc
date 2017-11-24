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
        },

        equalTo(value, item, params) {
            const equalValue = item.form.get(`model.${params}`);
            const equalItem = item.form.getItem(params);
            if (!equalItem._hasBindEqualToCallback) {
                item._equalToCallback = () => {
                    console.log('check')
                    item.validateIfDirty();
                };
                equalItem.on('$changed:value', item._equalToCallback);
                equalItem._hasBindEqualToCallback = true;

                // remove listener when destroy or change rules
                ['$destroyed'/*, '$change:rules'*/].forEach(name => {
                    item.on(name, () => {
                        equalItem.off('$changed:value', item._equalToCallback);
                        equalItem._hasBindEqualToCallback = false;
                    });
                });
            }

            return this.optional(item) || value === equalValue;
        },
    };

    static messages = {
        required: '必须填写',
        digits: '请输入数字',
        email: '请输入正确的邮箱地址',
        equalTo: '两次输入不一致',
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
            item.validate();
        });
    }

    getItem(name) {
        const items = this.get('items');
        if (name === undefined) return items;
        return items.find(item => item.get('name') === name);
    }

    optional(item) {
        const value = item.get('value');
        return !Form.methods.required.call(this, value, item);
    }
}
