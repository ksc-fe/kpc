import Intact from 'intact';
import DropdownMenu from '../dropdown/menu';
import position from '../moveWrapper/position';
import template from './content.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {findParentComponent, _$, clamp} from '../utils';

const Types = Intact.Vdt.miss.Types;
const isEmptyChildren = (vNodes) => {
    if (!vNodes) return true;
    if (Array.isArray(vNodes)) {
        return vNodes.every(vNode => isEmptyChildren(vNode));
    }
    if (vNodes.type === Types.Text) {
        return !vNodes.children;
    }
};

export default class TooltipContent extends DropdownMenu {
    @Intact.template()
    static template = template;

    static propTypes = {
        ...DropdownMenu.propTypes,
        canHover: Boolean,
        showArrow: Boolean,
        position: [Object, 'left', 'bottom', 'right', 'top'],
        confirm: Boolean,
        okText: String,
        cancelText: String,
        theme: ['dark', 'light'],
        disabled: Boolean,
        always: Boolean,
        size: ['small', 'default'],
    };

    static events = {
        ...DropdownMenu.events,
        beforeShow: true,
        beforeHide: true,
        cancel: true,
        ok: true,
    };

    defaults() {
        return {
            ...super.defaults(),
            canHover: false,
            showArrow: true,
            transition: 'c-fade',
            confirm: false,
            okText: _$('确定'),
            cancelText: _$('取消'),
            theme: 'dark',
            disabled: false,
            always: false,
            size: 'default',

            _feedback: {},
        };
    }

    _init() {
        super._init();

        this.on('$change:value', (c, value) => {
            this.trigger(value ? 'beforeShow' : 'beforeHide', this);
        });
        this.on('$receive:children', (c, vNodes) => {
            this.isEmptyChildren = isEmptyChildren(vNodes);
        });
    }

    _mount() {
        super._mount();

        if (this.get('value')) {
            this.position('none');
            this._addDocumentEvents();
        }
    }

    show() {
        // don't show if content is empty
        if (this.get('disabled') || this.isEmptyChildren) return;

        clearTimeout(this.timer);
        this.set('value', true);
    }

    hide(immediately) {
        if (!immediately && (this.get('canHover') || this.get('confirm'))) {
            this.timer = setTimeout(() => {
                this.set('value', false);
            }, 200);
        } else {
            this.set('value', false);
        }
    }

    position(collision = 'flipfit') {
        let pos = this.get('position');
        if (typeof pos === 'string') {
            switch (pos) {
                case 'left':
                    pos = {my: 'right-10 center', at: 'left center'};
                    break;
                case 'bottom':
                    pos = {my: 'center top+10', at: 'center bottom'};
                    break;
                case 'right':
                    pos = {my: 'left+10 center', at: 'right center'};
                    break;
                default:
                    pos = {my: 'center bottom-10', at: 'center top'};
                    break;
            }
        }
        const element = this.refs.menu.element;
        position(element, {
            my: 'center bottom-10',
            at: 'center top',
            of: this.dropdown.element,
            collision,
            using: (feedback) => {
                this.set('_feedback', feedback);

                if (!this.get('showArrow')) return;

                const arrow = this.refs.arrow;
                const {target, element} = feedback;
                if (feedback.important === 'vertical') {
                    const arrowWidth = arrow.offsetWidth;
                    let left = target.left - element.left + target.width / 2 - arrowWidth / 2;
                    left = clamp(left, 1, element.width - 1 - arrowWidth);
                    arrow.setAttribute('style', `left: ${left}px`);
                } else {
                    const arrowHeight = arrow.offsetHeight;
                    let top = target.top - element.top + target.height / 2 - arrowHeight / 2;
                    top = clamp(top, 1, element.height - 1 - arrowHeight);
                    arrow.setAttribute('style', `top: ${top}px`);
                }
            },
            ...pos
        });
    }

    _findParentDropdownMenu() {
        return findParentComponent(TooltipContent, this, true);
    }

    _cancel() {
        this.trigger('cancel', this);
        this.hide(true);
    }

    _ok() {
        this.trigger('ok', this);
        this.hide(true);
    }

    _onDocumentClick(e) {
        if (this.get('always')) return;
        super._onDocumentClick(e);
    }

    _removeDocumentEvents() {
        // because disabled property can hide layer, so we should set the value
        // to false to let it hide also on next update with disabled is true, #443
        this.set('value', false);
        super._removeDocumentEvents();
    }
}
