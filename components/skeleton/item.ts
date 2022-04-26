import {Component, TypeDefs} from 'intact';
import template from './item.vdt';

type ItemType = 'text' | 'avator' | 'image' | 'button' | 'input';

export const itemTypeMap: ItemType[] = ['text', 'avator', 'image', 'button', 'input'];

export interface SkeletonItemProps {
    type?: ItemType,
}

export interface SkeletonItemEvents {}

export interface SkeletonItemBlocks {}

const typeDefs: Required<TypeDefs<SkeletonItemProps>> = {
    type: String
};

const defaults = (): Partial<SkeletonItemProps> => ({
    type: 'text'
});

export class SkeletonItem extends Component<SkeletonItemProps, SkeletonItemEvents, SkeletonItemBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}


