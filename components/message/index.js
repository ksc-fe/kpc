import Intact from 'intact';
import template from './index.vdt';
import message from './message.vdt';
import './index.styl';

let messages;
let id = 0;

export default class Message extends Intact {
    @Intact.template()
    static template = message;

    static notice(content, duration = 5000, type = 'info') {
        if (!messages) {
            messages = Intact.mount(Messages, document.body);
        }

        const message = new Message({
            content,
            duration,
            type,
            value: true,
            _isInstance: true,
        });

        messages.notice(message); 
    }

    static info = (content, duration) => {
        Message.notice(content, duration, 'info');
    }

    static error = (content, duration) => {
        Message.notice(content, duration, 'danger');
    }

    static success = (content, duration) => {
        Message.notice(content, duration, 'success');
    }

    static warning = (content, duration) => {
        Message.notice(content, duration, 'warning');
    }


    defaults() {
        return {
            content: undefined,
            duration: 5000,
            type: 'info',
            key: id++,
            value: false,

            _isInstance: false,
        };
    }

    init(...args) {
        if (!this.get('value')) {
            this.parentDom = null;
            super.init(...args);
            return this.placeholder = document.createComment("message");
        } else if (this.element) {
            return this.element;
        }
        return super.init(...args);
    }

    hydrate(vNode) {
        this.init(null, vNode);
        return this.placeholder = document.createComment('message');
    }

    update(lastVNode, nextVNode) {
        if (
            !lastVNode || 
            lastVNode.parentVNode.tag === MessageAnimate 
        ) {
            return this.element;
        }
        super.update(lastVNode, nextVNode);
        return this.placeholder;
    }

    toString() {
        return '<!--message-->';
    }

    _init() {
        this.on('$change:value', (c, value) => {
            if (value) {
                messages.notice(this);
            } else {
                messages.delete(this);
            }
        });
    }

    _create() {
        if (!messages) {
            messages = Intact.mount(Messages, document.body);
        }
    }

    _mount() {
        if (!this.get('value')) return;

        const duration = this.get('duration');
        if (duration) {
            this.timer = setTimeout(() => {
                this.close();
            }, duration);
        }
    }

    close() {
        clearTimeout(this.timer);
        if (!this.get('_isInstance')) {
            this.set('value', false);
        } else {
            messages.delete(this);
        }
    }

    onMouseEnter() {
        clearTimeout(this.timer);
    }

    onMouseLeave() {
        clearTimeout(this.timer);
        this._mount();
    }

    destroy(vNode) {
        if (vNode.parentVNode.tag === MessageAnimate && !this.get('_isInstance')) {
            return;
        } else if (vNode.parentVNode.tag !== MessageAnimate) {
            messages.delete(this);
        } else {
            super.destroy(vNode);
        }
    }
}

class Messages extends Intact {
    @Intact.template()
    static template = template;


    defaults() {
        return {
            messages: [],
        };
    }

    _init() {
        this.MessageAnimate = MessageAnimate;
    }

    notice(message) {
        this.get('messages').push(message);
        this.update();
    }

    delete(message) {
        const messages = this.get('messages');
        const index = messages.indexOf(message);
        if (~index) {
            messages.splice(index, 1);
            this.update();
        }
    }
}

class MessageAnimate extends Intact.Animate {  }
