export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

import {Form} from 'kpc/components/form';

// 添加全局规则
Form.addMethod('letter', (value, item, param) => {
    console.log('arguments', value, item, param);
    return /^[a-z|A-Z]+$/.test(value);
}, '只能输入字母');

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            descriptions: ['']
        }
    }

    add() {
        this.set('descriptions', this.get('descriptions').concat(''));
    }

    delete(index) {
        const descriptions = this.get('descriptions').slice(0);
        descriptions.splice(index, 1);
        this.set('descriptions', descriptions);
    }
}