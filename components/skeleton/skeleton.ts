import {Component, TypeDefs} from 'intact';
import template from './skeleton.vdt';
import { useConfigContext } from '../config';

export interface SkeletonProps {
    loading: boolean
    animated?: boolean
    rows?: number
    avator?: boolean
    size?: string
}

export interface SkeletonEvents {}

export interface SkeletonBlocks {}

const typeDefs: Required<TypeDefs<SkeletonProps>> = {
    loading: Boolean,
    animated: Boolean,
    rows: Number,
    avator: Boolean,
    size: String
};

const defaults = (): Partial<SkeletonProps> => ({
    rows: 2,
    size: 'large'
});

export class Skeleton extends Component<SkeletonProps, SkeletonEvents, SkeletonBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
}