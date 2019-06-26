import Intact from 'intact';
import template from './item.vdt';

export default class CarouselItem extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            _isCloned: false,
            _isFirst: false,
            _isLast: false,
        };
    }

    _mount() {
        const {_parent, _isCloned, _isFirst, _isLast} = this.get();
        if (!_isCloned) {
            _parent._items.push(this);
        } else {
            if (_isFirst) {
                _parent._firstCloned = this;
            } else if (_isLast) {
                _parent._lastCloned = this;
            }
        }
    }

    _destroy() {
        const {_parent, _isCloned, _isFirst, _isLast} = this.get();
        if (!_isCloned) {
            const items = _parent._items;
            const index = items.indexOf(this);
            items.splice(index, 1);
        } else {
            if (_isFirst) {
                _parent._firstCloned = null;
            } else if (_isLast) {
                _parent._lastCloned = null;
            }
        }
    }
}
