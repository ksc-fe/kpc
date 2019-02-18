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
            selectedKey: '3-1',
            collapse: false,
        };
    }

    _toggle() {
        this.set('collapse', !this.get('collapse'));
    }
}