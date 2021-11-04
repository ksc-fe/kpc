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

export class BreadcrumbItem extends Component<BreadcrumbItemProps> {
    static template = template;
    static typeDefs = typeDefs;

    private $router: any = null;

    @bind
    mounted() {
        this.$router = findRouter(this);
    }

    @bind
    private onClick(): void  {
        const to = this.get('to');

        if (to) {
            const $router = this.$router;
            if ($router && !isExternalLink(to)) {
                $router.push(to!);
            } else {
                window.location.href = to!;
            }
        }
    }
}
