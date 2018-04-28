import Intact from 'intact';
import template from './index.vdt';
import Group from './group';
import '../../styles/kpc.styl';
import './index.styl';

export default class Button extends Intact {
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
            tagProps: undefined,
            value: undefined,
            name: undefined,

            _value: undefined,
            _checkType: 'none',
        };
    }

    static propTypes = {
        type: String,
        size: String,
        icon: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
        fluid: Boolean,
        htmlType: String,
        tagName: [String, Function],
        name: String,
    }

    _mount() {
        let parentVNode = this.parentVNode;

        while (parentVNode && parentVNode.tag !== Group) {
            parentVNode = parentVNode.parentVNode;
        }

        if (parentVNode) {
            this.group = parentVNode.children;

            this.set({
                _checkType: this.group.get('checkType'),
                _value: this.group.get('value')
            });
        }
    }

    _beforeUpdate() {
        if (this.group) {
            this.set({
                _checkType: this.group.get('checkType'),
                _value: this.group.get('value')
            }, {silent: true});
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
        if (this.get('disabled') || this.get('loading')) {
            e.preventDefault();
            return;
        }

        if (this.group) {
            let {_checkType, value, _value} = this.get();
            if (_checkType === 'radio') {
                this.group.set('value', value);
            } else if (_checkType === 'checkbox') {
                if (!Array.isArray(_value)) {
                    _value = [];
                }
                _value = _value.slice(0);
                const index = _value.indexOf(value);
                if (!~index) {
                    _value.push(value);
                } else {
                    _value.splice(index, 1);
                }
                this.group.set('value', _value);
            }
        }
        e.component = this;
        this.trigger('click', e);
    }
}

export {Button, Group as ButtonGroup};
