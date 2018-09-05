import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {toggleArray} from '../utils';

export default class Tree extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        data: Array,
        expandedKeys: Array,
        checkbox: Boolean,
        checkedKeys: Array,
    };

    defaults() {
        return {
            data: undefined,
            expandedKeys: undefined,
            checkbox: false,
            checkedKeys: undefined,
        }
    }

    _toggleExpand(data, key, e) {
        this.set('expandedKeys', toggleArray(this.get('expandedKeys'), key));
        this.trigger('click:node', data, key, e);
    }

    _toggleCheck(data, key, e) {
        this.set('checkedKeys', toggleArray(this.get('checkedKeys'), key));
    }

    _updateChecked(node, checked) {
        // if (checked) {
            // node.
        // }
    }
}
