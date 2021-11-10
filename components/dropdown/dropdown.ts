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

export type Position = Options 

type DropdownChildren = [VNode, VNode];

export const DROPDOWN = 'Dropdown';
export const ROOT_DROPDOWN = 'RootDropdown';

export interface DropdownProps {
    trigger?: 'hover' | 'click' | 'contextmenu'
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

export const typeDefs: Required<TypeDefs<DropdownProps>> = {
    trigger: ['hover', 'click', 'contextmenu'],
    disabled: Boolean,
    value: Boolean,
    position: [Object, 'left', 'bottom', 'right', 'top'],
    // Event is undefined in NodeJs
    of: ['self', 'parent', typeof Event === 'undefined' ? undefined : Event],
    container: [String, Function],
};

export const defaults = (): Partial<DropdownProps> => ({
    trigger: 'hover',
    position: {},
    of: 'self',
});

export class Dropdown<
    T extends DropdownProps = DropdownProps,
    E extends DropdownEvents = DropdownEvents,
    B extends DropdownBlocks = DropdownBlocks,
> extends Component<T, E, B> {
    static typeDefs = typeDefs;
    static defaults = defaults;
    static template = function(this: Dropdown) {
        const children = this.get('children');
        if (process.env.NODE_ENV !== 'production') {
            if (!Array.isArray(children) || children.length !== 2) {
                throw new Error(
                    'Dropdown must receive two children, ' + 
                    'one is a trigger and another one is DropdownMenu'
                );
            }
        }

        const [trigger, menu] = children as DropdownChildren;
        const triggerType = this.get('trigger');
        const props: Record<string, Function> = {};

        if (triggerType !== 'contextmenu') {
            props['ev-click'] = this.onEnter;
            if (triggerType === 'hover') {
                props['ev-mouseenter'] = this.onEnter;
                props['ev-mouseleave'] = this.onLeave;
            }
        } else {
            props['ev-contextmenu'] = this.onContextMenu;
        }

        const clonedTrigger = isTextChildren(trigger) ? 
            createVNode('span', null, trigger) :
            directClone(trigger);
        const triggerProps = this.triggerProps = trigger.props || EMPTY_OBJ;
        // add a className for opening status
        let className = trigger.className || triggerProps.className;
        className = cx({
            [className]: className,
            'k-dropdown-open': this.get('value'),
        });

        clonedTrigger.props = {...triggerProps, ...props, className};
        clonedTrigger.className = className;

        this.menuVNode = menu;

        return [
            clonedTrigger,
            // wrap the root dropdown menu to Portal to render into body
            !this.rootDropdown ?
                h(Portal, {children: menu, container: this.get('container')}) :
                menu
        ];
    };

    public menuVNode: VNode | null = null;
    public dropdown: Dropdown | null = null;
    public rootDropdown: Dropdown | null = null;
    public showedDropdown: Dropdown | null = null;
    public positionHook = usePosition();

    private timer: number | undefined = undefined;
    private triggerProps: any = null;

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
        this.callOriginalCallback(e.type === 'click' ? 'ev-click' : 'ev-mouseenter', e);

        this.show();
    }

    @bind 
    private onContextMenu(e: MouseEvent) {
        this.callOriginalCallback('ev-contextmenu', e);

        e.preventDefault();
        this.set('of', e);
        this.show();
    }

    @bind 
    private onLeave(e: MouseEvent) {
        this.callOriginalCallback('ev-mouseleave', e);

        this.hide();
    }

    private callOriginalCallback(name: string, e: MouseEvent) {
        const callback = this.triggerProps[name];
        if (isFunction(callback)) callback(e);
    }
}

function useDocumentClickForDropdown(dropdown: Dropdown) {
    const elementRef = () => findDomFromVNode(dropdown.menuVNode!, true) as Element;
    const [addDocumentClick, removeDocumentClick] = useDocumentClick(elementRef, (e) => {
        // if click an trigger and the trigger type is hover, ignore it
        if (dropdown.get('trigger') === 'hover') {
            const triggerDom = findDomFromVNode(dropdown.$lastInput!, true) as Element;
            const target = e.target as Element;
            if (containsOrEqual(triggerDom, target)) return;
        }

        dropdown.hide(true);
    }, true);

    dropdown.on('show', addDocumentClick);
    dropdown.on('hide', removeDocumentClick);
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
