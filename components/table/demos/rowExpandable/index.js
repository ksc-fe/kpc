export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            data: [
                {name: 'Javey', email: 'jiawei23716@sina.com'}, 
                {name: 'Jiawei', email: 'zoujiawei@gmail.com'}
            ],
        };
    }

    toggleExpand(data, index) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        const i = expandedKeys.indexOf(index);
        if (i > -1) {
            expandedKeys.splice(i, 1);
        } else {
            expandedKeys.push(index);
        }
        this.set('expandedKeys', expandedKeys);
    }
}