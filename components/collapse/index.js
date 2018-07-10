import Intact from 'intact';
import template from './index.vdt';
import CollapseItem from './item';
import '../../styles/kpc.styl';
import './index.styl';

export default class Collapse extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            accordion: false,
        }
    }

    _changeValue(v) {
        const {value, accordion} = this.get();
        if (!Array.isArray(value)) {
            this.set('value', [v]);
        } else {
            const index = value.indexOf(v);
            const _value = value.slice(0);
            if (~index) {
                _value.splice(index, 1);
            } else {
                _value.push(v);
            }
            this.set('value', _value);
        }
    }

    _isActive(v) {
        const {value, accordion} = this.get();
        if (!Array.isArray(value)) return false;
        return ~value.indexOf(v);
    }
}

export {Collapse, CollapseItem};
