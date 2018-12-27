export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 


export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data1: [{a: '赋默认值选中'}, {a: '不选中'}],
            data2: [{text: '选中', id: 'yes'}, {text: '不选中', id: 'no'}],
            data3: [{a: '赋默认值选中'}, {a: '不选中'}, {a: '赋默认值选中，可设置多个'}],
        }
    }

    setRowKey(value, index) {
        return value.id;
    }
}