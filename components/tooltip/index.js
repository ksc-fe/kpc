/**
 * Created by sylvia on 2017/10/31.
 */
import Intact from 'intact';
import Dropdown from '../dropdown/dropdown';
import position from '../moveWrapper/position';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {_$} from '../utils';

class Tooltip extends Dropdown {  }

class TooltipContent extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: Boolean,
        trigger: String,
        canHover: Boolean,
        showArrow: Boolean,
        position: [Object, String],
        transition: String,
        confirm: Boolean,
        okText: String,
        cancelText: String,
    };

    defaults() {
        return {
            value: false,
            trigger: 'hover',
            canHover: false,
            showArrow: true,
            positon: {},
            transition: 'fade',
            confirm: false,
            okText: _$('确认'),
            cancelText: _$('取消'),

            _feedback: {},
        };
    }

    _init() {
        this.on('$change:value', (c, value) => {
            this.trigger(value ? 'beforeShow' : 'beforeHide', this);
        });

        this.on('$changed:value', (c, value) => {
            if (value) {
                this._addDocumentClick();
                this.position();
                this.trigger('show', this);
            } else {
                this._removeDocumentClick();
                this.trigger('hide', this);
            }
        });
    }

    _mount() {
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
        const element = this.refs.content.element;
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
                    arrow.setAttribute('display', 'none');
                }
            },
            ...pos
        });
    }

    _addDocumentClick() {
        // no matter what the trigger is
        // we should let the layer hide when click document. #52
        // if (this.get('trigger') === 'click') {
            document.addEventListener('click', this._onDocumentClick);
        // }
    }

    _removeDocumentClick() {
        // if (this.get('trigger') === 'click') {
            document.removeEventListener('click', this._onDocumentClick);
        // }
    }

    _onDocumentClick(e) {
        const target = e.target;
        const element = this.refs.content.element;

        if (element === target || element.contains(target)) return;
        if (e._dropdown) return; 

        this.hide(true);
    }

    _cancel() {
        this.trigger('cancel', this);
        this.hide(true);
    }

    _ok() {
        this.trigger('ok', this);
        this.hide(true);
    }

    _destroy() {
        clearTimeout(this.timer);
        this._removeDocumentClick();
    }
}

const h = Intact.Vdt.miss.h;

function Wrapper(props, inVue) {
    let {children, content, _blocks, _context, ref, ...rest} = props;

    if (_blocks && _blocks.content) {
        content = _blocks.content.call(_context);
    }

    const contentVNode = h(TooltipContent, {
        _context,
        children: content,
        ref,
        ...rest
    });

    return !inVue ? 
        [
            h(Tooltip, {
                _context,
                children,
                menu: contentVNode,
                ...rest,
                className: 'k-tooltip',
            }),
            contentVNode
        ] :
        h(TooltipVueWrapper, {
            children: [
                h(Tooltip, {
                    _context,
                    children: children,
                    menu: contentVNode,
                    ...(props.trigger ? {trigger: props.trigger} : {}),
                }),
                contentVNode
            ],
            ...rest
        });
}

// for vue Boolean cast
Wrapper.propTypes = TooltipContent.propTypes;

const _className = Intact.Vdt.utils.className;
class TooltipVueWrapper extends Intact {
    template(data) {
        const {className, children, ...rest} = data.get();
        return h('div', rest, children, _className({
            'k-tooltip': true,
            [className]: className,
        }));
    }
}

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Tooltip};
