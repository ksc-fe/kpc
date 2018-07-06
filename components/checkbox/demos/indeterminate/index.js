export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

const options = ['Javascript', 'C++', 'PHP'];

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            // 必须初始化为数组
            languages: [],
            options,
        };
    }

    _toggleSelectAll(c, checked) {
        if (checked) {
            this.set('languages', options.slice(0));
        } else {
            this.set('languages', []);
        }
    }
}