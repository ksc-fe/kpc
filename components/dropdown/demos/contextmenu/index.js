export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return { 
            show: false,
            event: null,
        };
    }

    _showMenu(event) {
        event.preventDefault();
        this.set({
            show: true,
            event: event,
        });
    }
}