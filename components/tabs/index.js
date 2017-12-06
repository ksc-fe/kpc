import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data: undefined,
            value: undefined
        };
    }

    _changeTab(item) {
        if (!item.href) {
            this.set('value', item.value);
        } 
    }
}
