import Intact from 'intact';
import template from './menu.vdt';
import './index.styl';
import '../../styles/kpc.styl';

export default class Menu extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            selectedKey: '',
        };
    }

    isExpanded(key) {
        const expandedKeys = this.get('expandedKeys');
        return expandedKeys.indexOf(key) > -1;
    }

    expand(key) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        expandedKeys.push(key);
        this.set('expandedKeys', expandedKeys);
    }

    shrink(key) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        const index = expandedKeys.indexOf(key);
        expandedKeys.splice(index, 1);
        this.set('expandedKeys', expandedKeys);
    }

    toggleExpand(key) {
        if (this.isExpanded(key)) {
            this.shrink(key);
        } else {
            this.expand(key);
        }
    }

    select(key) {
        this.set('selectedKey', key);
    }

    isSelected(key) {
        return this.get('selectedKey') === key;
    }
}
