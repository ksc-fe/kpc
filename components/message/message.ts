import {
    Component,
    VNode,
    TypeDefs,
    render,
    createVNode as h,
    Children,
    Props,
} from 'intact';
import template from './message.vdt';
import {Messages} from './messages';
import {useDelayClose} from '../../hooks/useDelayClose';
import {isObject} from 'intact-shared';
import {bind} from '../utils';

export interface MessageProps {
    content?: Children
    duration?: number
    type?: 'info' | 'error' | 'success' | 'warning' 
    closable?: boolean
    hideIcon?: boolean
}

const typeDefs: Required<TypeDefs<MessageProps>> = {
    content: [String, VNode],
    duration: Number,
    type: ['info', 'error', 'success', 'warning'],
    closable: Boolean,
    hideIcon: Boolean,
};

let id = 0;
const defaults = (): Partial<MessageProps> => ({
    duration: 5000,
    type: 'info',
    closable: false,
});

let messages: Messages | null = null;

export class Message extends Component<MessageProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    static notice(
        content: Children | Partial<MessageProps>,
        duration: number = 3000,
        type: MessageProps['type'] ='info'
    ) {
        if (!messages) {
            const container = document.createElement('div');
            document.body.append(container);
            render(h(Messages, {ref: i => messages = i}), container); 
        }

        if (isObject(content) && !(content as any).tag) {
            content = {...content, type, key: id++} as Partial<Props<MessageProps>>;
        } else {
            content = {content, duration, type, key: id++} as Partial<Props<MessageProps>>;
        }

        messages!.notice(h(Message, content));
    }
    static info(content: Children | Partial<MessageProps>, duration?: number) {
        Message.notice(content, duration, 'info');
    }
    static error(content: Children | Partial<MessageProps>, duration?: number) {
        Message.notice(content, duration, 'error');
    }
    static success(content: Children | Partial<MessageProps>, duration?: number) {
        Message.notice(content, duration, 'success');
    }
    static warning(content: Children | Partial<MessageProps>, duration?: number) {
        Message.notice(content, duration, 'warning');
    }

    private delayClose = useDelayClose(
        this.close,
        this.get('duration')!
    );

    @bind
    close() {
        messages!.delete(this.get('key')!);
    }
}


