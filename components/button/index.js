import Intact from 'intact';
import template from './index.vdt';
import Group from './group';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            type: 'default', // primary | warning | danger
            size: 'default', // small | mini
            icon: false,
            circle: false,
            loading: false,
            disabled: false,
            fluid: false,
            htmlType: 'button',
            tagName: 'button',
            value: undefined,
            name: undefined,
            _value: undefined,
        };
    }

    _mount() {
        let parentVNode = this.parentVNode;
        if (parentVNode) {
            parentVNode = parentVNode.parentVNode;
        }
        if (parentVNode && parentVNode.tag === Group) {
            this.group = parentVNode.children;
        }
    }

    showLoading() {
        this.set('loading', true);
    }

    hideLoading() {
        this.set('loading', false);
    }

    disable() {
        this.set('disabled', true);
    }

    enable() {
        this.set('disabled', false);
    }

    _onClick(e) {
        if (this.group) {
            this.group.set('value', this.get('value'));
        }
        this.trigger('click', e);
    }
}
