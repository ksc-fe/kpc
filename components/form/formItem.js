import Intact from 'intact';
import template from './formItem.vdt';
import Form from './form';

export default class FormItem extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        model: String,
        rules: Object,
        // isValid: Boolean,
        isDirty: Boolean,
        // message: String, 
        messages: Object,
        classNames: Object,
        label: String,
        htmlFor: String,
        hideLabel: Boolean,
        force: Boolean,
    }

    defaults() {
        return {
            value: undefined,
            model: undefined,
            rules: {},
            isValid: undefined,
            isDirty: false,
            message: '',
            messages: {},
            classNames: {},
            errorClassName: '',
            label: undefined,
            htmlFor: undefined,
            hideLabel: false,
            force: false,
        }
    }

    _init() {
        this.initValue = this.get('value');
        this.on('$change:value', this.validateIfDirty);
        this.on('$change:rules', this.validateIfDirty);
    }

    _beforeCreate() {
        let form = this.parentVNode;
        while (form && form.tag !== Form) {
            form = form.parentVNode;
        }
        /* istanbul ignore if */
        if (!form) {
            throw new Error('FormItem must be used as the descendant of Form');
        }
        this.form = form = form.children;
        if (this.get('model')) {
            const items = form.get('items');
            items.push(this);
        }
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

    getClassName(name) {
        const defaultClassNames = Form.classNames;
        const customClassNames = this.get('classNames');
        const className = customClassNames[name] || defaultClassNames[name];

        if (typeof className === 'function') {
            const rules = this.getRules();
            return className.call(this.form, this.get('value'), this, rules[name]);
        }

        return className;
    }

    validate() {
        if (!this.get('model')) return;
        
        this._cancel();

        const rules = this.getRules();
        const promises = [];
        const keys = [];

        // check required firstly
        let required = Form.methods.required.call(this.form, this.get('value'), this);
        if (rules.required) {
            promises.push(required);
            keys.push('required');
        }

        // if the field is not empty, then check other rules
        if (required) {
            for (let key in rules) {
                const rule = rules[key];
                if (key === 'required' || rule === false) continue;
                let fn;
                if (typeof rule === 'function') {
                    fn = rule;
                } else {
                    fn = Form.methods[key];
                    /* istanbul ignore if */
                    if (!fn) {
                        console.warn(`Can not find validate method: ${key}`);
                        continue;
                    }
                }
                promises.push(fn.call(this.form, this.get('value'), this, rules[key]));
                keys.push(key);
            }
        }

        const p = this.promise = Promise.all(promises)
            .then(values => {
                for (let index = 0; index < values.length; index++) {
                    if (values[index] !== true) {
                        return [false, values[index] || this.getMessage(keys[index]), this.getClassName(keys[index])];
                    }
                }
                return [true, '', null];
            }, err => {
                let message;
                let className;
                if (typeof err === 'string') {
                    message = err;
                } else if (err) {
                    message = err.message || this.getMessage(err.name);
                    className = err.className || this.getClassName(err.name);
                }
                return [false, message, className];
            })
            .then(([isValid, message, className]) => {
                if (p.cancelled) return;
                this.set({
                    isDirty: true,
                    isValid: isValid,
                    message: message,
                    errorClassName: className,
                });
                return isValid;
            });

        return p;
    }

    validateIfDirty() {
        // if force is true, it will been validated when update
        // so we do nothing for this case
        if (this.get('force')) return;

        if (this.get('isDirty')) {
            this.validate();
        }
    }

    _beforeUpdate() {
        if (this.get('force') && this.get('isDirty')) {
            this.validate();
        }
    }
    
    reset() {
        this._cancel();

        this.set({
            isDirty: false,
            isValid: undefined,
            value: Array.isArray(this.get('value')) ?
                [].concat(this.initValue) : 
                this.initValue,
        });
    }

    _dirty() {
        if (!this.get('model')) return;
        /* istanbul ignore if */
        if (this.get('isDirty')) return;

        // for select, the focusout event triggers before select
        // so we put off validating it 
        setTimeout(() => {
            this.validate()
        }, 100);
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
        // this.reset();
    }
}
