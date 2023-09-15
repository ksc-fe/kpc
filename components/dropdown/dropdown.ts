import {
    Component,
    TypeDefs,
    createVNode as h,
    VNode,
    VNodeComponentClass,
    directClone,
    provide,
    inject,
    findDomFromVNode,
    createVNode,
    nextTick,
} from 'intact';
import {bind, isTextChildren} from '../utils';
import {EMPTY_OBJ, isFunction, noop} from 'intact-shared';
import {Options, position, Feedback} from '../position';
import {cx} from '@emotion/css';
import {DropdownMenu} from './menu';
import {useDocumentClick, containsOrEqual} from '../../hooks/useDocumentClick';
import {Portal, PortalProps} from '../portal';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {usePosition, FeedbackCallback} from './usePosition';
import type {Events} from '../types';
import { Wrapper } from '../wrapper';

export type Position = Options 
export type PositionShorthand = 'left' | 'bottom' | 'right' | 'top'

type DropdownChildren = [VNode, VNode];

export const DROPDOWN = 'Dropdown';
export const ROOT_DROPDOWN = 'RootDropdown';

export interface DropdownProps {
    trigger?: 'hover' | 'click' | 'contextmenu' | 'focus'
    disabled?: boolean
    value?: boolean
    position?: Position | 'left' | 'bottom' | 'right' | 'top'
    of?: 'self' | 'parent' | Event
    container?: PortalProps['container']
}

export interface DropdownEvents {
    shouldFocus: []
    show: []
    hide: []
    mouseenter: [MouseEvent]
    mouseleave: [MouseEvent]
    positioned: [Feedback]
}

export interface DropdownBlocks { }

const typeDefs: Required<TypeDefs<DropdownProps>> = {
    trigger: ['hover', 'click', 'contextmenu', 'focus'],
    disabled: Boolean,
    value: Boolean,
    position: [Object, 'left', 'bottom', 'right', 'top'],
    // Event is undefined in NodeJs
    of: ['self', 'parent', typeof Event === 'undefined' ? undefined : Event],
    container: [String, Function],
};

const defaults = (): Partial<DropdownProps> => ({
    trigger: 'hover',
    of: 'self',
});

const events: Events<DropdownEvents> = {
    shouldFocus: true,
    show: true,
    hide: true,
    mouseenter: true,
    mouseleave: true,
    positioned: true,
};

export class Dropdown<
    T extends DropdownProps = DropdownProps,
    E extends DropdownEvents = DropdownEvents,
    B extends DropdownBlocks = DropdownBlocks,
> extends Component<T, E, B> {
    // for intact-react, intact-vue-next and intact-vue
    static $doubleVNodes = true;

    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;
    static template = function(this: Dropdown) {
        let children = this.get('children');
        // ignore whitespaces between elements in Vue
        if ((this as any).$isVue || (this as any).$isVueNext) {
            if (Array.isArray(children)) {
                children = children.filter(child => child !== ' ');
            }
        }
        if (process.env.NODE_ENV !== 'production') {
            if (!Array.isArray(children) || children.length !== 2) {
                throw new Error(
                    'Dropdown must receive two children, ' + 
                    'one is a trigger and the another one is DropdownMenu.' +
                    (Array.isArray(children) && children.length > 2 ? ' Please check the children, maybe you should remove the whitespaces.' : '')
                );
            }
        }

        const [trigger, menu] = children as DropdownChildren;
        const props = this.initEventCallbacks(); 
        if (this.get('value')) {
            props.className = 'k-dropdown-open';
        }
    
        this.menuVNode = menu;

        return [
            h(Wrapper, props, trigger),
            h(Portal, {children: menu, container: this.get('container')})
        ];
    };

    public menuVNode: VNode | null = null;
    public dropdown: Dropdown | null = null;
    public rootDropdown: Dropdown | null = null;
    public showedDropdown: Dropdown | null = null;
    public positionHook = usePosition();

    private timer: number | undefined = undefined;

    init() {
        provide(DROPDOWN, this);
        this.dropdown = inject<Dropdown | null>(DROPDOWN, null);

        useDocumentClickForDropdown(this);
        useHideLastMenuOnShow(this);

        // is root dropdown or not
        const rootDropdown = this.rootDropdown = inject(ROOT_DROPDOWN, null);
        if (!rootDropdown) {
            provide(ROOT_DROPDOWN, this);
        }

        useShowHideEvents();

        // if disabled, always set value to false
        this.watch('disabled', disabled => {
            if (disabled) {
                this.set('value', false);
            }
        });
    }

    show(shouldFocus: boolean = false) {
        if (this.get('disabled')) return;

        clearTimeout(this.timer);
        this.set('value', true);

        if (shouldFocus) {
            nextTick(() => {
                this.focusFirst();
            });
        }
    }

    hide(immediately: boolean = false) {
        if (this.get('disabled')) return;
        if (!this.get('value')) return;

        if (immediately) {
            this.set('value', false);
        } else {
            this.timer = window.setTimeout(() => {
                this.set('value', false);
            }, 200);
        }
    }

    focusFirst() {
        this.trigger('shouldFocus');
    }

    @bind
    position(callback: FeedbackCallback = noop) {
        return this.positionHook.handle(callback);
    }

    @bind
    private onEnter(e: MouseEvent) {
        this.show();
    }

    @bind 
    private onContextMenu(e: MouseEvent) {
        e.preventDefault();
        this.set('of', e);
        this.show();
    }

    @bind 
    private onLeave(e: MouseEvent) {
        this.hide();
    }

    private initEventCallbacks() {
        const trigger = this.get('trigger');
        const props: Record<string, Function | string> = {};

        switch (trigger) {
            case 'focus':
                props['ev-focusin'] = this.onEnter;
                props['ev-focusout'] = this.onLeave;
                break;
            case 'contextmenu':
                props['ev-contextmenu'] = this.onContextMenu;
                break;
            default:
                props['ev-click'] = this.onEnter;
                if (trigger === 'hover') {
                    props['ev-mouseenter'] = this.onEnter;
                    props['ev-mouseleave'] = this.onLeave;
                }
                break;
        }

        return props;
    }
}

function useDocumentClickForDropdown(dropdown: Dropdown) {
    const elementRef = () => findDomFromVNode(dropdown.menuVNode!, true) as Element;
    const [addDocumentClick, removeDocumentClick] = useDocumentClick(elementRef, (e) => {
        // case 1: if click a trigger and its trigger type is hover, ignore it
        // case 2: if right click on a trigger and its trigger type is contextmenu, ignore it
        // case 3: if click on a trigger and its trigger type is focus, do nothing 
        // case 3: if click on sub-dropdown, we should also show the parent dropdown, so ignore it
        const trigger = dropdown.get('trigger');
        if (trigger === 'focus') return;

        const isHover = trigger === 'hover';
        if (isHover || trigger === 'contextmenu') {
            const triggerDom = findDomFromVNode(dropdown.$lastInput!, true) as Element;
            const target = e.target as Element;
            if (containsOrEqual(triggerDom, target)) {
                if (isHover) return;
                if (!isHover && e.type === 'contextmenu') return;
            }
        }

        if (isSubDropdownElement(e.target as Element, dropdown)) return;

        dropdown.hide(true);
    }, true);

    dropdown.on('show', addDocumentClick);
    dropdown.on('hide', removeDocumentClick);
}

function isSubDropdownElement(elem: Element, dropdown: Dropdown): boolean {
    const showedDropdown = dropdown.showedDropdown;
    if (!showedDropdown) return false;

    const subMenuElement = findDomFromVNode(showedDropdown.menuVNode!, true) as Element;
    if (containsOrEqual(subMenuElement, elem)) {
        return true;
    }
    return isSubDropdownElement(elem, showedDropdown);
}

function useHideLastMenuOnShow(dropdown: Dropdown) {
    const parentDropdown = dropdown.dropdown;
    dropdown.on('show', () => {
        if (parentDropdown) {
            const showed = parentDropdown.showedDropdown;
            if (showed && showed !== dropdown) {
                showed.hide(true);
            }
            parentDropdown.showedDropdown = dropdown;
        }
    });
}
