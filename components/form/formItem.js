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
        this.on('$changed:value', this.validateIfDirty);
    }

    _mount() {
        let form = this.parentVNode;
        while (form.tag !== Form) {
            form = form.parentVNode;
        }
        this.form = form = form.children;
        const items = form.get('items');
        items.push(this);
        this.set('value', this.form.get(`model.${this.get('name')}`), {silent: true});
    }

    _update() {
        this.set('value', this.form.get(`model.${this.get('name')}`));
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
            let fn = Form.methods[key];
            if (!fn) {
                console.warn(`Can not find validate method: ${key}`);
                continue;
            }
            isValid = fn.call(this.form, this.get('value'), this, rules[key]);
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

    validateIfDirty() {
        if (this.get('isDirty')) {
            this.validate();
        }
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
