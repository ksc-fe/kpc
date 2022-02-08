import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface WorkflowCardProps {
    title: string
}

const typeDefs: Required<TypeDefs<WorkflowCardProps>> = {
    title: String
};


const defaults = (): Partial<WorkflowCardProps> => ({
    title: ''
});

export class WorkflowCard extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
