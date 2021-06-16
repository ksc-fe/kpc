import {Component, VNode, TypeDefs, render, createVNode as h} from 'intact';
import template from './message.vdt';
import {Messages} from './messages';

export interface MessageProps {
    content?: string | VNode
    duration?: number
    type?: 'info' | 'danger' | 'success' | 'warning'
    key?: string | number
    value?: boolean
    closable?: boolean
    hideIcon?: boolean
}

const typeDefs: Required<TypeDefs<MessageProps>> = {
    content: [String, /*VNode*/],
    duration: Number,
    type: ['info', 'danger', 'success', 'warning'],
    key: [String, Number],
    value: Boolean,
    closable: Boolean,
    hideIcon: Boolean,
};

let id = 0;
const defaults = (): Partial<MessageProps> => ({
    duration: 5000,
    type: 'info',
    key: id++,
    value: false,
    closable: true,
    hideIcon: false,
});

let messages: Messages | null = null;

export class Message<T extends MessageProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    static notice(content: string, duration: number = 5000, type: MessageProps['type'] ='info') {
        if (!messages) {
            const container = document.createElement('div');
            document.body.append(container);
            render(h(Messages, {ref: i => messages = i}), container); 
        }

        messages!.notice(h(Message, {content, duration, key: id++}));
    }
}
