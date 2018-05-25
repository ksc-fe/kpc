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
            vertical: false,
            size: 'default', // large mini small
        };
    }

    static propTypes = {
        vertical: Boolean,
    }

    _changeTab(item) {
        // if exits 'to', we don't change the value,
        // while let the page to change it by pass value
        if (!item.to) {
            this.set('value', item.value);
        } else {
            window.location.href = item.to;
        }
    }
}

export {Tabs, Tab};
