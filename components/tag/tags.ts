import { Component, TypeDefs } from 'intact';
import template from './tags.vdt';
import { useNowrap } from './useNowrap';
import { TagProps, typeDefs as tagTypeDefs } from './base';
import { useChildren } from './useChildren';
import { useDraggable } from './useDraggable';

export interface TagsProps extends Pick<TagProps, 'size' | 'border'> {
    nowrap?: boolean 
    draggable?: boolean
}

const typeDefs: Required<TypeDefs<TagsProps>> = {
    nowrap: Boolean,
    draggable: Boolean,
    size: tagTypeDefs.size,
    border: tagTypeDefs.border,
};

const defaults = (): Partial<TagsProps> => ({
    size: 'default',
    border: 'none',
});

export class Tags extends Component<TagsProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private children = useChildren();
    private draggable = useDraggable(this.children);
    private nowrap = useNowrap(this.draggable);
}
