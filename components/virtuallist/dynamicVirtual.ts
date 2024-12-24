import {createVNode as h, ComponentFunction, ComponentConstructor} from 'intact';
import {isUndefined} from 'intact-shared';

export type DynamicVirtualProps = {
    tagName: string | ComponentConstructor,
}

export const DynamicVirtual: ComponentFunction<DynamicVirtualProps> = ({tagName, ...props}) => {
    if (isUndefined(tagName)) {
        tagName = 'div';
    }
    return h(tagName, props);
}
