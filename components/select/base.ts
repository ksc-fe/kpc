import {
    Component,
    provide,
    createRef,
    Children,
    TypeDefs,
    RefObject,
} from 'intact';
import template from './base.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {SELECT} from './constants';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {bind} from '../utils';
import {Dropdown, DropdownProps} from '../dropdown';
import {State} from '../../hooks/useState';
import {useInput} from './useInput';
import {Container} from '../portal';
import {useFocusout} from './useFocusout';
import type {Events} from '../types';
import {isNullOrUndefined} from 'intact-shared';
import { useDraggable } from './useDraggble';
import { useImmutable } from './useImmutable';
import { useConfigContext } from '../config';

export interface BaseSelectProps<V, Multipe extends boolean = boolean, Attach = V | null> {
    value?: Multipe extends true ? V[] : Attach
    multiple?: Multipe 
    filterable?: boolean
    loading?: boolean
    disabled?: boolean
    name?: string
    size?: Sizes
    hideIcon?: boolean
    clearable?: boolean
    fluid?: boolean
    inline?: boolean
    placeholder?: Children
    container?: Container
    width?: string | number
    show?: boolean
    position?: DropdownProps['position']
    flat?: boolean
    nowrap?: boolean
    draggable?: boolean
    virtual?: boolean
}

export interface BaseSelectEvents {
    keydown: [KeyboardEvent]
    focusout: [FocusEvent]
    show: []
    hide: []
}

export interface BaseSelectBlocks<V> {
    value: [V, string]
    values: [V[], string[]]
    prefix: null
    suffix: null
}

const typeDefs: Required<TypeDefs<BaseSelectProps<any>>> = {
    value: null,
    multiple: Boolean,
    filterable: Boolean,
    loading: Boolean,
    disabled: Boolean,
    name: String,
    size: sizes,
    hideIcon: Boolean,
    clearable: Boolean,
    fluid: Boolean,
    inline: Boolean,
    placeholder: [String, Number],
    container: [Function, String],
    width: [String, Number],
    show: Boolean,
    position: Dropdown.typeDefs.position,
    flat: Boolean,
    nowrap: Boolean,
    draggable: Boolean,
    virtual: Boolean,
};

const defaults = (): Partial<BaseSelectProps<any>> => ({
    size: 'default',
});

const events: Events<BaseSelectEvents> = {
    keydown: true,
    focusout: true,
    show: true,
    hide: true,
};

export abstract class BaseSelect<
    T extends BaseSelectProps<any> = BaseSelectProps<any>,
    E extends BaseSelectEvents = BaseSelectEvents,
    B extends BaseSelectBlocks<any> = BaseSelectBlocks<any>,
> extends Component<T, E, B> {
    // for intact-react, intact-vue-next and intact-vue
    static $doubleVNodes = true;

    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    public dropdownRef = createRef<Dropdown>(); 
    public input = useInput(this.resetKeywords);
    private focusout = useFocusout();
    private draggable = useDraggable();
    public immutable = useImmutable();
    protected config = useConfigContext();

    init() {
        provide(SELECT, this);
        useShowHideEvents('show');

        this.watch('value', this.position, {presented: true});
    }

    protected abstract getPlaceholder(): Children
    protected abstract getLabel(): Children

    @bind
    position() {
        let dropdown = this.dropdownRef.value!;
        if (dropdown.get('value')) {
            do { dropdown.position() }
            while (dropdown = dropdown.showedDropdown!)
        }
    }

    @bind
    show() {
        this.set('show', true);
    }

    @bind
    hide() {
        this.set('show', false);
    }

    @bind
    public resetKeywords() {
        this.input.keywords.set('');
    }

    protected hasValue() {
        const {value, multiple} = this.get();
        return !isNullOrUndefined(value) && (multiple ? value.length : value !== '');
    }

    private delete(index: number, e: MouseEvent) {
        if (this.get('disabled')) return;

        e.stopPropagation();

        const value = (this.get('value') as any[]).slice(0);
        value.splice(index, 1);
        this.set('value', value);
    }

    @bind
    protected clear(e: MouseEvent) {
        e.stopPropagation();
        const {value, multiple} = this.get();
        const immutableValues = this.immutable.immutableValues.value;

        this.set('value', multiple ? (Array.isArray(value) ? value.filter(key => immutableValues.includes(key)) : []) : null);
    }

    @bind
    private onKeydown(e: KeyboardEvent) {
        this.trigger('keydown', e);
        switch (e.keyCode) {
            case 13: // enter
                this.show();
                break;
            case 9: // tab
            case 27: // esc
                this.hide();
                break;
        }
    }
}
