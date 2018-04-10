export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            model: {
                checkbox: []
            }
        };
    }

    submit() {
        Message.success('验证通过，开始提交');
        console.log(this.get('model'));
    }

    reset() {
        this.refs.form.reset();
        console.log(this.get('model'));
    }
}