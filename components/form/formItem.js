import Intact from 'intact';
import template from './formItem.vdt';
import Form from './form';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            value: undefined,
            name: undefined,
            rules: {},
            isValid: undefined,
            isDirty: false,
            message: '',
            isShowLabel: true,
        }
    }

    _init() {
        this.on('$changed:value', () => {
            if (this.get('isDirty')) {
                this.validate();
            }
        });
    }

    _mount() {
        let form = this.parentVNode;
        while (form.tag !== Form) {
            form = form.parentVNode;
        }
        this.form = form = form.children;
        const model = form.get('model');
        const items = form.get('items');
        items.push(this);
    }

    getRules() {
        const formRules = this.form.get(`rules.${this.get('name')}`);
        const selfRules = this.get('rules');

        return Object.assign({}, formRules, selfRules);
    }

    validate() {
        if (!this.get('name')) return;

        const rules = this.getRules();
        let isValid = true;
        let method;
        for (let key in rules) {
            isValid = Form.methods[key].call(this.form, this.get('value'), this);
            if (!isValid) {
                method = key;
                break;
            }
        }
        this.set({
            isDirty: true,
            isValid: isValid,
            message: Form.messages[method],
        });
    }

    _focusout() {
        if (!this.form.optional(this)) {
            this.validate();
        }
    }

    _destroy() {
        const items = this.form.get('items');
        items.splice(items.indexOf(this), 1);
    }
}
