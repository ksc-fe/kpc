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
            size: 'default',
            type: 'default',
            closable: false,
            _activeBarStyle: undefined,
        };
    }

    static propTypes = {
        data: Array,
        vertical: Boolean,
        size: ['large', 'default', 'small', 'mini'],
        type: ['default', 'card', 'border-card', 'no-border-card'],
        closable: Boolean,
    }

    _changeTab(item) {
        // if exits 'to', we don't change the value,
        // while let the page to change it by pass value prop
        if (!item.to) {
            this.set('value', item.value);
        } else {
            window.location.href = item.to;
        }
    }

    _mount() {
        this.on('$changed:value', this._setActiveBarStyle);
        this._setActiveBarStyle();
    }

    _setActiveBarStyle() {
        if (this.get('type') !== 'default') return;

        const vertical = this.get('vertical');
        const activeTab = this.element.querySelector('.k-tab.k-active');

        if (activeTab) {
            if (!vertical) {
                const width = activeTab.offsetWidth;
                const left = activeTab.offsetLeft;
                this.set('_activeBarStyle', {left: left + 'px', width: width + 'px'});
            } else {
                const height = activeTab.offsetHeight;
                const top = activeTab.offsetTop;
                this.set('_activeBarStyle', {top: top + 'px', height: height + 'px'});
            }
        }
    }
}

export {Tabs, Tab};
