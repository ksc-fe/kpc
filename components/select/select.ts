import {
    Component,
    provide,
    createRef,
    findDomFromVNode,
    Children,
    VNodeComponentClass,
    VNode,
    TypeDefs,
    nextTick,
    createVNode as h,
} from 'intact';
import template from './select.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {SELECT, RECORD_OPTIONS} from './constants';
import {bind, findChildren, isEmptyString} from '../utils';
import {Dropdown} from '../dropdown';
import {useRecordParent} from '../../hooks/useRecordComponent';
import {isNullOrUndefined, isStringOrNumber} from 'intact-shared';
import {Option} from './option';
import type {Input} from '../input';
import {useFilterable} from './useFilterable';
import {useLabel} from './useLabel';

export interface SelectProps {
    value?: any
    multiple?: boolean
    filterable?: boolean
    loading?: boolean
    disabled?: boolean
    name?: string
    size?: Sizes
    hideIcon?: boolean
    clearable?: boolean
    filter?: (keywords: string, props: any) => boolean 
    searchable?: boolean
    creatable?: boolean
    labelMap?: Map<any, Children> 
    card?: boolean
    fluid?: boolean
    inline?: boolean

    _show?: boolean
}

const typeDefs: Required<TypeDefs<SelectProps>> = {
    value: null,
    multiple: Boolean,
    filterable: Boolean,
    loading: Boolean,
    disabled: Boolean,
    name: String,
    size: sizes,
    hideIcon: Boolean,
    clearable: Boolean,
    filter: Function,
    searchable: Boolean,
    creatable: Boolean,
    labelMap: Map,
    card: Boolean,
    fluid: Boolean,
    inline: Boolean,

    _show: null,
};

const defaults = (): Partial<SelectProps> => ({
    size: 'default',
    labelMap: new Map(),
});

export class Select<T extends SelectProps = SelectProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public dropdownRef = createRef<Dropdown>(); 
    public filterable: ReturnType<typeof useFilterable> | null = null;
    public label: ReturnType<typeof useLabel> | null = null;

    init() {
        provide(SELECT, this);
        this.filterable = useFilterable();
        this.label = useLabel();

        this.watch('value', this.position, {presented: true});
    }

    @bind
    position() {
        const dropdown = this.dropdownRef.value!;
        if (dropdown.get('value')) {
            dropdown.position();
        }
    }

    show() {
        this.set('_show', true);
    }

    @bind
    hide() {
        this.set('_show', false);
    }

    private delete(index: number, e: MouseEvent) {
        if (this.get('disabled')) return;

        e.stopPropagation();

        const value = (this.get('value') as any[]).slice(0);
        value.splice(index, 1);
        this.set('value', value);
    }

    @bind
    private onShow() {
        const menuElement = findDomFromVNode(this.dropdownRef.value!.menuVNode!, true) as HTMLElement;
        const entity = findDomFromVNode(this.$lastInput!, true) as HTMLElement; 
        menuElement.style.minWidth = `${entity.offsetWidth}px`;
    }

    @bind
    private clear(e: MouseEvent) {
        e.stopPropagation();
        this.set('value', this.get('multiple') ? [] : '');
    }
}
