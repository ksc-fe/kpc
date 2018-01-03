/**
 * Created by sylvia on 2017/10/31.
 */
import Dropdown from '../dropdown/dropdown';
import position from '../moveWrapper/position'
import template from './index.vdt';
import './index.styl'

class Tooltip extends Dropdown {

}

class TooltipContent extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        show: Boolean,
        canHover: Boolean,
    };

    defaults() {
        return {
            show: false,
            trigger: 'hover',
            canHover: false,
            positon: {},
        };
    }

    _init() {
        this.on('$changed:show', (c, value) => {
            if (value) {
                this._addDocumentClick();
                this.position();
            } else {
                this._removeDocumentClick();
            }
        });

        this._onDocumentClick = this._onDocumentClick.bind(this);
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
        position(this.refs.content.element, {
            my: 'center top+10', 
            at: 'center bottom', 
            of: this.dropdown.element,
            ...this.get('position')
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

        this.hide(true);
    }

    _destroy() {
        clearTimeout(this.timer);
        this._removeDocumentClick();
    }
}

const h = Intact.Vdt.miss.h;

function Wrapper(props, inVue) {
    let {children, content, _blocks, _context, ...rest} = props;

    if (_blocks && _blocks.content) {
        content = _blocks.content.call(_context);
    }

    const contentVNode = h(TooltipContent, {
        _context,
        children: content,
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
