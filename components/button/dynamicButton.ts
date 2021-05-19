import {createVNode as h, ComponentFunction, ComponentConstructor} from 'intact';

export type DynamicButtonProps = {
    href?: string,
    htmlType?: string
    tagName: string | ComponentConstructor,
    type?: string
}

export const DynamicButton: ComponentFunction<DynamicButtonProps> = (props) => {
    let tagName = props.tagName;
    if (props.href && tagName === 'button') {
        tagName = 'a';
    }
    if (tagName === 'button') {
        // set type of html button
        props = {...props, type: props.htmlType};
    }

    return h(tagName, props);
}
