import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class Demo extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            collapse: false,
            data: Array.apply(null, {length: 100}),
        };
    }

    _toggle() {
        this.set('collapse', !this.get('collapse'));
    }
}