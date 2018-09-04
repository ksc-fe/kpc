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
    };

    defaults() {
        return {
            data: undefined,
            expandedKeys: undefined,
        }
    }

    _toggleExpand(data, key) {
        this.set('expandedKeys', toggleArray(this.get('expandedKeys'), key));
    }
}
