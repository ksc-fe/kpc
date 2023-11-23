import { Component, TypeDefs, Key } from 'intact';
import template from './tags.vdt';
import { useNowrap } from './useNowrap';
import { TagProps, typeDefs as tagTypeDefs } from './base';
import { useChildren } from './useChildren';
import { useDraggable } from './useDraggable';
import type {Events} from '../types';
import { useConfigContext } from '../config';

export interface TagsProps extends Pick<TagProps, 'size' | 'border'> {
    nowrap?: boolean 
    draggable?: boolean
}

export type TagsDragStartParam = {
    key: Key
    from: number
}

export type TagsDragEndParam = TagsDragStartParam & {
    to: number
} 

export interface TagsEvents {
    dragstart: [TagsDragStartParam]
    dragend: [TagsDragEndParam]
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

const events: Events<TagsEvents> = {
    dragstart: true,
    dragend: true,
};

export class Tags extends Component<TagsProps, TagsEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private children = useChildren();
    private draggable = useDraggable(this.children);
    private nowrap = useNowrap(this.draggable);
    private config = useConfigContext();
}
