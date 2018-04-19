/**
 * Created by sylvia on 2017/10/31.
 */
import Intact from 'intact';
import Dropdown from '../dropdown/dropdown';
import position from '../moveWrapper/position'
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl'

class Tooltip extends Dropdown {  }

class TooltipContent extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        show: Boolean,
        canHover: Boolean,
        showArrow: Boolean,
    };

    defaults() {
        return {
            show: false,
            trigger: 'hover',
            canHover: false,
            showArrow: true,
            positon: {},
            transition: 'fade',

            _feedback: {},
        };
    }

    _init() {
        this.on('$change:show', (c, value) => {
            this.trigger(value ? 'beforeShow' : 'beforeHide', this);
        });

        this.on('$changed:show', (c, value) => {
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
        if (this.get('show')) {
            this._addDocumentClick();
        }
    }

    show() {
        clearTimeout(this.timer);
        this.set('show', true); 
    }

    hide(immediately) {
        if (!immediately && this.get('canHover')) {
            this.timer = setTimeout(() => {
                this.set('show', false);
            }, 200);
        } else {
            this.set('show', false);
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
            using: (feedback) => {
                this.set('_feedback', feedback);
            },
            ...pos
        });
    }

    _addDocumentClick() {
        if (this.get('trigger') === 'click') {
            document.addEventListener('click', this._onDocumentClick);
        }
    }

    _removeDocumentClick() {
        if (this.get('trigger') === 'click') {
            document.removeEventListener('click', this._onDocumentClick);
        }
    }

    _onDocumentClick(e) {
        const target = e.target;
        const element = this.refs.content.element;

        if (element === target || element.contains(target)) return;
        if (e._dropdown) return; 

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
        h(VueWrapper, {
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
Wrapper.propTypes = {
    canHover: Boolean,
};

class VueWrapper extends Intact {
    template(data) {
        const {className, children, ...rest} = data.get();
        return h('div', rest, children, Intact.Vdt.utils.className({
            'k-tooltip': true,
            [className]: className,
        }));
    }
}

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Tooltip};
