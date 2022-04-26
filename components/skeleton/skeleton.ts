import {Component, TypeDefs} from 'intact';
import template from './skeleton.vdt';

export interface SkeletonProps {
    loading: boolean
    animated?: boolean
    rows?: number
    avator?: boolean
}

export interface SkeletonEvents {}

export interface SkeletonBlocks {}

const typeDefs: Required<TypeDefs<SkeletonProps>> = {
    loading: Boolean,
    animated: Boolean,
    rows: Number,
    avator: Boolean
};

const defaults = (): Partial<SkeletonProps> => ({
    loading: true,
    animated: false,
    rows: 4,
    avator: false
});

export class Skeleton extends Component<SkeletonProps, SkeletonEvents, SkeletonBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}