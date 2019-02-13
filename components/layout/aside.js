import Intact from 'intact';
import template from './index.vdt';
import {mapChildren} from '../utils';
import {Menu} from '../menu';

export default class Aside extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            _className: 'k-aside',
            collapse: false,
        };
    }

    _beforeCreate() {
        this._updateClassNames();
    }

    _beforeUpdate() {
        this._updateClassNames();
    }

    _updateClassNames() {
        const collapse = this.get('collapse');
        if (collapse) {
            this.set('_className', 'k-aside k-collapse', {silent: true});
        } else {
            this.set('_className', 'k-aside', {silent: true});
        }
        mapChildren(this.get('children'), vNode => {
            if (vNode.tag === Menu) {
                vNode.props = {...vNode.props, collapse}
            }
        });
    }
}
