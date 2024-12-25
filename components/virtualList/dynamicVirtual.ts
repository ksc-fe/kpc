import {createVNode as h, ComponentFunction, ComponentConstructor} from 'intact';
import {isNullOrUndefined} from 'intact-shared';

export type DynamicVirtualProps = {
    tagName: string | ComponentConstructor,
}

export const DynamicVirtual: ComponentFunction<DynamicVirtualProps> = ({tagName, ...props}) => {
    if (isNullOrUndefined(tagName)) {
        tagName = 'div';
    }
    return h(tagName, props);
}
