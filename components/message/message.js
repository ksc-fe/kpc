import Intact from 'intact';
import template from './message.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;
}
