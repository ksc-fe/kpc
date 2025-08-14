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
import {bind, isTextChildren, getRestProps} from '../utils';
import {EMPTY_OBJ, isFunction, noop} from 'intact-shared';
import {Options, position, Feedback} from '../position';
import {cx} from '@emotion/css';
import {useDocumentClick, containsOrEqual} from '../../hooks/useDocumentClick';
import {Portal, PortalProps} from '../portal';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {usePosition, FeedbackCallback} from './usePosition';
import type {Events} from '../types';
import { Virtual } from '../virtual';
import { useConfigContext } from '../config';

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
    collison?: Position['collision']
    of?: 'self' | 'parent' | Event
    container?: PortalProps['container']
    alwaysShowOnClick?: boolean
}

export interface DropdownEvents {
    shouldFocus: []
    show: []
    hide: []
    mouseenter: [MouseEvent]
    mouseleave: [MouseEvent]
    click: [MouseEvent]
    contextmenu: [MouseEvent]
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
    collison: ['none', 'fit', 'flip', 'flipfit', Array],
    alwaysShowOnClick: Boolean,
};

const defaults = (): Partial<DropdownProps> => ({
    trigger: 'hover',
    of: 'self',
    value: false,
});

const events: Events<DropdownEvents> = {
    shouldFocus: true,
    show: true,
    hide: true,
    mouseenter: true,
    mouseleave: true,
    click: true,
    contextmenu: true,
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
                children = children.filter(child => child !== ' ' && child /* comment is null in vue3 */);
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

        let [trigger, menu] = children as DropdownChildren;
        /**
         * In vue-legacy, if the menu is TooltipContent, the menu will be InUsed when update,
         * so we clone it here, #954
         */
        menu = directClone(menu);

        const props = this.initEventCallbacks(); 
        let {className, value, container} = this.get();
        const { k } = this.config;
        className = cx({
            [`${k}-dropdown-open`]: value,
            [className!]: !!className,
        });
    
        this.menuVNode = menu;

        return [
            h(Virtual, {...props, ...getRestProps(this), className}, trigger),
            h(Portal, {children: menu, container})
        ];
    };

    public menuVNode: VNode | null = null;
    public dropdown: Dropdown | null = null;
    public rootDropdown: Dropdown | null = null;
    public showedDropdown: Dropdown | null = null;
    public positionHook = usePosition();
    private config = useConfigContext();

    protected timer: number | undefined = undefined;

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

        // should show parent dropdown
        const parentDropdown = this.dropdown;
        if (parentDropdown) {
            parentDropdown.show();
        }

        if (shouldFocus) {
            nextTick(() => {
                this.focusFirst();
            });
        }
    }

    hide(immediately: boolean = false) {
        if (this.get('disabled')) return;
        if (!this.get('value')) return;

        const showedDropdown = this.showedDropdown;
        if (showedDropdown) {
            showedDropdown.hide(immediately);
        }

        if (immediately) {
            this.set('value', false);
        } else {
            clearTimeout(this.timer);
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
        this.trigger(e.type as 'mouseenter', e);
    }

    @bind 
    private onContextMenu(e: MouseEvent) {
        e.preventDefault();
        this.set('of', e);
        this.show();
        this.trigger('contextmenu', e);
    }

    @bind 
    private onLeave(e: MouseEvent) {
        this.hide();
        this.trigger(e.type as 'mouseleave', e);
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
        const { trigger, alwaysShowOnClick }= dropdown.get();
        if (trigger === 'focus') return;

        const isHover = trigger === 'hover';
        if (isHover || trigger === 'contextmenu' || alwaysShowOnClick) {
            const triggerDom = findDomFromVNode(dropdown.$lastInput!, true) as Element;
            const target = e.target as Element;
            if (containsOrEqual(triggerDom, target)) {
                if (isHover || alwaysShowOnClick) return;
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
