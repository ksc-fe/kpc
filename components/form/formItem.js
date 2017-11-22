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
            isValid: true,
        }
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
        console.log(form);
    }

    _destroy() {
        const items = this.form.get('items');
        items.splice(items.indexOf(this), 1);
    }
}
