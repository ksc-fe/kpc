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

    delete(key: number | string) {
        const messages = this.messages;
        const index = messages.findIndex(message => message.key === key);
        if (process.env.NODE_ENV !== 'production' && !~index) {
            throw new Error('You are removing a message that does not exist.');
        }

        messages.splice(index, 1);
        this.forceUpdate();
    }
}
