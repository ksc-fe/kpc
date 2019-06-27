import Intact from 'intact';
import template from './index.vdt';
import CollapseItem from './item';
import '../../styles/kpc.styl';
import './index.styl';
import {toggleArray} from '../utils';

export default class Collapse extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        accordion: Boolean,
        noBorder: Boolean,
        arrow: ['right', 'left'],
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
        let _value;
        if (accordion) {
            _value = this._isActive(v) ? [] : [v];
        } else {
            _value = toggleArray(value, v);
        }
        this.set('value', _value);
    }

    _isActive(v) {
        const {value} = this.get();
        if (!Array.isArray(value)) return false;
        return ~value.indexOf(v);
    }
}

export {Collapse, CollapseItem};
