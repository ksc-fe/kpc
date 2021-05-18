import Dropdown from '../dropdown/dropdown';

export default class Tooltip extends Dropdown { 
    hide(fn, e, immediately) {
        if (e && this.get('always')) return;
        super.hide(fn, e, immediately);
    }
}
