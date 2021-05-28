import {
    Component,
    TypeDefs,
    createVNode as h,
    VNode,
    linkEvent,
    LinkedEvent,
    normalizeChildren,
    directClone,
} from 'intact';
import template from './index.vdt';
import {bind} from '../utils';
import {EMPTY_OBJ, isFunction} from 'intact-shared';

export interface DropdownProps {
    trigger: 'hover' | 'click'
    disabled: boolean

    _isShow: boolean
}

const typeDefs: Required<TypeDefs<DropdownProps>> = {
    trigger: ['hover', 'click'],
    disabled: Boolean,

    _isShow: Boolean,
};

const defaults: Partial<DropdownProps> = {
    trigger: 'hover',
    disabled: false,

    _isShow: false,
};

export default class Dropdown<T extends DropdownProps = DropdownProps> extends Component<DropdownProps> {
    static typeDefs = typeDefs;
    static defaults = defaults;
    static template = function(this: Dropdown) {
        const children = normalizeChildren(this.$vNode!, this.get('children'));
        if (process.env.NODE !== 'production') {
            if (!Array.isArray(children) || children.length !== 2) {
                throw new Error('Dropdown must receive two children, one is a trigger and another one is DropdownMenu');
            }
        }

        const [trigger, menu] = children as unknown as [VNode, VNode];
        const triggerProps = trigger.props || EMPTY_OBJ;
        const props: Record<string, LinkedEvent<any, MouseEvent>> = {
            'ev-click': linkEvent(triggerProps, this.show)
        };
        if (this.get('trigger') === 'hover') {
            props['ev-mouseenter'] = linkEvent(triggerProps, this.show);
            props['ev-mouseleave'] = linkEvent(triggerProps, this.hide);
        }

        const clonedTrigger = directClone(trigger);
        clonedTrigger.props = {...triggerProps, ...props};

        return [clonedTrigger, menu];
    };

    show(props: any, e: MouseEvent) {
        const type = e.type;
        const callback = props[type === 'click' ? 'ev-click' : 'ev-mouseenter'];
        if (isFunction(callback)) callback(e);

        if (this.get('disabled')) return;
    }

    hide(props: any, e: MouseEvent) {
        const mouseleave = props['ev-mouseleave'];
        if (isFunction(mouseleave)) mouseleave(e);

        if (this.get('disabled')) return;
    }
}
