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
import {bind, findChildren} from '../utils';
import {Dropdown} from '../dropdown';
import {useRecordParent} from '../../hooks/useRecordComponent';
import {isNullOrUndefined} from 'intact-shared';
import {Option} from './option';
import type {Input} from '../input';

export interface SelectProps {
    value?: any
    multiple?: boolean
    filterable?: boolean
    loading?: boolean
    disabled?: boolean
    name?: string
    keywords?: string
    size?: Sizes
    hideIcon?: boolean
    clearable?: boolean
    filter?: (keywords: string | undefined | null, props: any) => boolean 
    searchable?: boolean
    creatable: boolean

    _show: boolean
}

const typeDefs: Required<TypeDefs<SelectProps>> = {
    value: null,
    multiple: Boolean,
    filterable: Boolean,
    loading: Boolean,
    disabled: Boolean,
    name: String,
    keywords: String,
    size: sizes,
    hideIcon: Boolean,
    clearable: Boolean,
    filter: Function,
    searchable: Boolean,
    creatable: Boolean,

    _show: null,
};

const defaults = (): Partial<SelectProps> => ({
    size: 'default',
});

export class Select<T extends SelectProps = SelectProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public dropdownRef = createRef<Dropdown>(); 
    private inputRef = createRef<Input>();
    private options: Option[] = [];

    init() {
        provide(SELECT, this);
        this.options = useRecordParent(RECORD_OPTIONS);

        this.watch('value', this.position, {presented: true});
    }

    @bind
    position() {
        const dropdown = this.dropdownRef.value!;
        if (dropdown.get('value')) {
            dropdown.position();
        }
    }

    resetSearch() {
        this.set('keywords', undefined);
    }

    focusInput() {
        if (this.get('filterable')) {
            this.inputRef.value!.focus();
        }
    }

    private getLabel(menuVNode: VNodeComponentClass) {
        const {value, multiple, creatable} = this.get();
        const children = menuVNode.props!.children;

        if (isNullOrUndefined(value)) return;

        if (!multiple) {
            return getLabel(children, value);
        } else {
            const labels: Children[] = [];
            value.forEach((value: any) => {
                const label = getLabel(children, value);
                if (!isNullOrUndefined(label)) {
                    labels.push(label);
                }
            });

            return labels;
        }
    }

    private delete(index: number, e: MouseEvent) {
        if (this.get('disabled')) return;

        e.stopPropagation();

        const value = (this.get('value') as any[]).slice(0);
        value.splice(index, 1);
        this.set('value', value);

        this.focusInput();
    }

    @bind
    private onShow() {
        const menuElement = findDomFromVNode(this.dropdownRef.value!.menuVNode!, true) as HTMLElement;
        const entity = findDomFromVNode(this.$lastInput!, true) as HTMLElement; 
        menuElement.style.minWidth = `${entity.offsetWidth}px`;

        this.focusInput();
    }

    @bind
    private onDropdownChangeShow(show: boolean) {
        this.set('_show', show);
        if (show) {
            if (this.get('keywords') !== this.get('value')) {
                this.resetSearch();
            }
        }
        // const {keywords, creatable} = this.get();
        // if (creatable && !isNullOrUndefined(keywords)) {
            // this.set('value', keywords);
        // }
    }

    @bind
    private clear(e: MouseEvent) {
        e.stopPropagation();
        this.set('value', this.get('multiple') ? [] : '');
    }

    @bind
    private onSearch(e: InputEvent) {
        const value = (e.target as HTMLInputElement).value.trim();
        if (this.get('creatable')) {
            // this.children = [h(Option, {value, label: value}), this.get('children')];
        }
        this.set('keywords', value); 
        // const dropdown = this.dropdownRef.value!;
        // always show menu on searching
        // dropdown.show(true);
        // the position may be flip, and the select input height may change height too,
        // so we should reset the position
        nextTick(() => {
            this.position();
        });
    }
}

function getLabel(children: Children, value: any) {
    let label: Children = null;
    findChildren(children, (vNode) => {
        if ((vNode as VNodeComponentClass).tag === Option) {
            const props = (vNode as VNodeComponentClass).props;
            if (isNullOrUndefined(props)) return false;
            if (props.value === value) {
                label = props.label;
                if (isNullOrUndefined(label)) {
                    label = props.children;
                }
                return true;
            }
        }
        return false;
    });

    return label;
}
