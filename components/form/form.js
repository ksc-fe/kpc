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
            const equalValue = item.form.get('_context').data.get(params);
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

        maxCount(value, item, params) {
            return this.optional(item) || value.length <= params;
        },
    };

    static messages = {
        required: '必须填写',
        digits: '请输入数字',
        email: '请输入正确的邮箱地址',
        equalTo: '两次输入不一致',
        maxCount: '最多选择两项',
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
            // model: {},
            value: {},
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
        const rules = this.getRules();
        const items = this.get('items');

        items.forEach(item => {
            item.validate();
        });
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
}
