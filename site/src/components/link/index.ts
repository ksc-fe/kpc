import {Component} from 'intact';
import {bind} from 'kpc';
import template from './index.vdt';
import {history} from '../../history';
import {version} from '../../router'

interface LinkProps {
    href: string
}

export class Link extends Component<LinkProps> {
    static template = template;

    static to = (href: string) => {
        history.push(version + href);
    };

    static url = (href: string) => version + href;

    @bind
    goTo(e: MouseEvent) {
        if (!e.metaKey) {
            e.preventDefault();
        }
        history.push(version + this.get('href'));
    }
}
