import {Component, TypeDefs, VNode} from 'intact';
import {bind} from '../utils';
import template from './item.vdt';
import {useRouter, navigate} from '../../hooks/useRouter';
import { useConfigContext } from '../config';

export interface BreadcrumbItemProps {
    to?: string | object,
}

const typeDefs: Required<TypeDefs<BreadcrumbItemProps>> = {
    to: [String, Object],
};

export class BreadcrumbItem extends Component<BreadcrumbItemProps> {
    static template = template;
    static typeDefs = typeDefs;

    private router = useRouter();
    private config = useConfigContext();

    @bind
    private onClick(): void  {
        navigate(this.router.value, this.get('to'));
    }
}
