import Intact from 'intact';
import template from './form.vdt';
import {methods, messages, classNames, addMethod} from './methods';
import '../../styles/kpc.styl';
import './index.styl';

export default class Form extends Intact {
    static methods = methods;

    static messages = messages;

    static classNames = classNames;

    static addMethod = addMethod;

    @Intact.template()
    static template = template;

    static propTypes = {
        items: Array,
        rules: Object,
        labelWidth: [String, Number],
        layout: ['horizontal', 'vertical', 'inline'],
        starOnRequired: Boolean,
        size: ['default', 'small', 'mini'],
    };

    static events = {
        submit: true,
    };

    defaults() {
        return {
            items: [],
            rules: {},
            labelWidth: undefined,
            layout: 'horizontal',
            starOnRequired: false,
            size: 'default',
        }
    }

    // getRules() {
        // const rules = this.get('rules');
        // const items = this.get('items');

        // items.forEach(item => {
            // rules[item.get('model')] = item.get('rules');
        // });

        // return rules;
    // }

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
        /* istanbul ignore if */
        if (model === undefined) return items;
        return items.find(item => item.get('model') === model);
    }

    // optional(item) {
        // const value = item.get('value');
        // return !Form.methods.required.call(this, value, item);
    // }

    getFirstInvalidFormItem() {
        return this.get('items').find(item => {
            if (item.get('isValid') === false) {
                return item;
            }
        });
    }

    _submit(e) {
        e.preventDefault();
        this.submit(e);
    }

    submit(e) {
        this.validate().then(isValid => {
            if (isValid) {
                this.trigger('submit', e, this);
            }
        });
    }
}
