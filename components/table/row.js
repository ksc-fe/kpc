import Intact from 'intact';
import template from './row.vdt';

// for tr $destroyed event
export default class extends Intact {
    get template() { return template; }
}
