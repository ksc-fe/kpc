import Intact from 'intact';
import {isTextChildren, findParentComponent} from '../utils';
import DropdownMenu from './menu';
import '../../styles/kpc.styl';
import './index.styl';

const {clone, Types, h} = Intact.Vdt.miss;
const _className = Intact.Vdt.utils.className;

export default class Dropdown extends Intact {
    @Intact.template()
    static template(data) {
        const vNode = data.get('children');
        const isShow = data.get('_isShow');
        const className = vNode.className || vNode.props.className;
        const extraProps = {
            className: _className({
                [className]: className,
                'k-dropdown-open': isShow,
            }),
        };
        const style = data.get('style');
        if (style) {
            extraProps.style = style;
        }

        // vNode.props = {...vNode.props, ...extraProps};
        // return vNode;
        // we need clone it again, even if we have cloned it in _saveOriginalEvents
        return clone(vNode, extraProps);
    }

    static propTypes = {
        trigger: ['hover', 'click'],
        disabled: Boolean,
    }

    defaults() {
        return {
            trigger: 'hover',
            disabled: false,

            _isShow: false,
        }
    }

    _init() {
        this.on('$receive:children', () => {
            this._saveOriginalEvents();
        }, {keep: true});
    }

    _saveOriginalEvents() {
        let {children, trigger, className, ...rest} = this.get();
        if (Array.isArray(children)) {
            children = children[0];
        }
        if (isTextChildren(children)) {
            children = h('span', rest, children, className);
        }

        // save the original event
        const originProps = {...children.props};
        let hasSaved = false;
        if (!originProps._evHasSaved) {
            if (originProps.vueVNode) {
                // for vue element
                const data = originProps.vueVNode.data;
                const on = data && data.on || {};
                originProps._evClick = on.click;
                originProps._evMouseEnter = on.mouseenter;
                originProps._evMouseLeave = on.mouseleave;
                // children.className = undefined;
            } else if (originProps.reactVNode) {
                // for react element
                const props = originProps.reactVNode.props;
                originProps._evClick = props.onClick;
                originProps._evMouseEnter = props.onMouseEnter;
                originProps._evMouseLeave = props.onMouseLeave;
            } else {
                originProps._evClick = originProps['ev-click'];
                originProps._evMouseEnter = originProps['ev-mouseenter'];
                originProps._evMouseLeave = originProps['ev-mouseleave'];
            }
            hasSaved = true;
        }
        const props = {};
        // if (trigger === 'click') {
            props['ev-click'] = this.show.bind(this, originProps._evClick);
        // } else {
        if (trigger === 'hover') {
            props['ev-mouseenter'] = this.show.bind(this, originProps._evMouseEnter);
            props['ev-mouseleave'] = this.hide.bind(this, originProps._evMouseLeave);
        }
        if (hasSaved) {
            props._evHasSaved = true;
        }
        // clone vNode, because the vNode may be used multiple times,
        // such as in vue slot, #547
        children = clone(children, props);
        // children.props = {...originProps, ...props};
        this.set('children', children, {silent: true});
    }

    _mount() {
        // add instance to dom, for menu to get it by previousSibling
        this.element._dropdown = this;
    }

    show(fn, e, isFocus) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled') || e && e._hide === this) return;

        const menu = this.menu;
        menu.__event = e;
        menu.show();

        if (isFocus) {
            menu.focusItemByIndex(0);
        }
    }

    hide(fn, e, immediately) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        const menu = this.menu;
        menu.hide(immediately);
    }
}
