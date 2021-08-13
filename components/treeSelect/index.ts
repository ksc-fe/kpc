import {Component, TypeDefs, Children, Key} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps} from '../select/base';
import {useEqualWidth} from '../select/useEqualWidth';
import {TreeProps} from '../tree';
import {_$} from '../../i18n';
import {isNullOrUndefined} from 'intact-shared';
import type {DataItem} from '../tree/useNodes';
import {useReceive} from '../../hooks/useReceive';
import {useValue} from './useValue';

export interface TreeSelectProps extends BaseSelectProps {
    value?: Key | Key[],
    data?: TreeProps['data']
    filter?: TreeProps['filter']
    uncorrelated?: TreeProps['uncorrelated'] 
    load?: TreeProps['load']
    showLine?: TreeProps['showLine']
    defaultExpandAll?: TreeProps['defaultExpandAll']
    checkbox?: TreeProps['checkbox']
}

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
    defaultExpandAll: true,
    showLine: true,
});

export class TreeSelect extends BaseSelect<TreeSelectProps> {
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
                this.set('multiple', true, {silent: true});
            }
        });
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
        const loop = (children: DataItem[]): DataItem | undefined => {
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
}
