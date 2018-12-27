export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {a: '第一行', b: '哈哈2'}, 
                {a: '第二行', b: '哈哈2'},
                {a: '第三行', b: '哈哈3'},
            ]
        }
    }
}