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
            messages: {},
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
    }

    getRules() {
        const formRules = this.form.get(`rules.${this.get('model')}`);
        const selfRules = this.get('rules');

        return Object.assign({}, formRules, selfRules);
    }
    
    getMessage(name) {
        const defaultMessages = Form.messages; 
        const customMessages = this.get('messages');
        const message = customMessages[name] || defaultMessages[name];

        if (typeof message === 'function') {
            const rules = this.getRules();
            return message.call(this.form, this.get('value'), this, rules[name]);
        }

        return message;
    }

    validate() {
        if (!this.get('model')) return;
        
        this._cancel();

        const rules = this.getRules();
        const promises = [];
        const keys = [];

        // check required first
        const required = Form.methods.required.call(this.form, this.get('value'), this);
        if (rules.required) {
            promises.push(required);
            keys.push('required');
        }
        // if the field is not empty, then check other rules
        if (required) {
            for (let key in rules) {
                if (key === 'required') continue;
                let fn = Form.methods[key];
                if (!fn) {
                    console.warn(`Can not find validate method: ${key}`);
                    continue;
                }
                promises.push(fn.call(this.form, this.get('value'), this, rules[key]));
                keys.push(key);
            }
        }

        const p = this.promise = Promise.all(promises)
            .then(values => {
                for (let index = 0; index < values.length; index++) {
                    if (!values[index]) {
                        return [false, this.getMessage(keys[index])];
                    }
                }
                return [true, ''];
            }, err => {
                let message;
                if (typeof err === 'string') {
                    message = err;
                } else if (err) {
                    message = err.message || this.getMessage(err.name);
                }
                return [false, message];
            })
            .then(([isValid, message]) => {
                if (p.cancelled) return;
                this.set({
                    isDirty: true,
                    isValid: isValid,
                    message: message,
                });
                return isValid;
            });

        return p;
    }

    validateIfDirty() {
        if (this.get('isDirty')) {
            this.validate();
        }
    }
    
    reset() {
        this._cancel();

        this.set({
            isDirty: false,
            isValid: undefined,
            value: undefined,
        });
    }

    _dirty() {
        if (!this.get('model')) return;
        if (this.get('isDirty')) return;

        this.validate();
    }

    _cancel() {
        // cancel the last promise
        if (this.promise) {
            this.promise.cancelled = true;
        }
    }

    _destroy() {
        if (!this.get('model')) return;
        const items = this.form.get('items');
        items.splice(items.indexOf(this), 1);
        this.set('value', undefined);
    }
}
