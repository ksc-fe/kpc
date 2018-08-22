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

    async handleSubmit() {
        if (await this.refs.form.validate()) {
            console.log('验证通过，开始提交');
        } else {
            // 验证失败，我们可以获取第一条出错的FormItem
            console.log(this.refs.form.getFirstInvalidFormItem());
        }
    }

    reset() {
        this.refs.form.reset();
        console.log(this.get('model'));
    }
}