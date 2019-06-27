import Intact from 'intact';
import Tab from './tab';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import ResizeObserver from 'resize-observer-polyfill'; 
import {nextFrame, findRouter} from '../utils';

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
            _scroll: false,
            _left: 0,
            _prev: false,
            _next: false,
        };
    }

    static propTypes = {
        data: Array,
        vertical: Boolean,
        size: ['large', 'default', 'small', 'mini'],
        type: ['default', 'card', 'border-card', 'no-border-card'],
        closable: Boolean,
    };

    static events = {
        remove: true,
    };

    _changeTab(item) {
        // if exits 'to', we don't change the value,
        // while let the page to change it by pass value prop
        if (!item.to) {
            this.set('value', item.value);
        } else if (this.$router) {
            this.$router.push(item.to);
        } else {
            window.location.href = item.to;
        }
    }

    _mount() {
        this._setActiveBarStyle();
        this._refreshScroll();

        this.on('$changed:value', () => {
            // we scroll active tab to view next frame
            // because the _scroll property updates after it 
            nextFrame(() => {
                if (this.destroyed) return;
                this._scrollActiveToView();
            });
        });

        // resize
        const ro = this.ro = new ResizeObserver(() => {
            this._refreshScroll(); 
        });
        ro.observe(this.element);

        this.$router = findRouter(this);
    }

    _refreshScroll() {
        const {vertical} = this.get();
        if (vertical) return;

        const {scroll, wrapper} = this.refs;
        const scrollWidth = scroll.offsetWidth;
        const wrapperWidth = wrapper.offsetWidth;
        this.set('_scroll', scrollWidth < wrapperWidth);
        this._setTransition();
    }

    _setTransition(_left = this.get('_left')) {
        const {vertical} = this.get();
        if (vertical) return;

        const {scroll, wrapper} = this.refs;
        const scrollWidth = scroll.offsetWidth;
        const wrapperWidth = wrapper.offsetWidth;

        let _prev = true;
        let _next = true;
        if (_left >= 0) {
            _left = 0;
            _prev = false;
        } else if (_left <= scrollWidth - wrapperWidth) {
            _left = scrollWidth - wrapperWidth;
            _next = false;
        }
        this.set({_left, _prev, _next});
    }
    
    _update(lastVNode, nextVNode) {
        this._setActiveBarStyle();
        this._refreshScroll();
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
    
    _scrollActiveToView() {
        const {vertical} = this.get();
        if (vertical) return;

        const activeTab = this.element.querySelector('.k-tab.k-active');
        if (activeTab) {
            let {_left} = this.get();
            const {scroll, wrapper} = this.refs;
            // don't use getBoundingClientRect, it has transform and will return digital number
            const activeRect = {left: activeTab.offsetLeft, width: activeTab.offsetWidth};
            const scrollRect = {width: scroll.offsetWidth};
            const wrapperRect = {left: wrapper.offsetLeft, width: wrapper.offsetWidth};
            const x = activeRect.left - wrapperRect.left;
            if (_left + x <= 0) {
                _left = -x;
            } else if (x + activeRect.width + _left > scrollRect.width) {
                _left = -x - activeRect.width + scrollRect.width; 
            }
            this.set({_left});
        } else {
            this.set('_left', 0);
        }
    }

    _remove(tab) {
        this.trigger('remove', tab.get('value'));
    }

    _prev() {
        const {_left} = this.get();
        const scrollWidth = this.refs.scroll.offsetWidth;
        this._setTransition(_left + scrollWidth);
    }

    _next() {
        const {_left} = this.get();
        const scrollWidth = this.refs.scroll.offsetWidth;
        this._setTransition(_left - scrollWidth);
    }

    _destroy() {
        this.ro.disconnect();
    }
}

export {Tabs, Tab};
