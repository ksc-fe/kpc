import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

let instance;
let id = 0;

export default class Message extends Intact {
    @Intact.template()
    static template = template;

    static notice = function(content) {
        if (!instance) {
            instance = Intact.mount(Message, document.body);
        }
        instance.notice({
            content
        }); 
    };

    defaults() {
        return {
            items: [],
        };
    }

    notice(props) {
        this.get('items').push({id: id++, content: props.content});
        this.update();
    }

    delete(item) {
        const items= this.get('items');
        items.splice(items.indexOf(item), 1);
        this.update();
    }
}
