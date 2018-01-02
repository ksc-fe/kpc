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

        if (content !== null && typeof content === 'object' && !content.tag) {
            content = Object.assign({}, content, {type}); 
        } else {
            content = {content, duration, type};
        }

        const message = new Message({
            ...content,
            value: true,
            _isInstance: true,
        });

        messages.notice(message); 
        
        return message;
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
            closable: true,

            // if this component is used as instance or not
            _isInstance: false,
        };
    }

    init(...args) {
        if (!this.get('value')) {
            // when use as component, render the component
            // but don't append it to parentDom, use a
            // placeholder instead of
            this.parentDom = null;
            super.init(...args);
            return this.placeholder = document.createComment("message");
        } else if (this.element) {
            // Messages render this component, return the 
            // original dom
            return this.element;
        }
        return super.init(...args);
    }

    hydrate(vNode) {
        // don't hydrate it, but initialize it
        this.init(null, vNode);
        return this.placeholder = document.createComment('message');
    }

    update(lastVNode, nextVNode) {
        // when this updating is from original parent,
        // update the original dom, but return the placeholder,
        // otherwise return the original dom which has been updated
        if (
            !lastVNode || 
            // it may have not parentVNode in vue
            (lastVNode.parentVNode && lastVNode.parentVNode.tag === MessageAnimate)
        ) {
            return this.element;
        }
        super.update(lastVNode, nextVNode);
        return this.placeholder;
    }

    toString() {
        // return the placeholder string for ssr
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
        if (this._isVue && !vNode) {
            messages.delete(this);
        } else if (vNode.parentVNode.tag === MessageAnimate && !this.get('_isInstance')) {
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

// MessageAniamte type for type checking
class MessageAnimate extends Intact.Animate {  }
