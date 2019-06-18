import Intact from 'intact';
import template from './item.vdt';

export default class CarouselItem extends Intact {
    @Intact.template()
    static template = template;

    _mount() {
        const {_parent} = this.get();
        _parent._items.push(this);
    }

    _destroy() {
        const items = this.get('_parent')._items;
        const index = items.indexOf(this);
        items.splice(index, 1);
    }
}
