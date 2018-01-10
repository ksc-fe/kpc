import Intact from 'intact';
import template from './row.vdt';

// for tr $destroyed event
export default class TableRow extends Intact {
    get template() { return template; }
}
