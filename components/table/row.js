import Intact from 'intact';
import template from './row.vdt';

// for tr $destroyed event
export default class TableRow extends Intact {
    @Intact.template()
    static template = template;

    _onClick(e) {
        this.trigger('click', e); 
    }

    _onMouseEnter(e) {
        this.trigger('mouseenter', e);
    }

    _onMouseLeave(e) {
        this.trigger('mouseleave', e);
    }
}
