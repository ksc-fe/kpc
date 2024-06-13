import {Component, TypeDefs} from 'intact';
import {DescriptionItemProps} from './item';
import template from './descriptions.vdt';
import { useConfigContext } from '../config';

export interface DescriptionsProps {
    vertical?: boolean
    column?: number
    columns?: DescriptionItemProps[]
    title?: string
}

const typeDefs: Required<TypeDefs<DescriptionsProps>> = {
    vertical: Boolean,
    column: Number,
    columns: Array,
    title: String,
};

const defaults = (): Partial<DescriptionsProps> => ({
    column: 3,
});

export class Descriptions extends Component<DescriptionsProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    
    private config = useConfigContext();
}