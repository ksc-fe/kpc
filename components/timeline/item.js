import Intact from 'intact';
import template from './item.vdt';

export default class TimelineItem extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        type: ['primary', 'success', 'danger', 'warning'],
        size: ['default', 'large', 'small', 'mini']
    };

    defaults() {
        return {
            type: 'primary',
            size: 'default',
        };
    }
}
