import {Children, VNodeComponentClass, VNode, useInstance, watch, createRef, Props} from 'intact';
import {isNullOrUndefined, isStringOrNumber, EMPTY_OBJ} from 'intact-shared';
import {findChildren, isEmptyString, ValidVNode, isComponentVNode} from '../utils';
import {Option, OptionProps} from './option';
import {OptionGroup, OptionGroupProps} from './group';
import type {Select, SelectProps} from './select';
import {useBaseLabel} from './useBaseLabel';

export function useNowrap() {
    const instance = useInstance() as Select;
    const containerRef = createRef<HTMLDivElement>();

    instance.watch('value', refresh, { presented: true }); 

    function refresh() {
        if (!instance.get('multiple')) return;
        const container = containerRef.value!;
        const width = container.getBoundingClientRect().width;

        console.log('aaa', width);
    }

    return { containerRef };
}
