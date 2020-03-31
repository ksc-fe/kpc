import template from './index.vdt';
import Intact from 'intact';
import './index.styl';

export default class extends Intact {
    get template() { return template; }
    defaults() {
        return {
            rangeValue: 8
        }
    }
}
