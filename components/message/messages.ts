import {Component, VNodeComponentClass} from 'intact';
import template from './messages.vdt';
import type {Message} from './message';

export class Messages extends Component {
    static template = template;

    private messages: VNodeComponentClass<Message>[] = [];

    notice(message: VNodeComponentClass<Message>) {
        this.messages.push(message);
        this.forceUpdate();
    }

    delete(message: VNodeComponentClass<Message>) {
        const messages = this.messages;
        const index = messages.indexOf(message);
        if (~index) {
            messages.splice(index, 1);
            this.forceUpdate();
        }
    }
}
