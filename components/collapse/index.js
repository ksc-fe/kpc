import Intact from 'intact';
import template from './index.vdt';
import CollapseItem from './item';
import '../../styles/kpc.styl';
import './index.styl';

export default class Collapse extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        accordion: Boolean,
        noBorder: Boolean,
    };

    defaults() {
        return {
            value: undefined,
            accordion: false,
            arrow: 'right', // 'right' | 'left'
            noBorder: false,
        }
    }

    _changeValue(v) {
        const {value, accordion} = this.get();
        if (!Array.isArray(value)) {
            this.set('value', [v]);
        } else {
            const index = value.indexOf(v);
            let _value = value.slice(0);
            if (~index) {
                _value.splice(index, 1);
            } else if (accordion) {
                _value = [v];
            } else {
                _value.push(v);
            }
            this.set('value', _value);
        }
    }

    _isActive(v) {
        const {value} = this.get();
        if (!Array.isArray(value)) return false;
        return ~value.indexOf(v);
    }
}

export {Collapse, CollapseItem};
