import Intact from 'intact';
import template from './formItem.vdt';
import Form from './form';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            value: undefined,
            model: undefined,
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
        if (!this.get('model')) return;

        let form = this.parentVNode;
        while (form.tag !== Form) {
            form = form.parentVNode;
        }
        this.form = form = form.children;
        const items = form.get('items');
        items.push(this);
        // const value = this.form.get(`value.${this.get('name')}`); 
        // this.set('value', value, {silent: true});
    }

    // _update() {
        // if (!this.get('name')) return;

        // this.set('value', this.form.get(`value.${this.get('name')}`));
    // }

    getRules() {
        const formRules = this.form.get(`rules.${this.get('model')}`);
        const selfRules = this.get('rules');

        return Object.assign({}, formRules, selfRules);
    }

    validate() {
        if (!this.get('model')) return;

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

    _dirty() {
        if (!this.get('model')) return;

        if (!this.form.optional(this)) {
            this.validate();
        }
    }

    _destroy() {
        if (!this.get('model')) return;
        const items = this.form.get('items');
        items.splice(items.indexOf(this), 1);
        // this.form.set(`value.${this.get('model')}`, undefined);
        this.set('value', undefined);
    }
}
