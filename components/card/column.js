import Intact from 'intact';
import template from './column.vdt';

export default class CardColumn extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        width: String,
        center: Boolean,
    };

    defaults() {
        return {
            width: undefined,
            style: undefined,
            center: false,
        }
    }
}
