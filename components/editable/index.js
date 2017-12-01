import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            editing: false,
            value: undefined,
            validate: undefined,
            disabled: false, 
            tip: '编辑',
        };
    }

    _edit() {
        this.set('editing', true);
    }
}
