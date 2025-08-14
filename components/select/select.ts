import {
    findDomFromVNode,
    Children,
    TypeDefs,
} from 'intact';
import template from './select.vdt';
import {bind, eachChildren, isComponentVNode} from '../utils';
import {isNullOrUndefined} from 'intact-shared';
import {Option, OptionProps} from './option';
import {OptionGroup} from './group';
import {useFilterable} from './useFilterable';
import {useLabel} from './useLabel';
import {BaseSelect, BaseSelectProps, BaseSelectEvents, BaseSelectBlocks} from './base';
import {_$} from '../../i18n';
import {useEqualWidth} from './useEqualWidth';

export interface SelectProps<T = string, Multipe extends boolean = boolean> extends BaseSelectProps<T, Multipe> {
    filter?: (keywords: string, props: any) => boolean 
    searchable?: boolean
    creatable?: boolean
    labelMap?: Map<any, Children> 
    card?: boolean
    autoDisableArrow?: boolean
    keepKeywords?: boolean
}

export interface SelectEvents extends BaseSelectEvents { }

export interface SelectBlocks<T> extends BaseSelectBlocks<T> {
    menu: null 
}

const typeDefs: Required<TypeDefs<SelectProps>> = {
    ...BaseSelect.typeDefs,
    filter: Function,
    searchable: Boolean,
    creatable: Boolean,
    labelMap: Map,
    card: Boolean,
    autoDisableArrow: Boolean,
    keepKeywords: Boolean,
};

const defaults = (): Partial<SelectProps> => ({
    ...BaseSelect.defaults(),
    labelMap: new Map(),
    keepKeywords: true,
});

export class Select<
    T = string,
    Multipe extends boolean = false
> extends BaseSelect<SelectProps<T, Multipe>, SelectEvents, SelectBlocks<T>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public filterable =  useFilterable(this.input.keywords);
    public label = useLabel();

    init() {
        super.init();
        useEqualWidth();
    }

    protected getPlaceholder() {
        const {placeholder, creatable, filterable} = this.get();

        return isNullOrUndefined(placeholder) ?
            creatable && filterable ? _$('请输入或选择') : _$('请选择') :
            placeholder;
    }

    protected getLabel() {
        return this.label!.getLabel();
    }

    private getAllShowedValues(children: Children) {
        const values: any[] = [];
        const loop = (children: Children) => {
            eachChildren(children, vNode => {
                if (isComponentVNode(vNode, Option)) {
                    const props = vNode.props as OptionProps;
                    if (!props.disabled) {
                        values.push(props.value); 
                    }
                } else if (isComponentVNode(vNode, OptionGroup)) {
                    loop(vNode.props!.children);
                }
            });
        }

        loop(children);

        return values;
    }
}
