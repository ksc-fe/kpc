import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            type: 'default'
        };
    }
}
