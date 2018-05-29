export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return { checked: [] };
    }

    _onSelect(c, e) {
        console.log('allowDefault', e);
    }

    _onSelectAndPreventDefault(c, e) {
        e.preventDefault();
        console.log('preventDefault', e);

        const checked = this.get('checked').slice(0);
        const index = checked.indexOf('2');
        if (index > -1) {
            checked.splice(index, 1);
        } else {
            checked.push('2');
        }
        this.set('checked', checked);
    }
}