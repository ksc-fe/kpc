import {Component, TypeDefs, VNode} from 'intact';
import {bind} from '../utils';
import template from './item.vdt';
import {findRouter, isExternalLink} from '../utils';

export interface BreadcrumbItemProps {
    to?: string,
}

const typeDefs: Required<TypeDefs<BreadcrumbItemProps>> = {
    to: String,
};

export class BreadcrumbItem<T extends BreadcrumbItemProps = BreadcrumbItemProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;

    static $router: Array<String> = [];

    @bind
    mounted() {
        BreadcrumbItem.$router = findRouter(this);
    }

    @bind
    private onClick(): void  {
        const to = this.get('to');

        if (to) {
            const $router = BreadcrumbItem.$router;
            if ($router && !isExternalLink(to)) {
                $router.push(to!);
            } else {
                window.location.href = to!;
            }
        }
    }
}
