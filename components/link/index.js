import template from './index.vdt';

export default class Link extends Intact {
    static history = undefined;

    get template() { return template; }

    to(e) {
        e.preventDefault();
        this.trigger('click', e);
        Link.history.push(this.get('href'));
    }
}
