import Intact from 'intact';
import DropdownMenu from '../dropdown/menu';
import position from '../moveWrapper/position';
import template from './content.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {findParentComponent, _$} from '../utils';

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
            okText: _$('确认'),
            cancelText: _$('取消'),

            _feedback: {},
        };
    }

    _init() {
        super._init();

        this.on('$change:value', (c, value) => {
            this.trigger(value ? 'beforeShow' : 'beforeHide', this);
        });
    }

    _mount() {
        super._mount();

        if (this.get('value')) {
            this._addDocumentClick();
        }
    }

    show() {
        // don't show if content is empty
        if (!this.get('children')) return;

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

    position() {
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
            collision: 'flipfit',
            using: (feedback) => {
                this.set('_feedback', feedback);

                if (!this.get('showArrow')) return;

                const arrow = this.refs.arrow;
                const {target, element} = feedback;
                if (feedback.horizontal === 'center') {
                    const left = target.left - element.left + target.width / 2;
                    arrow.setAttribute('style', `left: ${left}px`);
                } else if (feedback.vertical === 'middle') {
                    const top = target.top - element.top + target.height / 2;
                    arrow.setAttribute('style', `top: ${top}px`);
                } else {
                    arrow.setAttribute('style', 'display: none');
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
}


