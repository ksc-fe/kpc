import {
    Component,
    TypeDefs,
    createVNode as h,
    VNode,
    linkEvent,
    LinkedEvent,
    normalizeChildren,
    directClone,
    provide,
} from 'intact';
import template from './index.vdt';
import {bind} from '../utils';
import {EMPTY_OBJ, isFunction} from 'intact-shared';
import {Options} from '../position';
import {cx} from '@emotion/css';

export type Position = Options 

export interface DropdownProps {
    trigger?: 'hover' | 'click'
    disabled?: boolean
    value?: boolean
    transition?: string,
    position?: Position
    of?: 'self' | 'parent' | Event
    container?: string | Function
}

const typeDefs: Required<TypeDefs<DropdownProps>> = {
    trigger: ['hover', 'click'],
    disabled: Boolean,
    value: Boolean,
    transition: String,
    position: Object,
    // Event is undefined in NodeJs
    of: ['self', 'parent', typeof Event === 'undefined' ? undefined : Event],
    container: [String, Function],
};

const defaults: Partial<DropdownProps> = {
    trigger: 'hover',
    disabled: false,
    value: false,
    transition: 'k-slidedown',
    position: {},
    of: 'self',
};

export class Dropdown<T extends DropdownProps = DropdownProps> extends Component<DropdownProps> {
    static typeDefs = typeDefs;
    static defaults = defaults;
    static template = function(this: Dropdown) {
        const children = this.get('children');
        if (process.env.NODE_ENV !== 'production') {
            if (!Array.isArray(children) || children.length !== 2) {
                throw new Error('Dropdown must receive two children, one is a trigger and another one is DropdownMenu');
            }
        }

        const [trigger, menu] = children as unknown as [VNode, VNode];
        const triggerProps = trigger.props || EMPTY_OBJ;
        const props: Record<string, LinkedEvent<any, MouseEvent>> = {
            'ev-click': linkEvent(triggerProps, this.onEnter)
        };
        if (this.get('trigger') === 'hover') {
            props['ev-mouseenter'] = linkEvent(triggerProps, this.onEnter);
            props['ev-mouseleave'] = linkEvent(triggerProps, this.onLeave);
        }

        const clonedTrigger = directClone(trigger);
        clonedTrigger.props = {...triggerProps, ...props};

        // add a className for opening status
        const className = trigger.className || triggerProps.className;
        clonedTrigger.className = clonedTrigger.props.className = cx({
            [className]: className,
            'k-dropdown-open': this.get('value'),
        });

        return [clonedTrigger, menu];
    };

    private timer: number | undefined = undefined;

    init() {
        provide('Dropdown', this);

        this.watch('value', (value) => {
            if (value) {
                this.trigger('show');
            } else {
                this.trigger('hide');
            }
        }, {presented: true});
    }

    show() {
        if (this.get('disabled')) return;

        clearTimeout(this.timer);
        this.set('value', true);
    }

    hide() {
        if (this.get('disabled')) return;
        if (!this.get('value')) return;

        this.timer = window.setTimeout(() => {
            this.set('value', false);
        });
    }

    @bind
    private onEnter(props: any, e: MouseEvent) {
        const callback = props[e.type === 'click' ? 'ev-click' : 'ev-mouseenter'];
        if (isFunction(callback)) callback(e);

        this.show();
    }

    @bind 
    private onLeave(props: any, e: MouseEvent) {
        const callback = props['ev-mouseleave'];
        if (isFunction(callback)) callback(e);

        this.hide();
    }
}
