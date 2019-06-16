import Intact from 'intact';
import template from './item.vdt';

export default class CarouselItem extends Intact {
    @Intact.template()
    static template = template;
}
