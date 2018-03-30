import Intact from 'intact';
import Tab from './tab';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Tabs extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data: undefined,
            value: undefined,
        };
    }

    _changeTab(item) {
        if (this.get('v-model')) {
            this.set('value', item.value);
        }
        if (item.to) {
            window.location.href = item.to;
        } 
    }
}

export {Tabs, Tab};
