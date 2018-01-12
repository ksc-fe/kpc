import Intact from 'intact';
import template from './group.vdt';

export default class OptionGroup extends Intact {
    @Intact.template()
    static template = template;
}
