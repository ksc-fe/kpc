import {Component, TypeDefs, Children, Key} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps, BaseSelectEvents, BaseSelectBlocks} from '../select/base';
import {useEqualWidth} from '../select/useEqualWidth';
import {TreeProps} from '../tree';
import {_$} from '../../i18n';
import {isNullOrUndefined, isStringOrNumber} from 'intact-shared';
import type {DataItem} from '../tree/useNodes';
import {useReceive} from '../../hooks/useReceive';
import {useValue} from './useValue';
import {bind} from '../utils';

export interface TreeSelectProps<
    K extends Key = Key,
    Multipe extends boolean = boolean,
    Checkbox extends boolean = boolean,
> extends BaseSelectProps<K, Multipe, Checkbox extends true ? K [] : K | null> {
    // value?: Multipe extends true ? K[] : Checkbox extends true ? K[] :  K | null
    // multiple?: Checkbox extends true ? true : Multipe,
    data?: TreeProps<K>['data']
    uncorrelated?: boolean
    load?: TreeProps<K>['load']
    showLine?: boolean
    defaultExpandAll?: boolean
    checkbox?: Checkbox
    filter?: (keywords: string, data: DataItem<K>) => boolean
}

export interface TreeSelectEvents extends BaseSelectEvents { }

export interface TreeSelectBlocks<K> extends BaseSelectBlocks<K> { }

const typeDefs: Required<TypeDefs<TreeSelectProps>> = {
    ...BaseSelect.typeDefs,
    data: Array,
    filter: Function,
    uncorrelated: Boolean,
    load: Function,
    showLine: Boolean,
    defaultExpandAll: Boolean,
    checkbox: Boolean,
};

const defaults = (): Partial<TreeSelectProps> => ({
    ...BaseSelect.defaults(),
    defaultExpandAll: true,
    showLine: true,
});

export class TreeSelect<
    K extends Key = Key,
    Checkbox extends boolean = false,
    Multipe extends boolean = Checkbox extends true ? true : false,
> extends BaseSelect<
    TreeSelectProps<K, Multipe, Checkbox>,
    TreeSelectEvents,
    TreeSelectBlocks<K>
> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private value = useValue();

    init() {
        super.init();
        useEqualWidth();

        // if we get checkbox is true, set mutiple to true forcely
        useReceive<this>(['checkbox', 'multiple'], () => {
            if (this.get('checkbox')) {
                this.set<true>('multiple', true, {silent: true});
            }
        });
    }

    public expandAll() {
        this.value.treeRef.value!.expandAll();
    }

    protected getPlaceholder() {
        const {placeholder} = this.get();

        return isNullOrUndefined(placeholder) ? _$('请选择') : placeholder; 
    }

    protected getLabel() {
        const {data, value, multiple} = this.get();
        if (isNullOrUndefined(data) || isNullOrUndefined(value)) return;

        let label: Children | Children[];
        let counts = 0;
        const loop = (children: DataItem<K>[]): DataItem<K> | undefined => {
            return children.find(item => {
                if (!multiple) {
                    if (item.key === value) {
                        label = item.label;
                        return true;
                    }
                } else {
                    const index = (value as Key[]).indexOf(item.key!);
                    if (index > -1) {
                        if (!label) label = [];
                        // keep the order
                        (label as Children[])[index] = item.label; 
                        if (++counts === (value as Key[]).length) {
                            return true;
                        }
                    }
                }

                if (item.children) {
                    return loop(item.children);
                }

                return false;
            });
        };

        loop(data);

        return label;
    }

    @bind
    private filter(data: DataItem<K>) {
        let keywords = this.input.keywords.value.trim();
        if (!keywords) return true;

        const {filter} = this.get();
        if (filter) return filter(keywords, data);

        keywords = keywords.toLowerCase();

        return isStringOrNumber(data.label) && 
            String(data.label).toLowerCase().includes(keywords) ||
            String(data.key).toLowerCase().includes(keywords);
    }
}
