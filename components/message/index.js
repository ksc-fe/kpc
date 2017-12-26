import Intact from 'intact';
import template from './index.vdt';
import message from './message.vdt';
import './index.styl';

let instance;
let id = 0;

export default class Message extends Intact {
    @Intact.template()
    static template = message;

    static notice(message) {
        if (!instance) {
            instance = Intact.mount(Messages, document.body);
        }
        message.props._isInstance = true;
        message.props.value = true;
        instance.notice(message); 
    }

    defaults() {
        return {
            content: undefined,
            duration: 0, //5000,
            type: 'info',
            key: id++,
            value: false,

            _isInstance: false,
        };
    }

    _init() {
        this.on('$change:value', (c, value) => {
            if (value) instance.notice(this); //this.open();  
            else {
                // this.close();
                instance.delete(this);
            }
        });
    }

    _create() {
        if (!instance) {
            instance = Intact.mount(Messages, document.body);
        }
    }

    _mount() {
        const duration = this.get('duration');
        if (duration) {
            this.timer = setTimeout(() => {
                this.close();
            }, duration);
        }
    }

    open() {
        Message.notice(this);
    }

    close() {
        // this.destroy();
        // this._destroy();

        clearTimeout(this.timer);
        if (!this.get('_isInstance')) {
            this.set('value', false);
        } else {
            instance.delete(this);
        }
    }

    onMouseEnter() {
        clearTimeout(this.timer);
    }

    onMouseLeave() {
        clearTimeout(this.timer);
        this._mount();
    }

    _destroy() {
        // clearTimeout(this.timer);
        // instance.delete(this);
    }
}

class Messages extends Intact {
    @Intact.template()
    static template = template;

    static notice = (content, duration = 5000, type = 'info') => {
        if (!instance) {
            instance = Intact.mount(Messages, document.body);
        }
        instance.notice({
            content, duration, type
        }); 
    };

    // static delete(message) {
        // if (!instance) return;
        // install.delete(message);
    // }

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
            messages: [],
        };
    }

    notice(message) {
        // const item = {id: id++, ...props};
        // message.set('value', true, {silent: true});
        this.get('messages').push(message);
        this.update();
        // message.set('value', true);
        // this._delayClose(message);
    }

    // _delayClose(message) {
        // const duration = message.get('duration');
        // if (duration) {
            // message.timer = setTimeout(() => {
                // this.delete(message);
            // }, duration);
        // }
    // }

    delete(message) {
        // clearTimeout(message.timer);
        const messages = this.get('messages');
        messages.splice(messages.indexOf(message), 1);
        this.update();
    }

    // onMouseEnter(item) {
        // clearTimeout(item.timer);
    // }

    // onMouseLeave(item) {
        // clearTimeout(item.timer);
        // this._delayClose(item);
    // }
}
