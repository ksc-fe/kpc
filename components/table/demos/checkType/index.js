export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            scheme: {a: '表头'},
            data1: [{a: '多选1'}, {a: '多选2'}],
            data2: [{a: '单选1'}, {a: '单选2'}],
            data3: [{a: '不可选1'}, {a: '不可选2'}],
        }
    }
}