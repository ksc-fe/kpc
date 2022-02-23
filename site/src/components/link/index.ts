import {Component} from 'intact';
import {bind} from 'kpc';
import template from './index.vdt';
import {history} from '../../history';

interface LinkProps {
    href: string
}

export class Link extends Component<LinkProps> {
    static template = template;

    @bind
    goTo(e: MouseEvent) {
        e.preventDefault();
        history.push(this.get('href'));
    }
}
