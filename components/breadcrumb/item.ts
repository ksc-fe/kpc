import {Component, TypeDefs, VNode} from 'intact';
import {bind} from '../utils';
import template from './item.vdt';
import {findRouter, isExternalLink} from '../utils';

export interface breadItemProps {
    to?: String,
    separator?: String
}

const typeDefs: Required<TypeDefs<breadItemProps>> = {
    to: String,
    separator: String
};

const defaults: Partial<breadItemProps> = {
    to: undefined,
    separator: undefined
} 

export default class BreadcrumbItem<T extends breadItemProps = breadItemProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

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
                $router.push(<string>to);
            } else {
                window.location.href = <string>to;
            }
        }
    }
}
